import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCheckboxValue } from '../actions';
// import DiscountFilter from './DiscountFilter.jsx';

function List() {
    const [filteredData, setFilteredData] = useState([]);

    const [myArray, setMyArray] = useState([]);
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [sortByPrice, setSortByPriceTo] = useState('default');

    const dispatch = useDispatch();
    
    const hasDiscount = useRef(false);

    // const sortByPrice = useRef(false);

    const handleToggleDiscount = () => {
        const isChecked = hasDiscount.current.checked;
        console.log(isChecked);
        dispatch(setCheckboxValue(isChecked));
        setFilteredData([]);
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://127.0.0.1:3333/products/all');
            const data = await response.json();
            setMyArray(data);
        }

        fetchData();
    }, []);

    const filterDiscount = (item) => {
         console.log(hasDiscount.current.checked);
         if (hasDiscount.current.checked) {
            return (item.discont_price != null);
         }
         return true;
    };

    const filterByPrice = (item) => {
      //  console.log(hasDiscount.checked);
        if (priceFrom && priceTo) {
            return item.price >= parseFloat(priceFrom) && item.price <= parseFloat(priceTo);
        }
        return true;
    };

    const sortItems = (a, b) => {
        console.log(sortByPrice);
        if(sortByPrice == "default")
            return 0;
        if(sortByPrice == "max-price")
            return b.price - a.price;
        return a.price - b.price;
    };

    return (
        <div>
            <div>
                <label>Price from: </label>
                <input type="number" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} />
                <label>to: </label>
                <input type="number" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} />
            </div>
            <div className='checkbox'>
                <label><input type="checkbox" ref={hasDiscount} onChange={handleToggleDiscount} />Discounted items</label>
            </div>
            <div>
                <div className='price_sorting'>
                    <label>Sort by: </label>
                    <select value={sortByPrice} onChange={(e) => setSortByPriceTo(e.target.value)}>
                        <option value="default">Default</option>
                        <option value="max-price">Max Price</option>
                        <option value="min-price">Min Price</option>
                    </select>
                </div>
            </div>
            <ul>
                {myArray.filter(filterDiscount).filter(filterByPrice).sort(sortItems).map(item => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;