import React, { useState, useEffect, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaQuoteLeft } from 'react-icons/fa';

const Carousel = ({carouselData}) => {
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
        <div className="relative flex justify-center items-center dark:bg-gray-700 group p-4">
            <div>
                <div className='bg-gray-50 dark:bg-gray-800 rounded h-[300px] w-[1000px]'>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center">
                        <figure className="max-w-screen-md mx-auto">
                            <div className='flex justify-center mb-3'>
                                <FaQuoteLeft size={40} color='#000000' />
                            </div>
                            <blockquote>
                                <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                                    {carouselData[currentIndex].comment}
                                </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                <img className="w-6 h-6 rounded-full"
                                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                     alt="profile picture" />
                                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                        {carouselData[currentIndex].name}
                                    </div>
                                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                        {carouselData[currentIndex].title}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>

                    {/* Left Arrow */}
                    <div
                        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div
                        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {carouselData.map((slide, slideIndex) => (
                        <div
                            key={slide.id}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'>
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;