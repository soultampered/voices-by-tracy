import { searchMediaCached } from "@/lib/db/queries/media.js";
import { rateLimit } from "@/lib/rateLimit";

export const GET = async (req) => {
    const rateLimitResponse = await rateLimit(30, 60000)(req);
    if (rateLimitResponse) {
        return rateLimitResponse;
    }

    const url = new URL(req.url);
    const searchTerm = url.searchParams.get("search") || "";
    const type = url.searchParams.get("type") || null;
    const tags = url.searchParams.getAll("tags");
    const categories = url.searchParams.getAll("categories");
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");

    try {
        const data = await searchMediaCached({ searchTerm, type, tags, categories, page, limit });
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
};
