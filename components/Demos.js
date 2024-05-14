"use client"
import React from "react";
import DemoFilter from '@components/DemoFilter.js';
import ClientGrid from '@components/ClientGrid.js';
import DemoVideo from '@components/DemoVideo.js';

const Demos = () => {
    return (
        <section className="relative">
            <div className='flex h-full px-5'>
                <div className="w-full">
                    <button id="demoBook" className="bookAudition">Book an Audition</button>

                    <div className="relative max-w-5xl titleContainer">
                        <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                            Demo Reels
                        </h2>
                    </div>

                    <div className='flex pb-4'>
                        <DemoFilter />
                    </div>
                    <ClientGrid />
                    <DemoVideo />
                </div>
            </div>
        </section>
    );
}

export default Demos;