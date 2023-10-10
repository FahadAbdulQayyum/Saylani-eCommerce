// React, useState and useEffect hooks imported from 'react'
import React, { useState, useEffect } from 'react'
import { getData } from '../contextApi/getData';

const ProductByCategory = () => {

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