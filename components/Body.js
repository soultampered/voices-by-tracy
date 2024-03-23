import React from "react";
import About from "./About";
import Demos from "./Demos.js"
import Testimonials from "./Testimonials";

const Body = () => {
    return (
        <div className="background">
            <div className="bodyContainer">
                <About />
                <Demos />
                <Testimonials />
            </div>
        </div>
    );
}

export default Body;