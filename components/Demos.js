import React from "react";
import DemoPlayer from "./DemoPlayer";

const Demos = () => {
    return (
        <section className="section">
            <div className="boxMain">
                <div className="card">
                    <button id="demoBook" className="bookAudition">Book an Audition</button>
                    <h2 id="demoTitle">Demo Reels</h2>
                    <DemoPlayer />
                    <div id="demoImages"></div>
                </div>
            </div>
        </section>
    );
}

export default Demos;