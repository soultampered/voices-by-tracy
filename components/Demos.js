'use client'
import React, {useEffect, useState} from "react";
import DemoFilter from '@components/DemoFilter.js';
import DemoVideo from '@components/DemoVideo.js';
import styles from "@styles/DemoFilter.module.css";
import {audioSample, clientList} from "@public/demoData";
import {useTranslation} from "react-i18next";
import DemoPlayer from "@components/DemoPlayer";

const Demos = ({auditionBtn}) => {
    const { t } = useTranslation();

    //Filter State
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(audioSample);
    const [filterState, setFilterState] = useState(false);
    let filters = ['En', 'Fr'];

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    const handleFilterButtonClick = (selectedLang) => {
        if (selectedFilters.includes(selectedLang)) {
            let filters = selectedFilters.filter((el) => el !== selectedLang);
            setSelectedFilters(filters)
        } else {
            setSelectedFilters([...selectedFilters, selectedLang]);
        }
    };

    const handleFilterState = () => {
        setFilterState(prevFilterState => !prevFilterState);
    };

    const filterStateManager = (lang) => {
        handleFilterButtonClick(lang);
        handleFilterState();
    };

    const filterItems = async () => {
        if (selectedFilters.length > 0) {
            let tempItems = await Promise.all(
                selectedFilters.map((selectedLang) => {
                    let temp = audioSample.filter((audioSample) => audioSample.lang === selectedLang);
                    return temp;
                })
            );
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...audioSample]);
        }
    };

    return (
        <section id="demosSection" className="flex flex-col lg:flex-row relative block bg-gray-900">
            <div className='flex flex-col lg:flex-row h-full w-full px-4 md:px-5'>
                <div className="w-full">
                    {auditionBtn && (
                        <button key={auditionBtn.id} className='blueBtn'>
                            {t(`buttons:${auditionBtn.text}`)}
                        </button>
                    )}

                    <div className="relative max-w-2xl md:max-w-3xl lg:max-w-5xl flex flex-col lg:flex-row items-center titleContainer">
                        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                            {t('common:title-demo')}
                        </h2>

                        <div className="buttons-container mt-4 lg:mt-0 flex flex-wrap gap-2">
                            {filters.map((lang, id) => (
                                <button
                                    onClick={() => filterStateManager(lang)}
                                    className={`button ${selectedFilters?.includes(lang) ? 'active' : ''} ${styles.langToggle}`}
                                    key={`filters-${id}`}>
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>


                    <div className='lg:flex lg:pb-4'>
                        <div className='lg:w-1/3 rounded h-auto'>
                            <div className='items-container'>
                                {filteredItems.map((audioSample, id) => (
                                    <div key={`lang-${id}`} className={styles.playerCard}>
                                        <div className='box-border h-full background rounded'>
                                            <p className='ml-1 font-bold'>{audioSample.title}</p>
                                            <DemoPlayer key={audioSample.id} audioSample={audioSample.path}
                                                        filterState={filterState} setFilterState={setFilterState}/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        <DemoVideo/>
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