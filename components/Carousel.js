import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';

const Carousel = ({carouselData}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? carouselData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === carouselData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1000px] h-[500px] w-full m-auto py-16 px-4 relative group'>
            <div className="text-left mx-auto max-w-4xl flex items-center h-full rounded-md border border-neutral-800 bg-neutral-900/50 p-2 shadow">
                <div className="mb-4 text-black">
                    <div className='flex justify-start'>
                        <FaQuoteRight size={40} color='#FFFFFF'/>
                    </div>
                        <p className="mt-2 text-base leading-6">{carouselData[currentIndex].comment}</p>
                    <div className='flex justify-end'>
                        <FaQuoteLeft size={40} color='#FFFFFF' />
                    </div>
                    <div className="text-sm mt-5">
                           <p>{carouselData[currentIndex].name}</p>
                           <p>{carouselData[currentIndex].title}</p>
                    </div>
                </div>
            </div>

            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
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
    );
}

export default Carousel;