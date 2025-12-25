/**
 * Media collection schema (documentation + helpers)
 * Collection: media
 * Used by:
 * - /api/search
 * This file MUST stay server-only.
 */

export const MEDIA_COLLECTION = "media";
/**
 * Canonical media document shape
 */
export const MEDIA_SCHEMA = {
    type: "video | audio",
    title: "string",
    description: "string",
    sourceUrl: "string",
    thumbnailUrl: "string",
    duration: "number", // seconds
    tags: ["string"],
    categories: ["string"],
    uploadedAt: "Date",
    searchMeta: {
        keywords: ["string"],
        transcript: "string"
    },
    metadata: {
        format: "string",
        bitrate: "number",
        resolution: "string",
        sampleRate: "number"
    }
};

/**
 * Fields returned to the search UI
 */
export const MEDIA_SEARCH_PROJECTION = {
    title: 1,
    type: 1,
    thumbnailUrl: 1,
    duration: 1,
    sourceUrl: 1,
    tags: 1,
    uploadedAt: 1,
    score: { $meta: "textScore" }
};

