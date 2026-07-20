import { ObjectId } from "mongodb";
import { getDb } from "../client.js";
import { unstable_cache } from "next/cache";
import { MEDIA_SEARCH_PROJECTION } from "../schemas/media.schema.js";
import { environment } from "../../../config/environment.js";

function serializeMedia(doc) {
    return {
        ...doc,
        _id: doc._id?.toString(),
        uploadedAt: doc.uploadedAt ? new Date(doc.uploadedAt).toISOString() : null,
    };
}

// WHC shared hosting blocks outbound port 27017, so production routes Mongo
// queries through a small HTTPS proxy on Vercel instead (see
// voices-by-tracy-db-proxy). Local dev has no such block and talks to Atlas
// directly — the proxy path only activates when PROXY_URL is configured.
async function proxyFetch(path, params) {
    const url = new URL(path, environment.proxyUrl);
    Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") return;
        url.searchParams.set(key, Array.isArray(value) ? value.join(",") : value);
    });

    const response = await fetch(url, {
        headers: { "x-api-key": environment.proxyApiKey },
    });

    if (!response.ok) {
        throw new Error(`DB proxy request failed: ${response.status}`);
    }

    return response.json();
}

/**
 * Search media items with optional filters and pagination.
 * @param {Object} params
 * @param {string} params.searchTerm - search term
 * @param {string} params.type - filter by media type (audio/video)
 * @param {string[]} params.tags - filter by tags
 * @param {string[]} params.categories - filter by categories
 * @param {number} params.page - page number
 * @param {number} params.limit - items per page
 * @returns {Promise<{results: Array, total: number, page: number, limit: number}>}
 */
export async function searchMedia({ searchTerm, type, tags = [], categories = [], page = 1, limit = 10 }) {
    console.log("DEBUG proxyUrl present:", Boolean(environment.proxyUrl), "raw process.env.PROXY_URL:", JSON.stringify(process.env.PROXY_URL));
    if (environment.proxyUrl) {
        return proxyFetch("/api/search", { searchTerm, type, tags, categories, page, limit });
    }

    const db = await getDb();
    const collection = db.collection("media");

    const filter = {};

    if (type) filter.type = type;
    if (tags.length) filter.tags = { $all: tags };
    if (categories.length) filter.categories = { $all: categories };

    const query = searchTerm ? { $text: { $search: searchTerm }, ...filter } : filter;
    const projection = searchTerm
        ? { ...MEDIA_SEARCH_PROJECTION, score: { $meta: "textScore" } }
        : MEDIA_SEARCH_PROJECTION;

    const cursor = collection.find(query, { projection });

    if (searchTerm) {
        cursor.sort({ score: { $meta: "textScore" } });
    } else {
        cursor.sort({ uploadedAt: -1 });
    }

    const skip = (page - 1) * limit;
    const results = await cursor.skip(skip).limit(limit).toArray();
    const total = await collection.countDocuments(query);

    return { results: results.map(serializeMedia), total, page, limit };
}

/**
 * Cached version of searchMedia to reduce redundant \load on the DB cluster
 * for repeated identical searches within the revalidation window.
 * @see searchMedia
 */
export const searchMediaCached = unstable_cache(
    async (params) => searchMedia(params),
    ["search-media"],
    { revalidate: 30 }
);

/**
 * Fetch a single media item by slug.
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export async function getMediaBySlug(slug) {
    if (environment.proxyUrl) {
        const { media } = await proxyFetch("/api/media", { slug });
        return media;
    }

    const db = await getDb();
    const collection = db.collection("media");
    return collection.findOne({ slug });
}

/**
 * Cached version of getMediaBySlug for reuse in metadata + page render.
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export const getMediaBySlugCached = unstable_cache(async (slug) => {
    return getMediaBySlug(slug);
}, ["media-by-slug"],
    { revalidate: 60 }
);

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
