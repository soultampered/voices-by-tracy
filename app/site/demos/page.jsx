import Header from '@components/Header.js';
import Contact from '@components/Contact.js';
import Footer from '@components/Footer.js';
import {buttonList, clientList} from "@public/demoData.js";
import DemoFilter from "@components/DemoFilter";
import styles from "@styles/DemoFilter.module.css";
import React from "@node_modules/react";

const DemosPage = () => {
    const auditionBtn = buttonList.find(button => button.id === '1');
    const submitBtn = buttonList.find((button) => button.id === '3');
    const closeBtn = buttonList.find((button) => button.id === '4');

    return (
        <div>
            <Header />
            <div className="bodyContainer">
                <section id="demosSection" className="relative">
                    <div className='flex h-full px-5'>
                        <div className="w-full">
                            {auditionBtn && (
                                <button key={auditionBtn.id} className='blueBtn'>
                                    {auditionBtn.text}
                                </button>
                            )}

                            <div className="relative max-w-5xl titleContainer">
                                <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                                    Demo Reels
                                </h2>
                            </div>

                            <div className='flex pb-4'>
                                <DemoFilter/>
                            </div>
                            {/*<DemoVideo />*/}
                        </div>
                    </div>
                </section>
            </div>
            <Footer auditionBtn={auditionBtn}/>
        </div>
    )
}

export default DemosPage;