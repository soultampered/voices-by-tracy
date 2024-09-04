"use client"
import React from "react";
import {videoSample} from "@public/demoData";

const DemoVideo = () => {
    return (
        <div className="lg:w-2/3 lg:py-16 px-4 lg:px-16 py-10">
            <div className="container mx-auto px-4 md:px-8 xl:px-6 max-w-[1300px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-16">
                    {videoSample.map((video) => (
                        <div key={video.id}
                             className="relative group flex flex-col rounded-xl text-gray-700 shadow-md">
                            <a href="#" className="block">
                                <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={video.path}
                                        allowFullScreen=""
                                        id="240632615">
                                    </iframe>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DemoVideo;