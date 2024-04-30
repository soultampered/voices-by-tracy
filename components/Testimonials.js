"use client"
import React from "react";
import Carousel from '@components/Carousel.js';
import { carouselData } from '@public/demoData.js'

const Testimonials = () => {
    return (
        <section className="relative block border-t border-b border-neutral-900 bg-neutral-900/30">
            <div >
                <Carousel carouselData={carouselData} />
            </div>
        </section>
    );
}

export default Testimonials;