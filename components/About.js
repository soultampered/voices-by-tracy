'use client'
import React, {useState} from "react";
import { useModal } from '/app/context/ModalContext.js';
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
                        <div className='titleContainer'>
                            <h1>Tracy-Ann Leith</h1>
                        </div>

                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            id est laborum.
                        </p>
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
                <div className="aboutBackground">
                    {/*<div className="gradient"></div>*/}
                    {/*<img src="/resources/images/aurora2.jpg" alt="About Background" style={{*/}
                    {/*    width: 1520,*/}
                    {/*    height: 1059*/}
                    {/*}}/>*/}
                </div>
            </section>
    );
}

export default About;