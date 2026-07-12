"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ page, total, limit, className = "mt-8" }) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const totalPages = Math.max(1, Math.ceil(total / limit));

	if (totalPages <= 1) return null;

	const goToPage = (targetPage) => {
		const params = new URLSearchParams(searchParams.toString());
		if (targetPage > 1) {
			params.set("page", String(targetPage));
		} else {
			params.delete("page");
		}
		const queryString = params.toString();
		router.push(queryString ? `${pathname}?${queryString}` : pathname);
	};

	return (
		<div className={`flex items-center justify-end gap-4 text-white ${className}`}>
			<button
				type="button"
				onClick={() => goToPage(page - 1)}
				disabled={page <= 1}
				className="px-4 py-2 rounded-md bg-neutral-700 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-600">
				Previous
			</button>
			<span className="text-sm text-neutral-300">
				Page {page} of {totalPages}
			</span>
			<button
				type="button"
				onClick={() => goToPage(page + 1)}
				disabled={page >= totalPages}
				className="px-4 py-2 rounded-md bg-neutral-700 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-600">
				Next
			</button>
		</div>
	);
}
