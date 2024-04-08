import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCheckboxValue } from '../actions';
import List from '../components/List';

const SortingFilteringPanel = () => {
    const [filteredData, setFilteredData] = useState([]);
    
    const dispatch = useDispatch();

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* <List data={filteredData} /> */}
            <div>
                <div className='price_sorting'>
                    <label>Sort by: </label>
                    <select>
                        <option value="default">Default</option>
                        <option value="max-price">Max Price</option>
                        <option value="min-price">Min Price</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SortingFilteringPanel;