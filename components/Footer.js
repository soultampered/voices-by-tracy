'use client'
import React from "react";
import {FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa';
// import { useModal } from '/app/context/ModalContext.js';
import {useTranslation} from "react-i18next";

const Footer = ({auditionBtn}) => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();
    // const { openModal } = useModal();
    // const handleOpenModal = () => {
    //     openModal(
    //         <Contact />
    //     );
    // };

    return (
        <footer>
            <div className='bg-zinc-900'>
                <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-white sm:flex justify-between mx-auto">
                    <div className="p-5 sm:w-3/12 border-r text-right">
                        <div className="text-sm uppercase text-white font-bold">Menu</div>
                        <ul>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#aboutSection">{t('buttons:menu-About')}</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#serviceSection">{t('buttons:menu-Services')}</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#demosSection">{t('buttons:menu-Demos')}</a>
                            </li>
                            <li className="my-2">
                                <a className="hover:text-indigo-600" href="#clientSection">{t('buttons:menu-Clients')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="p-5 sm:w-7/12 border-r text-center">
                        <h3 className="font-bold text-xl text-white mb-4">Tracy-Ann Leith</h3>
                        <p className="text-gray-500 text-sm">{t('common:Footer-SEO')}</p>
                        <img src='/resources/images/VBT_Logo_Mark_Inverted.svg' alt="Voices by Tracy logo Mark"
                             style={{
                                 width: 150,
                                 height: 150,
                                 margin: 'auto'
                             }}/>
                    </div>
                    <div className="p-5 sm:w-3/12">
                        <div className="text-sm uppercase text-white font-bold">{t('buttons:button-Contact')}</div>
                        <ul>
                            <li className="my-2"><p>info@voicebytracy.com</p></li>
                            <li className="my-2">
                                <p>Source Connect: <i>voices_by_tracy</i></p>
                            </li>
                            <li>
                                <a className="w-full text-center blueBtn cursor-pointer lg:w-auto" href="/contact">
                                    {t('buttons:button-Audition')}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="https://www.instagram.com/voices_by_tracy/" className="w-6 mx-1" aria-label="linkToInstagram">
                            <FaInstagram size={32} color="#E4405F" />
                        </a>
                        <a href="https://www.facebook.com/voicesbytracy" className="w-6 mx-1" aria-label="linkToFacebook">
                            <FaFacebook size={32} color="#1877F2" />
                        </a>
                        <a href="https://www.linkedin.com/in/voicesbytracy/" className="w-6 mx-1" aria-label="linkToLinkedIn">
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