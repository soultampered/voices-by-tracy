"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ className = "" }) {
	const router = useRouter();
	const { locale } = useParams();
	const searchParams = useSearchParams();
	const [value, setValue] = useState(searchParams.get("search") || "");

	useEffect(() => {
		setValue(searchParams.get("search") || "");
	}, [searchParams]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const params = new URLSearchParams();
		if (value.trim()) params.set("search", value.trim());

		const queryString = params.toString();
		const target = `/${locale}/search-results`;
		router.push(queryString ? `${target}?${queryString}` : target);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={`flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 pl-3 pr-1.5 py-1.5 focus-within:border-blue-500 transition-colors ${className}`}>
			<FaSearch className="text-neutral-500 text-xs flex-shrink-0" aria-hidden="true" />
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search videos..."
				className="w-full bg-transparent text-white placeholder-neutral-500 text-sm focus:outline-none"
			/>
			{value && (
				<button
					type="button"
					aria-label="Clear search"
					onClick={() => setValue("")}
					className="flex-shrink-0 px-2 py-1 rounded-md text-xs font-semibold bg-neutral-700 text-neutral-200 hover:bg-neutral-600 transition-colors">
					Clear
				</button>
			)}
			<button
				type="submit"
				aria-label="Search"
				className="flex-shrink-0 w-6 h-6 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs flex items-center justify-center transition-colors">
				→
			</button>
		</form>
	);
}
