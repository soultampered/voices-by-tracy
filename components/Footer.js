'use client'
import React from "react";
import {FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa';
import { useModal } from '/app/context/ModalContext.js';
import Contact from "@components/Contact";

const Footer = ({auditionBtn}) => {

    const currentYear = new Date().getFullYear();
    const { openModal } = useModal();
    const handleOpenModal = () => {
        openModal(
            <Contact />
        );
    };

    return (
        <footer>
            <div className='bg-zinc-900'>
                <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-white sm:flex justify-between mx-auto">
                    <div className="p-5 sm:w-3/12 border-r">
                        <div className="text-sm uppercase text-white font-bold">Menu</div>
                        <ul>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#aboutSection">About</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#serviceSection">Services</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#demosSection">Demos</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#clientSection">Clients</a>
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 sm:w-7/12 border-r text-center">
                        <h3 className="font-bold text-xl text-white mb-4">Lorem Ipsum</h3>
                        <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                        <img src='/resources/images/VbT_Logo_Mark_Inverted.svg' alt="Voices by Tracy logo Mark"
                             style={{
                                 width: 150,
                                 height: 150,
                                 margin: 'auto'
                             }}/>
                    </div>
                    <div className="p-5 sm:w-3/12">
                        <div className="text-sm uppercase text-white font-bold">Contact Me</div>
                        <ul>
                            <li className="my-2"><a className="hover:text-indigo-600" href="mailto:voicesbytracy@gmail.com?subject=Request for Quote">voicesbytracy@gmail.com</a></li>
                            <li>{auditionBtn && (
                                <button onClick={handleOpenModal} key={auditionBtn.id} className='blueBtn'>
                                    {auditionBtn.text}
                                </button>
                            )}</li>
                        </ul>
                    </div>
                </div>
                <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" className="w-6 mx-1">
                            <FaInstagram size={32} color="#E4405F" />
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <FaFacebook size={32} color="#1877F2" />
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <FaLinkedin size={32} color="#0077B5" />
                        </a>
                    </div>
                    <div className="my-5">© Copyright {currentYear} Voices by Tracy. All Rights Reserved.</div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;