import React, { useEffect, useState } from "react";
import { audioSample } from '@public/demoData.js'
import DemoPlayer from '@components/DemoPlayer.js';
import styles from "../styles/AudioPlayer.module.css";

const DemoFilter = () => {

    //State
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
        <div className='w-1/3'>
            <div className="buttons-container">
                {filters.map((lang, id) => (
                    <button onClick={() => filterStateManager(lang)}
                            className={`button ${
                                selectedFilters?.includes(lang) ? 'active' : ''} ${styles.langToggle}`}
                            key={`filters-${id}`}>
                        {lang}
                    </button>
                ))}
            </div>

            <div className='items-container'>
                {filteredItems.map((audioSample, id) => (
                    <div key={`lang-${id}`} className={styles.playerCard}>
                        <p>{audioSample.title}</p>
                        <DemoPlayer key={audioSample.id} audioSample={audioSample.path} filterState={filterState} setFilterState={setFilterState}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DemoFilter;