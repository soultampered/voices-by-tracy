'use client'

import { useVideo } from "../app/[locale]/context/VideoContext";

export default function LargePlayer() {
	const { isLarge, videoSrc, closeLargePlayer } = useVideo();

	if(!isLarge) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
			<div className="relative w-3/4 max-w-5xl">
				<button className="absolute top-2 right-2 text-white text-2xl" onClick={closeLargePlayer}>
					✖
				</button>
				<video src={videoSrc} controls autoPlay className="w-full rounded-lg shadow-lg"/>
			</div>
		</div>
	);
}