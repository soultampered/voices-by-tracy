'use client'
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageChanger from "@components/LanguageChanger";

export default function Header(){
    const { t } = useTranslation();
    return (
        <>
            <header className="bg-white text-black body-font">
                <div className="h-32 lg:px-16 xs:px-4 px-8 h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0">
                    <a className="flex title-font font-medium items-center mb-4 md:mb-0" href="/site">
                        <img src="/resources/images/VbT_Logo.svg" alt="siteLogo" className="h-32"/>
                    </a>
                    <nav
                        className="md:ml-auto md:mr-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="#aboutSection">{t('buttons:menu-About')}</a>
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="#demosSection">{t('buttons:menu-Demos')}</a>
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="#serviceSection">{t('buttons:menu-Services')}</a>
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="#clientSection">{t('buttons:menu-Clients')}</a>
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="/site/contact">{t('buttons:menu-Contact')}</a>
                    </nav>
                    <LanguageChanger />
                </div>
            </header>
        </>
    )
};