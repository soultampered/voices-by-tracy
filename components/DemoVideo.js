"use client"
import React from "react";
import { videoSample } from "@public/demoData";
import SmallPlayer from "@components/SmallPlayer";

const DemoVideo = () => {
    return (
        <div className="lg:w-2/3">
            <div className="container mx-auto max-w-[1300px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {videoSample.map((video) => (
                        <div key={video.id} className="relative group flex flex-col rounded-xl text-gray-700 shadow-md">
                            <SmallPlayer src={video.path}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default DemoVideo;
