"use client"
import React from "react";
import DemoPlayer from '@components/DemoPlayer.js';
const audioSample = [
    '/resources/audio/Lost.m4a',
    '/resources/audio/FightingMyself.m4a',
    '/resources/audio/MoreTheVictim.m4a',
    '/resources/audio/Massive.m4a',
    '/resources/audio/HealingFoot.m4a',
    '/resources/audio/Wesside.m4a',
    '/resources/audio/Resolution.m4a'
];

//TODO
//Implement language filtering

const Demos = () => {
    return (
        <section className="section">
            <div className="boxMain">
                <div className="card">
                    <button id="demoBook" className="bookAudition">Book an Audition</button>
                    <h2 id="demoTitle">Demo Reels</h2>
                    <DemoPlayer audioSample={audioSample[0]} />
                    <DemoPlayer audioSample={audioSample[1]} />
                    <DemoPlayer audioSample={audioSample[2]} />
                    <DemoPlayer audioSample={audioSample[3]} />
                    <DemoPlayer audioSample={audioSample[4]} />
                    <DemoPlayer audioSample={audioSample[5]} />
                    <DemoPlayer audioSample={audioSample[6]} />
                    <div id="demoImages"></div>
                </div>
            </div>
        </section>
    );
}

export default Demos;