'use client'

import React from "react";
import { useTranslation } from "react-i18next";
import { useModal } from "../app/[locale]/context/ModalContext";
import ContactModal from "./ContactModal";


const Portfolio = () => {
    const { t } = useTranslation();
    const { openModal } = useModal();

    const handleOpenModal = () => {
        openModal(<ContactModal />);
    };

    return (
        <div className="shadow-bottom pb-2 flex justify-center w-screen overflow-hidden relative before:block before:absolute before:h-full before:w-full before:top-0 before:left-0 before:opacity-30">
            <div className="relative flex lg:flex-row flex-col px-5 h-full items-center justify-center min-w-1059 max-w-1520">
                <div className="w-full max-w-xs mx-auto 2sm:max-w-sm md:max-w-md xl:w-2/3 lg:max-w-none lg:mx-0 xs:mb-10 xs:relative order-2 lg:order-1">
                    <h1 className="hidden">Tracy-Ann Leith</h1>
                    <h2 className="text-sm text-white font-extrabold my-4 sm:text-2xl md:text-3xl lg:text-5xl lg:mb-8 lg:mx-4 whitespace-nowrap">
                        {t('common:catchPhrase')}
                    </h2>
                    <p className="text-stone-100 text-sm my-4 sm:text-base md:text-lg lg:mb-6">
                        {t('common:bio-short')}
                    </p>
                    <div className="mb-4 flex flex-col 2sm:flex-row items-center 2sm:space-x-4 2sm:space-y-0 space-y-2 text-sm sm:text-base md:text-lg lg:flex-row lg:space-y-0 lg:space-x-4 lg:text-base">
                        <a className="w-full text-center blueBtn cursor-pointer lg:w-auto" href="#demosSection">
                            {t('buttons:menu-Demos')}
                        </a>
                        <button className="w-full text-center blueBtn cursor-pointer lg:w-auto" onClick={handleOpenModal}>
                            {t('buttons:button-Contact')}
                        </button>
                    </div>
                </div>

                <div className="lg:flex lg:flex-col w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md xl:w-1/3 lg:max-w-none lg:mx-0 xs:relative order-2 hidden">
                    <div className="flex flex-col lg:items-end xs:items-center">
                        <div className="inline-flex gap-1 items-center">
                            <h2 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold">15</h2>
                            <h2 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold">+</h2>
                        </div>
                        <h3 className="text-sm sm:text-lg md:text-xl xl:text-xl lg:text-start">
                            {t('common:bio-experience')}
                        </h3>
                    </div>

                    <div className="flex flex-col lg:items-end xs:items-center">
                        <div className="inline-flex gap-1 items-center">
                            <h2 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold">
                                {t('common:bio-language')}
                            </h2>
                        </div>
                        <h3 className="pt-1.5 text-sm sm:text-lg md:text-xl xl:text-xl lg:text-start">
                            {t('common:bio-langList')}
                        </h3>
                    </div>

                    <div className="flex flex-col lg:items-end xs:items-center">
                        <div className="inline-flex gap-1 items-center">
                            <h2 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold">200</h2>
                            <h2 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold">+</h2>
                        </div>
                        <h3 className="text-sm sm:text-lg md:text-xl xl:text-xl lg:text-start">
                            {t('common:bio-projects')}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
