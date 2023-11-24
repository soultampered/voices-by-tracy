import React, { useEffect, useState } from "react";
import styles from "../styles/DemoFilter.module.css";
import { data } from '@public/demoData.js'
import DemoPlayer from '@components/DemoPlayer.js';

const DemoFilter = () => {

    //State
    const[selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(data);
    let filters = ['En', 'Fr'];

    const handleFilterButtonClick = (selectedLang) => {
        if (selectedFilters.includes(selectedLang)) {
            let filters = selectedFilters.filter((el) => el !== selectedLang);
            setSelectedFilters(filters)
        } else {
            setSelectedFilters([...selectedFilters, selectedLang]);
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedLang) => {
                let temp = data.filter((data) => data.lang === selectedLang);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...data]);
        }
    };

    return (
        <div>
            <div className="buttons-container">
                {filters.map((lang, id) => (
                    <button onClick={() => handleFilterButtonClick(lang)}
                            className={`button ${
                                selectedFilters?.includes(lang) ? 'active' : ''}`}
                            key={`filters-${id}`}>
                        {lang}
                    </button>
                ))}
            </div>

            <div className='items-container'>
                {filteredItems.map((data, id) => (
                    <div key={`lang-${id}`} className='item'>
                        <p>{data.title}</p>
                        <DemoPlayer key={data.id} audioSample={data.path} />
                    </div>
                ))}
            </div>


        </div>
    );
}

export default DemoFilter;