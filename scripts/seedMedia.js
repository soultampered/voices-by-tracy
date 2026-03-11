import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";
import { environment } from "../config/environment.js";
import { MEDIA_COLLECTION } from "../lib/db/schemas/media.schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, "data", "media.json");

const client = new MongoClient(environment.mongodbUri);

const normalizeArray = (value) => {
	if (!value) {
		return [];
	}

	if (Array.isArray(value)) {
		return value.filter(Boolean);
	}

	return [value].filter(Boolean);
};

const validateRecord = (record, index) => {
	const errors = [];

	if (!record.title || typeof record.title !== "string") {
		errors.push("title is required");
	}

	if (!record.type || !["audio", "video"].includes(record.type)) {
		errors.push("type must be 'audio' or 'video'");
	}

	if (!record.sourceUrl || typeof record.sourceUrl !== "string") {
		errors.push("sourceUrl is required");
	}

	if (!record.thumbnailUrl || typeof record.thumbnailUrl !== "string") {
		errors.push("thumbnailUrl is required");
	}

	if (typeof record.duration !== "number") {
		errors.push("duration must be a number");
	}

	if (record.tags && !Array.isArray(record.tags)) {
		errors.push("tags must be an array");
	}

	if (record.categories && !Array.isArray(record.categories)) {
		errors.push("categories must be an array");
	}

	if (errors.length > 0) {
		throw new Error(`Record ${index + 1} is invalid: ${errors.join(", ")}`);
	}
};

const mapRecordToDocument = (record) => {
	return {
		type: record.type,
		title: record.title,
		description: record.description || "",
		sourceUrl: record.sourceUrl,
		thumbnailUrl: record.thumbnailUrl,
		duration: record.duration,
		tags: normalizeArray(record.tags),
		categories: normalizeArray(record.categories),
		uploadedAt: record.uploadedAt ? new Date(record.uploadedAt) : new Date(),
		searchMeta: {
			keywords: normalizeArray(record.keywords && record.keywords.length ? record.keywords : record.tags),
			transcript: record.transcript || ""
		},
		metadata: {
			format: record.format || "",
			bitrate: typeof record.bitrate === "number" ? record.bitrate : 0,
			resolution: record.resolution || "",
			sampleRate: typeof record.sampleRate === "number" ? record.sampleRate : 0
		}
	};
};

async function seed() {
	try {
		const rawFile = await fs.readFile(dataFilePath, "utf8");
		const rawRecords = JSON.parse(rawFile);

		if (!Array.isArray(rawRecords)) {
			throw new Error("media.json must contain an array of records");
		}

		rawRecords.forEach((record, index) => validateRecord(record, index));

		const documents = rawRecords.map(mapRecordToDocument);

		await client.connect();
		const db = client.db();
		const collection = db.collection(MEDIA_COLLECTION);

		const operations = documents.map((document) => ({
			updateOne: {
				filter: { sourceUrl: document.sourceUrl },
				update: { $set: document },
				upsert: true
			}
		}));

		if (operations.length === 0) {
			console.log("No media records found in scripts/data/media.json");
			return;
		}

		const result = await collection.bulkWrite(operations);

		console.log(`Processed ${documents.length} media record(s)`);
		console.log(`Inserted: ${result.upsertedCount}`);
		console.log(`Updated: ${result.modifiedCount}`);
		console.log("Media import completed successfully");
	} catch (error) {
		console.error("Media import failed:", error.message);
		process.exitCode = 1;
	} finally {
		await client.close();
	}
}

seed();