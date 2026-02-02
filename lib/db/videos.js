// lib/db/videos.js
import { getDb } from "./client.js";

export async function getVideos(query) {
	try {
		const db = await getDb();
		const collection = db.collection("media"); // matches your existing setup

		// build the search filter
		const filter = query
			? { $text: { $search: query } } // use text index for search
			: {};

		const videos = await collection
			.find(filter)
			.limit(12)
			.toArray();

		return videos;
	} catch (err) {
		console.error("Error fetching videos:", err);
		return [];
	}
}
