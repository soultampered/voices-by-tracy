/**
 * Collection: media
 * Used by:
 * - /api/search
 * - lib/db/queries/media.js (searchMedia)
 * This file MUST stay server-only.
 */

export const MEDIA_COLLECTION = "media";
/**
 * Canonical media document shape
 */
export const MEDIA_SCHEMA = {
    slug: "string",
    type: "video | audio",
    title: "string",
    description: "string",
    sourceUrl: "string",
    thumbnailUrl: "string",
    duration: "number",
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
    },
    cloudinary: {
        publicId: "string",
        assetId: "string",
        folder: "string",
        resourceType: "string"
    }
};

/**
 * Fields returned to the search UI
 */
export const MEDIA_SEARCH_PROJECTION = {
    slug: 1,
    title: 1,
    type: 1,
    description: 1,
    thumbnailUrl: 1,
    duration: 1,
    sourceUrl: 1,
    tags: 1,
    categories: 1,
    uploadedAt: 1
};