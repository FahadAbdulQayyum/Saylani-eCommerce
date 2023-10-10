// React, useState and useEffect hooks imported from 'react'
import React, { useState, useEffect } from 'react'
// getData imported from 'getData ContextApi' for making it reuseable once data is retrieved
import { getData } from '../contextApi/getData';

// ProductByCategory arrow function starts here
const ProductByCategory = () => {

    // data and setData array is inititalized using useState hook
    const [data, setData] = useState([])

    useEffect(() => {
        const dataFetch = async () => {
            let dataa = await getData()
            setData(dataa)
        }
        dataFetch()
    }, [])

    // Remove the duplicacy
    let unrepeatedName = [...new Set(data.map(v => v.prodCat))];
    // Remove the 'undefined'
    let unrepeatedCat = unrepeatedName.filter(v=>v!==undefined)
    
    // Categorize the object based on it's splitted category
    let arr = unrepeatedCat.map(name => {
        // filter the data having the same category name
        let prod = data.filter(v => v.prodCat === name);
        // Return the category name and product name
        return { name, prod };
    });
    
    // Console the arr to notice the change
    console.log('arr', arr);
    

    return (
    <div>ProductByCategory</div>
  )
}

// ProductByCategory exported
export default ProductByCategory