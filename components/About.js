import React from "react";

const About = () => {
    return (
        <section className="relative">
            <div className='flex h-full items-center absolute z-10 px-5'>
                <div className='w-2/4 pr-5'>
                    <h1>Lorem ipsum dolor</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="contactMe">Contact Me</button>
                    <button className="bookAudition">Book an Audition</button>
                </div>
                <div className='w-2/4'>
                    <img src="/resources/images/leithBust.jpg" alt="Tracy Photo"/>
                </div>
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