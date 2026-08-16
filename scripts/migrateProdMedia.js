import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";
import { MEDIA_COLLECTION } from "../lib/db/schemas/media.schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, "prodMigrationData.json");

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;
const CONFIRM = process.argv.includes("--confirm");

if (!MONGODB_URI || !MONGODB_DB_NAME) {
	console.error("Missing MONGODB_URI or MONGODB_DB_NAME — run with --env-file=.env.production.local");
	process.exit(1);
}

function mapRecordToDocument(record) {
	return {
		slug: record.slug,
		type: record.type,
		title: record.title,
		description: record.description || "",
		sourceUrl: record.sourceUrl,
		thumbnailUrl: record.thumbnailUrl,
		duration: record.duration,
		tags: record.tags || [],
		categories: record.categories || [],
		uploadedAt: new Date(),
		searchMeta: {
			keywords: [...(record.categories || []), ...(record.tags || [])],
			transcript: record.transcript || "",
		},
		metadata: {
			format: record.format || "",
			bitrate: 0,
			resolution: record.resolution || "",
			sampleRate: 0,
		},
		cloudinary: record.cloudinary,
	};
}

async function migrate() {
	const raw = await fs.readFile(dataFilePath, "utf8");
	const records = JSON.parse(raw);
	const copied = records.filter((r) => r.status === "copied");
	const failed = records.filter((r) => r.status !== "copied");

	if (failed.length) {
		console.log(`Skipping ${failed.length} record(s) that failed the Cloudinary copy step:`);
		failed.forEach((r) => console.log(`  - ${r.slug}: ${r.error || "unknown error"}`));
	}

	const documents = copied.map(mapRecordToDocument);
	const badFolder = documents.find((d) => !d.cloudinary?.publicId?.startsWith("prod/"));
	if (badFolder) {
		throw new Error(`Refusing to run: found a record not under prod/ — ${badFolder.slug} (${badFolder.cloudinary?.publicId})`);
	}

	const client = new MongoClient(MONGODB_URI);
	await client.connect();
	const collection = client.db(MONGODB_DB_NAME).collection(MEDIA_COLLECTION);

	const existingCount = await collection.countDocuments();

	console.log(`Prod database: ${MONGODB_DB_NAME}`);
	console.log(`Existing docs in prod media collection: ${existingCount}`);
	console.log(`Docs prepared to replace them: ${documents.length}`);

	if (!CONFIRM) {
		console.log("\nDRY RUN — no changes made. Re-run with --confirm to actually delete the existing");
		console.log(`${existingCount} prod docs and insert the ${documents.length} new ones.`);
		await client.close();
		return;
	}

	console.log(`\n--confirm passed — deleting ${existingCount} existing docs and inserting ${documents.length} new ones...`);
	const deleteResult = await collection.deleteMany({});
	const insertResult = await collection.insertMany(documents);

	console.log(`Deleted: ${deleteResult.deletedCount}`);
	console.log(`Inserted: ${insertResult.insertedCount}`);
	console.log("Prod media migration complete.");

	await client.close();
}

migrate().catch((err) => {
	console.error("Migration failed:", err.message);
	process.exitCode = 1;
});
