"use client"
import React from "react";
import DemoFilter from '@components/DemoFilter.js';
import ClientGrid from '@components/ClientGrid.js';
import DemoVideo from '@components/DemoVideo.js';

const Demos = () => {
    return (
        <section className="relative bg-black ">
            <div className='flex h-full px-5 border-t border-b border-neutral-900 bg-neutral-900/30'>
                <div className="w-full">
                    {/*<button id="demoBook" className="bookAudition">Book an Audition</button>*/}

                    <div className="relative max-w-5xl titleContainer">

                        {/*little blurb about what you do*/}
                        <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                            Demo Reels
                        </h2>
                        {/*<p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">*/}
                        {/*    Give a brief reason why you as a client would want to choose tracy*/}
                        {/*</p>*/}
                    </div>

                    <div className='flex'>
                        <DemoFilter />
                        <div className="w-2/3">
                            <div className="gradient"></div>
                            <img src="/resources/images/Background.jpg" alt="About Background" style={{
                                width: 1520,
                                height: 1059
                            }}/>
                        </div>
                    </div>

                    <ClientGrid />
                    <DemoVideo />
                </div>
            </div>
        </section>
    );
}

export default Demos;