import Image from "next/image";
import Link from "next/link";
import { FaMusic, FaPlay } from "react-icons/fa";

// Static decorative bars for audio results — a hint that it's audio, not a
// real per-item Web Audio decode (that's reserved for actual player contexts
// like the hero, the demo watch page, and DemoPlayer — decoding every result
// in a 12-item grid just for a browse-time preview isn't worth the bandwidth).
const STATIC_BAR_HEIGHTS = [40, 70, 45, 90, 55, 30, 65, 50, 80, 40, 60, 35];

export default function VideoResults({ videos }) {
	return (
		<div className="divide-y divide-neutral-800">
			{videos.map((video) => (
				<Link
					key={video._id?.toString?.() || video._id}
					href={`/search-results/video/${video.slug}`}
					className="flex items-center gap-4 py-4 group">
					{/* Thumbnail */}
					<div className="relative flex-shrink-0 w-32 h-20 rounded-md overflow-hidden bg-neutral-800">
						{video.thumbnailUrl ? (
							<Image src={video.thumbnailUrl} alt={video.title} fill
								className="object-cover group-hover:scale-105 transition-transform"/>
						) : video.type === "audio" ? (
							<div className="absolute inset-0 flex items-center justify-center bg-neutral-700 text-white">
								<FaMusic className="w-6 h-6" aria-label="Audio" />
							</div>
						) : (
							<div className="absolute inset-0 flex items-center justify-center bg-neutral-700 text-white text-xs text-center px-1">
								No preview
							</div>
						)}
						{video.duration && (
							<span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
								{video.duration}
							</span>
						)}
						<span className="absolute inset-0 flex items-center justify-center">
							<span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white group-hover:bg-black/70 transition-colors">
								<FaPlay className="w-3 h-3 ml-0.5" aria-hidden="true" />
							</span>
						</span>
					</div>

					{/* Text content */}
					<div className="flex flex-col justify-center flex-1 min-w-0">
						<h3 className="text-sm font-semibold text-white line-clamp-2">
							{video.title}
						</h3>
						{video.description && (
							<p className="text-xs text-neutral-400 line-clamp-1 mt-1">
								{video.description}
							</p>
						)}
						{video.type === "audio" && (
							<div className="flex items-end gap-[2px] h-4 mt-2 max-w-xs" aria-hidden="true">
								{STATIC_BAR_HEIGHTS.map((h, i) => (
									<span key={i} className="flex-1 bg-teal-500/60 rounded-sm" style={{ height: `${h}%` }} />
								))}
							</div>
						)}
					</div>
				</Link>
			))}
		</div>
	);
}
