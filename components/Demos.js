"use client"
import React, { useEffect, useState } from "react";
import DemoFilter from '@components/DemoFilter.js';


const Demos = () => {
    return (
        <section className="section">
            <div className="boxMain">
                <div className="card">
                    <button id="demoBook" className="bookAudition">Book an Audition</button>
                    <h2 id="demoTitle">Demo Reels</h2>
                    <DemoFilter />
                    <div id="demoImages"></div>
                </div>
            </div>
        </section>
    );
}

export default Demos;