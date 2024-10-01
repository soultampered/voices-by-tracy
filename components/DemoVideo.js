"use client"
import React, { useState } from "react";
import { videoSample } from "@public/demoData";
import PopoutVideoPlayer from "@components/PopoutVideoPlayer";

const DemoVideo = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlayerOpen, setPlayerOpen] = useState(false);

    const handleVideoClick = (videoPath) => {
        setSelectedVideo(videoPath);
        setPlayerOpen(true);
    }

    const closePlayer = () => {
        setSelectedVideo(null);
        setPlayerOpen(false);
    }

    return (
        <div className="lg:w-2/3 lg:py-16 px-4 lg:px-16 py-10">
            <div className="container mx-auto px-4 md:px-8 xl:px-6 max-w-[1300px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-16">
                    {videoSample.map((video) => (
                        <div key={video.id}
                             className="relative group flex flex-col rounded-xl text-gray-700 shadow-md">
                            <button onClick={() => handleVideoClick(video.path)} className="block">
                                <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={video.path}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Video Preview">
                                    </iframe>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {isPlayerOpen && (
                <PopoutVideoPlayer videoSrc={selectedVideo} onClose={closePlayer} />
            )}
        </div>
    );
}

export default DemoVideo;
