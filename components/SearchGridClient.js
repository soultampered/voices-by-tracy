"use client";

import { useState } from "react";
import VideoResults from "./VideoResults";
import VideoListSkeleton from "./VideoListSkeleton";
import SearchFilter from "./SearchFilter";

export default function SearchGridClient({ videos }) {
	const [filteredVideos, setFilteredVideos] = useState(videos);

	return (
		<>
			<SearchFilter videos={videos} onFilter={setFilteredVideos} />

			{filteredVideos.length === 0 ? (
				<p className="text-neutral-400 mt-4">No results found</p>
			) : (
				<VideoResults videos={filteredVideos} />
			)}
		</>
	);
}
