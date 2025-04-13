'use client'

import { useEffect } from "react";
import { useVideo } from "../app/[locale]/context/VideoContext";

export default function LargePlayer() {
	const {isLarge, videoSrc, closeLargePlayer} = useVideo();

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (e.target.closest('.video-container') === null) {
				closeLargePlayer();
			}
		};
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [closeLargePlayer]);

	if(!isLarge) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
			<div className="video-container relative w-3/4 max-w-5xl">
				<button className="absolute top-2 right-2 text-white text-2xl z-[100]" onClick={closeLargePlayer}>
					✖
				</button>
				<video src={videoSrc} controls autoPlay className="w-full rounded-lg shadow-lg"/>
			</div>
		</div>
	);
}