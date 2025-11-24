
import React from "react";
import {videoSample} from "@public/demoData";

const VideoListSkeleton = () => {
	return (
		<div className="rounded-t-3xl overflow-auto overflow-y-scroll bg-gray-800 pt-3">
			<div className="bodyContainer mx-auto max-w-[1300px]">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
					{videoSample.map((video) => (
						<div key={video.id}>
							<div className="animate-pulse">
								<div role="status"
									 className="flex items-center justify-center h-56 max-w-sm bg-gray-700 bg-neutral-500 shadow-md rounded-base">
									<svg className="w-11 h-11 text-fg-disabled" aria-hidden="true"
										 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
										 viewBox="0 0 24 24">
										<path stroke="currentColor" strokeLinejoin="round" strokeWidth="2"
											  d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"/>
									</svg>
									<span className="sr-only">Loading...</span>
								</div>
								<div>
									<div className="w-3/4 mt-2">
										<div className="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
										<div
											className="h-2 bg-gray-700 rounded-full max-w-[480px] mb-2.5"></div>
										<div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
										<div
											className="h-2 bg-gray-700 rounded-full max-w-[440px] mb-2.5"></div>
									</div>
									<span className="sr-only">Loading...</span>

								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default VideoListSkeleton;