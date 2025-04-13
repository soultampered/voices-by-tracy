"use client"
import React, {useState, useEffect, useRef} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import {FaQuoteLeft} from 'react-icons/fa';
import { carouselData } from '@public/demoData.js'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlideRef = useRef();

    const resetTimer = () => {
        clearInterval(autoSlideRef.current);
        autoSlideRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1;
                return newIndex;
            });
        }, 7000);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const isFirstSlide = prevIndex === 0;
            const newIndex = isFirstSlide ? carouselData.length - 1 : prevIndex - 1;
            return newIndex;
        });
        resetTimer();
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const isLastSlide = prevIndex === carouselData.length - 1;
            const newIndex = isLastSlide ? 0 : prevIndex + 1;
            return newIndex;
        });
        resetTimer();
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        resetTimer();
    };

    useEffect(() => {
        autoSlideRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1;
                return newIndex;
            });
        }, 7000);

        return () => {
            clearInterval(autoSlideRef.current);
        };
    }, [carouselData.length]);
    return (
        <section className="relative block border-b min-h-72 bg-gray-900">
            <div className=" flex justify-center items-center group p-4">
                <div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded h-full w-full">
                        <div className=" px-4 py-8 mx-auto text-center">
                            <figure className="max-w-screen-md mx-auto">
                                <div className="flex justify-center mb-3">
                                    <FaQuoteLeft size={40} color='#000000'/>
                                </div>
                                <blockquote>
                                    <p className="text-lg md:text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                                        {carouselData[currentIndex].comment}
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                            {"- " + carouselData[currentIndex].title}
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>

                        {/* Left Arrow */}
                        <div
                            className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 md:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                        </div>
                        {/* Right Arrow */}
                        <div
                            className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 md:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={30}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Testimonials;