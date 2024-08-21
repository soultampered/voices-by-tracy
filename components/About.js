'use client'
import React from "react";
import { aboutInfo } from "@public/demoData";
/*import { useModal } from "@app/context/ModalContext";*/
import Contact from "@components/Contact.js";
import WhyChoose from "@components/WhyChoose";

const About = ({auditionBtn}) => {

    // const { openModal } = useModal();
    // const handleOpenModal = () => {
    //     openModal(
    //         <Contact />
    //     );
    // };

    return (
            <section id='aboutSection' className="relative block">
                <div className='flex h-full items-center absolute z-50 px-5'>
                    <div className='w-2/4 pr-5'>
                        <WhyChoose />
                    </div>
                    <div className='w-2/4'>
                        <img className='rounded-3xl' src="/resources/images/leithBust.jpg" alt="Tracy Photo"/>
                    </div>
                </div>
                <div className="aboutBackground"></div>
            </section>
    );
}

export default About;