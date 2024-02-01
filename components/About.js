import React from "react";

const About = () => {
    return (
        <section className="relative">
            <div className="absolute z-10">
                <h1>Tracy-Ann Leith</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <button className="bookAudition">Book an Audition</button>`
            </div>
            <div className="aboutBackground">
                <div className="gradient"></div>
                <img src="/resources/images/Background.jpg" alt="About Background" style={{
                    width: 1520,
                    height: 1059
                }}/>
            </div>
        </section>
    );
}

export default About;