"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function SearchBar({ className = "" }) {
	const router = useRouter();
	const { locale } = useParams();
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const params = new URLSearchParams();
		if (value.trim()) params.set("search", value.trim());

		const queryString = params.toString();
		const target = `/${locale}/search-results`;
		router.push(queryString ? `${target}?${queryString}` : target);
	};

	return (
		<form onSubmit={handleSubmit} className={`flex ${className}`}>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search videos..."
				className="w-full px-4 py-2 rounded-l-md border border-neutral-700 bg-neutral-900 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<button
				type="submit"
				className="px-4 py-2 rounded-r-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500">
				Search
			</button>
		</form>
	);
}
