export default function VideoRow({ thumbnail, title, description, duration }) {
	return (
		<li className="flex gap-4 items-start p-2 hover:bg-neutral-900 rounded-md cursor-pointer">
			{/* Thumbnail */}
			<div className="relative flex-shrink-0 w-40 h-24 rounded-md overflow-hidden bg-neutral-800">
				{thumbnail}
				{duration && (
					<span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
            {duration}
          </span>
				)}
			</div>

			{/* Text content */}
			<div className="flex flex-col justify-start flex-1">
				<h3 className="text-sm font-semibold text-white line-clamp-2">{title}</h3>
				{description && (
					<p className="text-xs text-neutral-400 line-clamp-2 mt-1">
						{description}
					</p>
				)}
			</div>
		</li>
	);
}
