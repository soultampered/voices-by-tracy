'use client'

import { createContext, useState, useContext } from "react";

const VideoContext = createContext();

export function VideoProvider({ children }) {
	const [ isLarge, setIsLarge ] = useState(false);
	const [ videoSrc, setVideoSrc ] = useState(null);

	const openLargePlayer = (src) => {
		setVideoSrc(src);
		setIsLarge(true);
	};

	const closeLargePlayer = () => {
		setIsLarge(false);
	};

	return (
		<VideoContext.Provider value={{ isLarge, videoSrc, openLargePlayer, closeLargePlayer }}>
			{ children }
		</VideoContext.Provider>
	);
}

export function useVideo() {
	return useContext(VideoContext);
}