// components/VideoListSkeleton.jsx
export default function VideoListSkeleton({ count = 8 }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
			{Array.from({ length: count }).map((_, i) => (
				<div key={i} className="flex flex-col">
					<div className="w-full pb-[56.25%] rounded-md bg-neutral-700" />
					<div className="h-4 w-5/6 bg-neutral-700 rounded mt-2" />
					<div className="h-3 w-2/3 bg-neutral-600 rounded mt-1" />
				</div>
			))}
		</div>
	);
}
