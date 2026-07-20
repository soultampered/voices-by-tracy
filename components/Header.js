'use client'
import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaEnvelope, FaPhone } from "react-icons/fa"
import { useTranslation } from "react-i18next";
import LanguageChanger from "@components/LanguageChanger";
import SearchBar from "@components/SearchBar";
import AnnouncementBanner from "@components/AnnouncementBanner";
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    const { t } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    const closeDropdown = () => setIsDropdownOpen(false);

    useEffect(() => {
        document.body.style.overflow = isDropdownOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isDropdownOpen]);

    return (
        <header className="text-white body-font mb-2 border-b border-neutral-800">
            <div className="relative xs:px-4 px-8 min-h-12 flex flex-wrap xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 gap-y-3">
                <Link className="relative title-font font-medium mb-4 md:mb-0 flex-shrink-0" href="/">
                    <Image src="/resources/images/VBT_Logo_Inverted.svg"
                           alt="siteLogo"
                           className="h-16 md:h-20 w-auto"
                           width={300}
                           height={211}
                    />
                </Link>
                <nav className="hidden md:flex md:flex-wrap md:items-center md:text-base md:py-1 md:ml-6 md:min-w-0">
                    <Link className="navMenuBtn" href="/#aboutSection">{t('buttons:menu-About')}</Link>
                    <Link className="navMenuBtn" href="/search-results/">{t('buttons:menu-MyWork', 'My Work')}</Link>
                    <Link className="navMenuBtn" href="/#serviceSection">{t('buttons:menu-Services')}</Link>
                    <Link className="navMenuBtn" href="/#clientSection">{t('buttons:menu-Clients')}</Link>
                    <Link className="navMenuBtn" href="/contact/">{t('buttons:menu-Contact')}</Link>
                </nav>
                <div className="hidden md:flex md:items-center md:gap-3 md:ml-auto md:flex-shrink-0">
                    <SearchBar className="w-[350px] lg:w-[440px] flex-shrink-0" />
                    <LanguageChanger />
                </div>
                <div className='md:hidden relative ml-auto mt-3'>
                    <GiHamburgerMenu className='h-8 w-8 cursor-pointer' onClick={toggleDropdown}/>

                    {ReactDOM.createPortal(
                        <>
                            <div
                                onClick={closeDropdown}
                                aria-hidden="true"
                                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
                                    isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                }`}
                            />
                            <div
                                className={`fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs bg-neutral-900 border-l border-neutral-800 shadow-xl flex flex-col p-6 gap-2 transition-transform duration-300 ${
                                    isDropdownOpen ? 'translate-x-0' : 'translate-x-full'
                                }`}>
                                <button type="button" onClick={closeDropdown} aria-label="Close menu" className="self-end mb-4 text-white">
                                    <FaTimes className="h-6 w-6" />
                                </button>
                                <a className="navMenuBtn text-lg" href="#aboutSection" onClick={closeDropdown}>{t('buttons:menu-About')}</a>
                                <Link className="navMenuBtn text-lg" href="/search-results/" onClick={closeDropdown}>{t('buttons:menu-MyWork', 'My Work')}</Link>
                                <a className="navMenuBtn text-lg" href="#serviceSection" onClick={closeDropdown}>{t('buttons:menu-Services')}</a>
                                <a className="navMenuBtn text-lg" href="#clientSection" onClick={closeDropdown}>{t('buttons:menu-Clients')}</a>
                                <Link className="navMenuBtn text-lg" href="/contact/" onClick={closeDropdown}>{t('buttons:menu-Contact')}</Link>
                                <div className="mt-4">
                                    <LanguageChanger/>
                                </div>
                            </div>
                        </>,
                        document.body
                    )}
                </div>
            </div>
            <div className="md:hidden px-8 pb-3">
                <SearchBar className="w-full" />
            </div>
            <div className="w-full text-white text-right px-8 pb-3">
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
            <AnnouncementBanner />
        </header>
    );
};
