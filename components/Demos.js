import React from "react";
import DemoFilter from '@components/DemoFilter.js';
import DemoVideo from '@components/DemoVideo.js';
import styles from "@styles/DemoFilter.module.css";
import {clientList} from "@public/demoData";

const Demos = ({auditionBtn}) => {
    return (
        <section className="relative">
            <div className='flex h-full px-5'>
                <div className="w-full">
                    {auditionBtn && (
                        <button key={auditionBtn.id} className={auditionBtn.className}>
                            {auditionBtn.text}
                        </button>
                    )}

                    <div className="relative max-w-5xl titleContainer">
                        <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                            Demo Reels
                        </h2>
                    </div>

                    <div className='flex pb-4'>
                        <DemoFilter />
                    </div>
                    <div className='rounded box-border inline-block p-2 mt-2'>
                        <h3 className='hidden'>Clients</h3>
                        <div
                            className={`max-w-[1480px] border-lime-400 border-4 ${styles.scroller}`}
                            data-animated='true'
                            data-direction='right'
                            data-speed='fast'>

                            <div className={`animate-loop-scroll pb-2 h-32 ${styles.scroller__inner}`}>
                                {clientList.map((client) => (
                                    <div key={client.id}
                                         className="m-2 max-w-s rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-100">
                                        <div className="flex justify-center w-20 h-20 m-3">
                                            <img className="w-20 h-20 rounded-full shadow-lg"
                                                 src={client.source}
                                                 alt={client.alt}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/*<DemoVideo />*/}
                </div>
            </div>
        </section>
    );
}

export default Demos;