// components/VideoListSkeleton.jsx
export default function VideoListSkeleton({ count = 12 }) {
	return (
		<div className="divide-y divide-neutral-800 animate-pulse">
			{Array.from({ length: count }).map((_, i) => (
				<div key={i} className="flex items-center gap-4 py-4">
					<div className="flex-shrink-0 w-32 h-20 rounded-md bg-neutral-700" />
					<div className="flex-1 min-w-0">
						<div className="h-4 w-5/6 bg-neutral-700 rounded" />
						<div className="h-3 w-2/3 bg-neutral-600 rounded mt-2" />
					</div>
				</div>
			))}
		</div>
	);
}
