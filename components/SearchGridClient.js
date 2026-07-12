"use client";

import VideoResults from "./VideoResults";
import Pagination from "./Pagination";
import TypeFilter from "./TypeFilter";

export default function SearchGridClient({ videos, total, page, limit, type, error }) {
	return (
		<>
			<TypeFilter type={type} />

			{error ? (
				<div className="min-h-[60vh]">
					<p className="text-red-400 mt-4">
						Something went wrong loading search results. Please try again shortly.
					</p>
				</div>
			) : videos.length === 0 ? (
				<div className="min-h-[60vh]">
					<p className="text-neutral-400 mt-4">No results found...</p>
				</div>
			) : (
				<>
					<Pagination page={page} total={total} limit={limit} className="mb-6" />
					<VideoResults videos={videos} />
					<Pagination page={page} total={total} limit={limit} />
				</>
			)}
		</>
	);
}
