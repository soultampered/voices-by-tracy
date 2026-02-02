// components/VideoResults.jsx
import Image from "next/image";

export default function VideoResults({ videos }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{videos.map((video) => (
				<div key={video._id} className="flex flex-col cursor-pointer group">
					{/* Thumbnail */}
					<div className="relative w-full pb-[56.25%] rounded-md overflow-hidden bg-neutral-400">
						<Image
							src={video.thumbnail || "/placeholder.jpg"}
							alt={video.title}
							fill
							className="object-cover group-hover:scale-105 transition-transform"
						/>
						{video.duration && (
							<span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                {video.duration}
              </span>
						)}
					</div>

					{/* Title */}
					<h3 className="mt-2 text-sm font-semibold text-white line-clamp-2">
						{video.title}
					</h3>

					{/* Description */}
					{video.description && (
						<p className="text-xs text-neutral-400 line-clamp-2 mt-1">
							{video.description}
						</p>
					)}
				</div>
			))}
		</div>
	);
}
