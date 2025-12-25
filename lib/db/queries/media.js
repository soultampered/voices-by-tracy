import { getDb } from "../client.js";

/**
 * Search media items with optional filters and pagination.
 * @param {Object} params
 * @param {string} params.q - search term
 * @param {string} params.type - filter by media type (audio/video)
 * @param {string[]} params.tags - filter by tags
 * @param {string[]} params.categories - filter by categories
 * @param {number} params.page - page number
 * @param {number} params.limit - items per page
 * @returns {Promise<{results: Array, total: number, page: number, limit: number}>}
 */
export async function searchMedia({ q, type, tags = [], categories = [], page = 1, limit = 10 }) {
    const db = await getDb();
    const collection = db.collection("media");

    const filter = {};

    if (type) filter.type = type;
    if (tags.length) filter.tags = { $all: tags };
    if (categories.length) filter.categories = { $all: categories };

    const query = q ? { $text: { $search: q }, ...filter } : filter;

    const cursor = collection.find(query);

    if (q) {
        cursor.sort({ score: { $meta: "textScore" } });
    } else {
        cursor.sort({ uploadedAt: -1 });
    }

    const skip = (page - 1) * limit;
    const results = await cursor.skip(skip).limit(limit).toArray();
    const total = await collection.countDocuments(query);

    return { results, total, page, limit };
}

/**
 * Fetch a single media item by ID.
 * @param {string} id
 */
export async function getMediaById(id) {
    const db = await getDb();
    const collection = db.collection("media");
    return collection.findOne({ _id: new ObjectId(id) });
}

/**
 * Fetch the most recent media uploads.
 * @param {number} limit
 */
export async function getRecentMedia(limit = 10) {
    const db = await getDb();
    const collection = db.collection("media");
    return collection.find().sort({ uploadedAt: -1 }).limit(limit).toArray();
}
