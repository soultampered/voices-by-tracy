"use client"
import React from "react";
import DemoFilter from '@components/DemoFilter.js';
import Carousel from '@components/Carousel.js';
import { carouselData } from '@public/demoData.js'

const Testimonials = () => {
    return (
        <section className="section">
            <div className="boxMain">
                <div className="card">
                    <button id="demoBook" className="bookAudition">Book an Audition</button>
                    <h2 id="demoTitle">Testimonials</h2>
                    <div id="demoImages"></div>
                </div>
                <Carousel carouselData={carouselData} />
            </div>
        </section>
    );
}

export default Testimonials;