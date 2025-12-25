import { searchMedia } from "@/lib/db/queries/media.js";

export const GET = async (req) => {
    const url = new URL(req.url);
    const q = url.searchParams.get("q") || "";
    const type = url.searchParams.get("type") || null;
    const tags = url.searchParams.getAll("tags");
    const categories = url.searchParams.getAll("categories");
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");

    try {
        const data = await searchMedia({ q, type, tags, categories, page, limit });
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
};
