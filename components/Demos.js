"use client"
import React from "react";
import DemoFilter from '@components/DemoFilter.js';
import ClientGrid from '@components/ClientGrid.js';
import DemoVideo from '@components/DemoVideo.js';

const Demos = () => {
    return (
        <section className="relative bg-blue-200">
            <div className='flex h-full px-5 '>
                <div className="w-full">
                    {/*<button id="demoBook" className="bookAudition">Book an Audition</button>*/}
                    <div className='titleContainer'>
                        <h2 id="demoTitle">Demo Reels</h2>
                    </div>
                    <div className='flex'>
                        <DemoFilter />
                        <div></div>
                    </div>

                    <ClientGrid />
                    <DemoVideo />
                </div>
            </div>
        </section>
    );
}

export default Demos;