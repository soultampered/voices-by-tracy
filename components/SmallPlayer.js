'use client'

import { useState, useEffect } from "react";
import { useVideo } from "../app/[locale]/context/VideoContext";


export default function SmallPlayer({ src }) {
    const { openLargePlayer } = useVideo();
    const [ thumbnail, setThumbnail ] = useState(null);

    useEffect(() => {
        if (!src) return;

        const video = document.createElement("video");
        video.src = src;
        video.crossOrigin = "anonymous"
        video.currentTime = 6;

        video.onloadeddata = () => {
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");

            video.play();
            video.pause();

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            setThumbnail(canvas.toDataURL("image/jpeg"));
        };
    }, [src]);

    return (
        <div className="w-full h-44 overflow-hidden cursor-pointer relative" onClick={() => openLargePlayer(src)}>
            {thumbnail ? (
                <img src={thumbnail} alt="Video thumbnail" className="w-full h-full rounded-lg shadow-md object-cover"/>
            ) : (
                <div className="w-full h-full bg-gray-700 rounded-lg animate-pulse"/>
            )}
            <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition">
                <button className="text-white text-3xl">▶</button>
            </div>
        </div>
    );
}