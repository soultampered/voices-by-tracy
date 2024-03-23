"use client"
import React from "react";

const DemoVideo = () => {
    return (
        <div className='w-full h-720 rounded my-4 box-border'>
            <div className="relative w-full h-full">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                    allowFullScreen=""
                    data-gtm-yt-inspected-2340190_699="true"
                    id="240632615"></iframe>
            </div>
        </div>
    );
}

export default DemoVideo;