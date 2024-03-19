"use client"
import React from "react";
import DemoFilter from '@components/DemoFilter.js';
import ClientGrid from '@components/ClientGrid.js';
import DemoVideo from '@components/DemoVideo.js';

const Demos = () => {
    return (
        <section className="relative">
            <div className='flex h-full absolute z-10 px-5 w-full'>
                <div className="w-full">
                    {/*<button id="demoBook" className="bookAudition">Book an Audition</button>*/}
                    <div className='titleContainer'>
                        <h2 id="demoTitle">Demo Reels</h2>
                    </div>
                    <div className='flex'>
                        <DemoFilter />
                        <ClientGrid />
                    </div>
                    <DemoVideo />
                </div>
            </div>
            <div className="aboutBackground">
                <div className="gradient"></div>
                <img src="/resources/images/Background.jpg" alt="About Background" style={{
                    width: 1520,
                    height: 1059
                }}/>
                <img src="/resources/images/Background.jpg" alt="About Background" style={{
                    width: 1520,
                    height: 1059
                }}/>
            </div>
        </section>
    );
}

export default Demos;