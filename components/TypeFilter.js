"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const TYPES = [
	{ value: "", label: "All" },
	{ value: "video", label: "Video" },
	{ value: "audio", label: "Audio" },
];

export default function TypeFilter({ type }) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const setType = (value) => {
		const params = new URLSearchParams(searchParams.toString());
		if (value) {
			params.set("type", value);
		} else {
			params.delete("type");
		}
		params.delete("page");

		const queryString = params.toString();
		router.push(queryString ? `${pathname}?${queryString}` : pathname);
	};

	return (
		<div className="flex gap-2 mb-6">
			{TYPES.map((t) => (
				<button
					key={t.value || "all"}
					type="button"
					onClick={() => setType(t.value)}
					className={`px-4 py-2 rounded-md text-sm font-semibold ${
						(type || "") === t.value
							? "bg-blue-600 text-white"
							: "bg-neutral-700 text-neutral-200 hover:bg-neutral-600"
					}`}>
					{t.label}
				</button>
			))}
		</div>
	);
}
