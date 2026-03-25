import { MongoClient } from "mongodb";
import { environment } from "../config/environment.js";
import cloudinary from "../lib/cloudinary.js";
import { MEDIA_COLLECTION } from "../lib/db/schemas/media.schema.js";

const client = new MongoClient(environment.mongodbUri);

const AUDIO_FORMATS = ["mp3", "wav", "m4a", "aac", "ogg", "flac"];

const slugify = (value) => {
	return String(value || "")
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
};

const buildTitleFromPublicId = (publicId) => {
	const lastSegment = String(publicId || "").split("/").pop() || "";
	return lastSegment.replace(/[_-]+/g, " ").trim();
};

const buildTitle = (asset) => {
	if (asset.display_name) {
		return String(asset.display_name).trim();
	}

	return buildTitleFromPublicId(asset.public_id);
};

const buildResolution = (asset) => {
	if (asset.width && asset.height) {
		return `${asset.width}x${asset.height}`;
	}

	return "";
};

const inferTags = (asset) => {
	const publicId = String(asset.public_id || "").toUpperCase();

	if (publicId.includes("_EN_") || publicId.endsWith("_EN")) {
		return ["english"];
	}

	if (publicId.includes("_FR_") || publicId.endsWith("_FR")) {
		return ["french"];
	}

	return [];
};

const inferType = (asset) => {
	const format = String(asset.format || "").toLowerCase();

	if (AUDIO_FORMATS.includes(format)) {
		return "audio";
	}

	return "video";
};

const inferCategories = (type) => {
	if (type === "audio") {
		return ["demo", "audio"];
	}

	return ["demo", "video"];
};

const buildThumbnailUrl = (asset, type) => {
	if (type === "audio") {
		return "";
	}

	return cloudinary.url(asset.public_id, {
		resource_type: "video",
		format: "jpg",
		secure: true,
		transformation: [
			{
				quality: "auto",
				fetch_format: "auto",
				width: 1280,
				crop: "fill",
				start_offset: "0"
			}
		]
	});
};

const mapAssetToDocument = (asset) => {
	const title = buildTitle(asset);
	const tags = inferTags(asset);
	const type = inferType(asset);
	const categories = inferCategories(type);

	return {
		slug: slugify(title || asset.public_id),
		type,
		title,
		description: "",
		sourceUrl: asset.secure_url || "",
		thumbnailUrl: buildThumbnailUrl(asset, type),
		duration: typeof asset.duration === "number" ? asset.duration : 0,
		tags,
		categories,
		uploadedAt: asset.created_at ? new Date(asset.created_at) : new Date(),
		searchMeta: {
			keywords: categories.concat(tags),
			transcript: ""
		},
		metadata: {
			format: asset.format || "",
			bitrate: 0,
			resolution: buildResolution(asset),
			sampleRate: 0
		},
		cloudinary: {
			publicId: asset.public_id || "",
			assetId: asset.asset_id || "",
			folder: "",
			resourceType: asset.resource_type || "video"
		}
	};
};

const fetchAllVideoResources = async () => {
	const resources = [];
	let nextCursor;

	do {
		const response = await cloudinary.api.resources({
			type: "upload",
			resource_type: "video",
			max_results: 100,
			next_cursor: nextCursor
		});

		resources.push.apply(resources, response.resources || []);
		nextCursor = response.next_cursor;
	} while (nextCursor);

	return resources;
};

async function importCloudinaryMedia() {
	try {
		const assets = await fetchAllVideoResources();

		if (assets.length === 0) {
			console.log("No Cloudinary video assets found.");
			return;
		}

		const documents = assets.map(mapAssetToDocument);

		await client.connect();
		const db = client.db();
		const collection = db.collection(MEDIA_COLLECTION);

		const operations = documents.map((document) => ({
			updateOne: {
				filter: { "cloudinary.publicId": document.cloudinary.publicId },
				update: { $set: document },
				upsert: true
			}
		}));

		const result = await collection.bulkWrite(operations);

		console.log(`Fetched ${assets.length} Cloudinary asset(s)`);
		console.log(`Prepared ${documents.length} MongoDB document(s)`);
		console.log(`Inserted: ${result.upsertedCount}`);
		console.log(`Matched existing: ${result.matchedCount}`);
		console.log(`Modified: ${result.modifiedCount}`);
		console.log("Cloudinary media import completed successfully");
	} catch (error) {
		console.error("Cloudinary media import failed:", error.message);
		process.exitCode = 1;
	} finally {
		await client.close();
	}
}

importCloudinaryMedia();