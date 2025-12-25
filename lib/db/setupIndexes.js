import { getDb } from "./client.js";

async function setupIndexes() {
    const db = await getDb();
    const collection = db.collection("media");

    // Text index for search
    await collection.createIndex(
        {
            title: "text",
            description: "text",
            "searchMeta.keywords": "text",
            "searchMeta.transcript": "text"
        },
        {
            weights: {
                title: 10,
                "searchMeta.keywords": 8,
                description: 5,
                "searchMeta.transcript": 2
            },
            name: "media_text_search"
        }
    );

    // Indexes for filtering and sorting
    await collection.createIndex({ type: 1 });
    await collection.createIndex({ tags: 1 });
    await collection.createIndex({ categories: 1 });
    await collection.createIndex({ uploadedAt: -1 });
    console.log("Indexes created successfully");
    process.exit(0);
}

setupIndexes().catch(err => {
    console.error("Error creating indexes:", err);
    process.exit(1);
});
