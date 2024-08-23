"use client"
import React from "react";
import {videoSample} from "@public/demoData";

const DemoVideo = () => {
    return (
        <div className="w-2/3 py-22 px-4 lg:px-16">
            <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-4 gap-y-28 lg:gap-y-16">
                    {videoSample.map((video) => (
                        <div key={video.id} className="relative group h-48 flex flex-col rounded-xl text-gray-700 shadow-md">
                            <a href="#" className="block">
                                <div className="h-28">
                                    <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 transform hover:scale-110 transition-transform duration-100 group-hover:opacity-[0.9] duration-300 w-[90%] h-48 align-middle">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src={video.path}
                                            allowFullScreen=""
                                            data-gtm-yt-inspected-2340190_699="true"
                                            id="240632615">
                                        </iframe>
                                    </div>
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