'use client'
import React from "react";
import { aboutInfo } from "@public/demoData";
import { useModal } from "@app/context/ModalContext";
import Contact from "@components/Contact.js";

const About = ({auditionBtn}) => {

    const { openModal } = useModal();
    const handleOpenModal = () => {
        openModal(
            <Contact />
        );
    };

    return (
            <section id='aboutSection' className="relative block">
                <div className='flex h-full items-center absolute z-50 px-5'>
                    <div className='w-2/4 pr-5'>
                        {/*<div className='titleContainer'>*/}
                        {/*    <h1>Tracy-Ann Leith</h1>*/}
                        {/*</div>*/}

                        <h2>{ aboutInfo.catchPhraseEN }</h2>
                        <p>{ aboutInfo.bioExpandedEN }</p>
                        {auditionBtn && (
                            <button onClick={handleOpenModal} key={auditionBtn.id} className='blueBtn'>
                                {auditionBtn.text}
                            </button>
                        )}
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