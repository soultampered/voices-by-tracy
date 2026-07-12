'use client'
import React, {useEffect, useRef, useState} from "react";
import ReactDOM from 'react-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaEnvelope, FaPhone } from "react-icons/fa"
import { useTranslation } from "react-i18next";
import LanguageChanger from "@components/LanguageChanger";
import SearchBar from "@components/SearchBar";
import AnnouncementBanner from "@components/AnnouncementBanner";
import Image from "next/image";

export default function Header(){
    const { t } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const toggleRef = useRef(null);

    const toggleDropdown = () => {
        event.preventDefault();
        event.stopPropagation();
        setIsDropdownOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !toggleRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
      }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    return (
        <header className="text-white body-font mb-2">
            <div className="relative xs:px-4 px-8 min-h-12 flex xs:flex-col sm:flex-row items-center xs:mt-10 sm:mt-0">
                <a className="relative md:absolute md:z-10 md:left-8 md:top-0 title-font font-medium mb-4 md:mb-0" href="/site">
                    <Image src="/resources/images/VbT_Logo.svg"
                           alt="siteLogo"
                           className="h-32 w-auto"
                           width={300}
                           height={211}
                    />
                </a>
                <nav className="hidden md:flex md:flex-wrap md:items-center md:text-base md:justify-center md:ml-auto md:mr-4 md:py-1 md:pl-4">
                    <a className="navMenuBtn" href="/site/#aboutSection">{t('buttons:menu-About')}</a>
                    <a className="navMenuBtn" href="/search-results/">{t('buttons:menu-Demos')}</a>
                    <a className="navMenuBtn" href="/site/#serviceSection">{t('buttons:menu-Services')}</a>
                    <a className="navMenuBtn" href="/site/#clientSection">{t('buttons:menu-Clients')}</a>
                    <a className="navMenuBtn" href="/contact/">{t('buttons:menu-Contact')}</a>
                    <LanguageChanger />
                </nav>
                <div ref={toggleRef} className='md:hidden relative ml-auto'>
                    <GiHamburgerMenu className='h-8 w-8 cursor-pointer' onClick={toggleDropdown}/>

                    {isDropdownOpen && ReactDOM.createPortal(
                        <div ref={dropdownRef} className="absolute text-bold text-black bg-white items-end p-1 flex flex-col space-y-2 z-50"
                             style={{
                                 top: toggleRef.current ? `${toggleRef.current.offsetHeight + 50}px` : '100%',
                                 right: 0
                             }}>
                            <a className="navMenuBtn" href="#aboutSection">{t('buttons:menu-About')}</a>
                            <a className="navMenuBtn" href="/search-results/">{t('buttons:menu-Demos')}</a>
                            <a className="navMenuBtn" href="#serviceSection">{t('buttons:menu-Services')}</a>
                            <a className="navMenuBtn" href="#clientSection">{t('buttons:menu-Clients')}</a>
                            <a className="navMenuBtn" href="/site/contact">{t('buttons:menu-Contact')}</a>
                            <LanguageChanger/>
                        </div>,
                        document.body
                    )}
                </div>
            </div>
            <div className="w-full text-white text-right px-12 pb-3">
                <p className="text-sm flex justify-end items-center gap-4">
                        <span className="inline-flex items-center gap-1">
                            <FaEnvelope aria-label="Email" />
                            voicesbytracy@gmail.com
                        </span>
                    <span className="inline-flex items-center gap-1">
                            <FaPhone aria-label="Phone" />
                            (514) 995-6985
                        </span>
                </p>
            </div>
            <SearchBar className="w-full md:w-2/5 ml-auto px-4 md:px-8 pb-3" />
            <AnnouncementBanner />
        </header>
    );
};
