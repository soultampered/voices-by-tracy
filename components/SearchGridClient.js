"use client";

import { useState, useEffect } from "react";
import VideoResults from "./VideoResults";
import VideoListSkeleton from "./VideoListSkeleton";
import SearchFilter from "./SearchFilter";

export default function SearchGridClient({ videos }) {
	const [filteredVideos, setFilteredVideos] = useState(videos);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setFilteredVideos(videos);
		setIsReady(true);
	}, [videos]);

	if(!isReady) {
		return <VideoListSkeleton />;
	}

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
