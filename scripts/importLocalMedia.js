import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";
import { v2 as cloudinary } from "cloudinary";
import { MEDIA_COLLECTION } from "../lib/db/schemas/media.schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(
	process.env.HOME || process.env.USERPROFILE || "",
	"Desktop",
	"New Media for Tracy"
);
const SKIP_DIRS = new Set(["Media Source"]);
const CLOUDINARY_FOLDER = "dev";
const LOG_PATH = path.join(__dirname, "localMediaImportLog.json");

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

for (const [name, value] of Object.entries({
	MONGODB_URI,
	MONGODB_DB_NAME,
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET,
})) {
	if (!value) {
		console.error(`Missing required environment variable: ${name}`);
		process.exitCode = 1;
	}
}
if (process.exitCode === 1) {
	process.exit(1);
}

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
});

const client = new MongoClient(MONGODB_URI);

// Manual overrides for files that don't live inside a category folder.
const CATEGORY_OVERRIDES = {
	"Doublage FR - Luxsonic Technologies - Défi des soins de santé.webm": "medical-fr",
};

const slugify = (value) => {
	return String(value || "")
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
};

const cleanupTitle = (value) => {
	return String(value || "").replace(/[_-]+/g, " ").trim();
};

const categoryFromFolderName = (folderName) => {
	return folderName
		.replace(/^voicesbytracy_video-files-/, "")
		.replace(/_\d{4}-\d{2}-\d{2}_\d{4}$/, "");
};

const inferTags = (category) => {
	if (category.endsWith("-fr")) {
		return ["french"];
	}
	if (category.endsWith("-en")) {
		return ["english"];
	}
	return [];
};

const buildThumbnailUrl = (publicId) => {
	return cloudinary.url(publicId, {
		resource_type: "video",
		format: "jpg",
		secure: true,
		transformation: [
			{
				quality: "auto",
				fetch_format: "auto",
				width: 1280,
				crop: "fill",
				start_offset: "0",
			},
		],
	});
};

async function walkSourceFiles() {
	const entries = await fs.readdir(SOURCE_DIR, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		if (entry.name.startsWith(".")) continue;

		if (entry.isDirectory()) {
			if (SKIP_DIRS.has(entry.name)) continue;

			const category = categoryFromFolderName(entry.name);
			const dirPath = path.join(SOURCE_DIR, entry.name);
			const dirEntries = await fs.readdir(dirPath, { withFileTypes: true });

			for (const fileEntry of dirEntries) {
				if (!fileEntry.isFile() || fileEntry.name.startsWith(".")) continue;
				files.push({
					filePath: path.join(dirPath, fileEntry.name),
					fileName: fileEntry.name,
					category,
				});
			}
			continue;
		}

		if (entry.isFile()) {
			const override = CATEGORY_OVERRIDES[entry.name];
			if (!override) continue; // orphan file with no override: skip
			files.push({
				filePath: path.join(SOURCE_DIR, entry.name),
				fileName: entry.name,
				category: override,
			});
		}
	}

	return files;
}

function dedupeSlug(slug, seen) {
	if (!seen.has(slug)) {
		seen.set(slug, 1);
		return slug;
	}
	const count = seen.get(slug) + 1;
	seen.set(slug, count);
	return `${slug}-${count}`;
}

async function uploadFile(file, publicId) {
	// upload_large's promise form resolves with the internal chunked-upload
	// stream object, not the finished asset — it needs an explicit callback.
	return new Promise((resolve, reject) => {
		cloudinary.uploader.upload_large(
			file.filePath,
			{
				resource_type: "video",
				public_id: publicId,
				asset_folder: `${CLOUDINARY_FOLDER}/${file.category}`,
				use_filename: true,
				unique_filename: false,
				overwrite: false,
			},
			(error, result) => {
				if (error) reject(error);
				else resolve(result);
			}
		);
	});
}

async function resolveAsset(file, publicId) {
	try {
		const existing = await cloudinary.api.resource(publicId, { resource_type: "video" });
		return { asset: existing, status: "skipped-existing" };
	} catch (error) {
		if (error?.error?.http_code !== 404) throw error;
	}

	const uploaded = await uploadFile(file, publicId);
	return { asset: uploaded, status: "uploaded" };
}

function mapToDocument(file, asset) {
	const title = cleanupTitle(path.parse(file.fileName).name);
	const category = file.category;
	const tags = inferTags(category);

	return {
		slug: file.slug,
		type: "video",
		title,
		description: "",
		sourceUrl: asset.secure_url,
		thumbnailUrl: buildThumbnailUrl(asset.public_id),
		duration: typeof asset.duration === "number" ? asset.duration : 0,
		tags,
		categories: [category],
		uploadedAt: asset.created_at ? new Date(asset.created_at) : new Date(),
		searchMeta: {
			keywords: [category, ...tags],
			transcript: "",
		},
		metadata: {
			format: asset.format || "",
			bitrate: 0,
			resolution: asset.width && asset.height ? `${asset.width}x${asset.height}` : "",
			sampleRate: 0,
		},
		cloudinary: {
			publicId: asset.public_id,
			assetId: asset.asset_id || "",
			folder: `${CLOUDINARY_FOLDER}/${category}`,
			resourceType: asset.resource_type || "video",
		},
	};
}

async function importLocalMedia() {
	const log = [];

	try {
		const files = await walkSourceFiles();

		if (files.length === 0) {
			console.log(`No media files found under ${SOURCE_DIR}`);
			return;
		}

		const seenSlugs = new Map();
		for (const file of files) {
			const baseSlug = slugify(path.parse(file.fileName).name);
			file.slug = dedupeSlug(baseSlug, seenSlugs);
			file.publicId = `${CLOUDINARY_FOLDER}/${file.category}/${file.slug}`;
		}

		await client.connect();
		const db = client.db(MONGODB_DB_NAME);
		const collection = db.collection(MEDIA_COLLECTION);

		let uploaded = 0;
		let skipped = 0;
		let failed = 0;

		for (const file of files) {
			try {
				const { asset, status } = await resolveAsset(file, file.publicId);
				const document = mapToDocument(file, asset);

				await collection.updateOne(
					{ "cloudinary.publicId": document.cloudinary.publicId },
					{ $set: document },
					{ upsert: true }
				);

				if (status === "uploaded") uploaded += 1;
				else skipped += 1;

				console.log(`${status === "uploaded" ? "Uploaded" : "Skipped (exists)"}: ${file.publicId}`);
				log.push({ file: file.filePath, publicId: file.publicId, status });
			} catch (error) {
				failed += 1;
				console.error(`Failed: ${file.filePath} — ${error.message}`);
				log.push({ file: file.filePath, publicId: file.publicId, status: "failed", error: error.message });
			}
		}

		console.log(`\nProcessed ${files.length} file(s)`);
		console.log(`Uploaded: ${uploaded}`);
		console.log(`Skipped (already existed): ${skipped}`);
		console.log(`Failed: ${failed}`);
	} catch (error) {
		console.error("Local media import failed:", error.message);
		process.exitCode = 1;
	} finally {
		await fs.writeFile(LOG_PATH, JSON.stringify(log, null, 2));
		await client.close();
	}
}

importLocalMedia();
