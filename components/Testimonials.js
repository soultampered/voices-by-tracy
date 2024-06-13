"use client"
import React from "react";
import Carousel from '@components/Carousel.js';
import { carouselData } from '@public/demoData.js'

const Testimonials = () => {
    return (
        <section className="relative block border-t border-b">
                <Carousel carouselData={carouselData} />
        </section>
    );
}

export default Testimonials;