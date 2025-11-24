import React from "react";

export default async function SearchBar() {
	return (
		<div>
			<form className="max-w-2xl mx-auto">
				<div className="flex shadow-xs rounded-base -space-x-0.5">
					<label htmlFor="search-dropdown" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Your
						Email</label>
					<button id="dropdown-button" data-dropdown-toggle="dropdown" type="button"
							className="rounded-l-3xl inline-flex items-center shrink-0 z-10 text-body bg-gray-800 box-border hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
						<svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
							 height="24" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								  d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
						</svg>
						All categories
						<svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
							 height="24" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								  d="m19 9-7 7-7-7"/>
						</svg>
					</button>
					<div id="dropdown"
						 className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
						<ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdown-button">
							<li>
								<a href="#"
								   className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Shopping</a>
							</li>
							<li>
								<a href="#"
								   className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Images</a>
							</li>
							<li>
								<a href="#"
								   className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">News</a>
							</li>
							<li>
								<a href="#"
								   className="block p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Finance</a>
							</li>
						</ul>
					</div>
					<input type="search" id="search-dropdown" id="input-group-1"
						   className="px-3 py-2.5 bg-gray-800 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body"
						   placeholder="Search for products" required/>
					<button type="button"
							className="rounded-r-3xl inline-flex items-center text-white bg-gray-800 hover:bg-gray-800-strong box-border focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
						<svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
							 height="24" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
								  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
						</svg>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}