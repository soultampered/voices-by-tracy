'use client'
import React from "react";
import DemoFilter from '@components/DemoFilter.js';
import DemoVideo from '@components/DemoVideo.js';
import styles from "@styles/DemoFilter.module.css";
import {clientList} from "@public/demoData";
import {useTranslation} from "react-i18next";

const Demos = ({auditionBtn}) => {
    const { t } = useTranslation();

    return (
        <section id="demosSection" className="flex flex-col lg:flex-row relative block">
            <div className='flex flex-col lg:flex-row h-full w-full px-4 md:px-5'>
                <div className="w-full">
                    {auditionBtn && (
                        <button key={auditionBtn.id} className='blueBtn'>
                            {t(`buttons:${auditionBtn.text}`)}
                        </button>
                    )}

                    <div className="relative max-w-2xl md:max-w-3xl lg:max-w-5xl titleContainer">
                        <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-2xl sm:text-3xl md:text-4xl">
                            {t('common:title-demo')}
                        </h2>
                    </div>

                    <div className='lg:flex lg:pb-4'>
                        <DemoFilter />
                        <DemoVideo />
                    </div>
                    <div className='rounded box-border flex p-2 mt-2 w-full lg:w-auto'>
                        <h3 className='hidden'>Clients</h3>
                        <div
                            className={`max-w-full border-lime-400 border-4 ${styles.scroller}`}
                            id="clientSection"
                            data-animated='true'
                            data-direction='right'
                            data-speed='fast'>

                            <div className={`animate-loop-scroll h-32 ${styles.scroller__inner}`}>
                                {clientList.map((client) => (
                                    <div key={client.id}
                                         className="m-2 max-w-s rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-100">
                                        <div className="flex justify-center w-16 h-16 md:w-20 md:h-20 m-3">
                                            <img className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg"
                                                 src={client.source}
                                                 alt={client.alt}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Demos;