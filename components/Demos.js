'use client'
import React, {useEffect, useState} from "react";
import styles from "@styles/DemoFilter.module.css";
import {audioSample} from "@public/demoData";
import {useTranslation} from "react-i18next";
import DemoPlayer from "@components/DemoPlayer";
import {useModal} from "../app/[locale]/context/ModalContext";
import ContactModal from "@components/ContactModal";

const Demos = ({auditionBtn}) => {
    const { t } = useTranslation();
    const { openModal } = useModal();

    const handleOpenModal = () => {
        openModal(<ContactModal />);
    };

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
            setSelectedFilters([]);
        } else {
            setSelectedFilters([selectedLang]);
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
        <section id="demosSection" className="flex flex-col lg:flex-row relative border-t border-neutral-800 pt-8">
            <div className='flex flex-col lg:flex-row h-full w-full px-4 md:px-5'>
                <div className="w-full">
                    <button className="w-full text-center blueBtn cursor-pointer lg:w-auto" onClick={handleOpenModal}>
                        {t('buttons:button-Audition')}
                    </button>

                    <div
                        className="relative w-full max-w-none my-6 flex flex-col md:flex-row md:items-baseline md:justify-between">
                        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                            {t('common:title-demo')}
                        </h2>

                        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                            {filters.map((lang, id) => {
                                const isActive = selectedFilters?.includes(lang);
                                return (
                                    <button
                                        onClick={() => filterStateManager(lang)}
                                        className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                                            isActive
                                                ? 'bg-white text-black border-white'
                                                : 'border-neutral-700 text-neutral-300 hover:border-neutral-500'
                                        }`}
                                        key={`filters-${id}`}>
                                        {lang}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className='w-full pb-4'>
                        <div className='items-container'>
                            {filteredItems.map((audioSample, id) => (
                                <div key={`lang-${id}`} className={styles.playerCard}>
                                    <div className='box-border h-full rounded'>
                                        <p className='ml-1 mb-2 font-bold'>{audioSample.title}</p>
                                        <DemoPlayer key={audioSample.id} audioSample={audioSample.path}
                                                    filterState={filterState} setFilterState={setFilterState}
                                                    title={audioSample.title}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Demos;
