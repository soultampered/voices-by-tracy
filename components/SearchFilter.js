import { useState } from "react";

export default function SearchFilter({ videos, onFilter }) {
	const [query, setQuery] = useState("");

	// Called when input changes
	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);

		// Filter videos client-side
		const filtered = videos.filter((video) => {
			const text = `${video.title} ${video.description || ""}`.toLowerCase();
			return text.includes(value.toLowerCase());
		});

		// Pass filtered array back to parent
		onFilter(filtered);
	};

	return (
		<div className="mb-4">
			<input
				type="text"
				value={query}
				onChange={handleChange}
				placeholder="Search videos..."
				className="w-full px-4 py-2 rounded-md border border-neutral-700 bg-neutral-900 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>
	);
}
