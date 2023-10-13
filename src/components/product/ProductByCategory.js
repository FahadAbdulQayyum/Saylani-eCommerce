// React, useState and useEffect hooks imported from 'react'
import React, { useState, useEffect } from 'react'
// getData imported from 'getData ContextApi' for making it reuseable once data is retrieved
import { getData } from '../contextApi/getData';
import ProductItems from './ProductItems';

// ProductByCategory arrow function starts here
const ProductByCategory = () => {

    // data and setData array is inititalized using useState hook
    const [data, setData] = useState([])

    // useEffect used for to retrieve data prior the website appears on desktop
    useEffect(() => {
        const dataFetch = async () => {
            let dataa = await getData()
            // dataa is stored in setData hook
            setData(dataa)
        }
        // dataFetch function is called
        dataFetch()
    }, [])

    // Remove the duplicacy
    let unrepeatedName = [...new Set(data.map(v => v.prodCat))];
    // Remove the 'undefined'
    let unrepeatedCat = unrepeatedName.filter(v => v !== undefined)

    // Categorize the object based on it's splitted category
    let alignedBasedCategory = unrepeatedCat.map(name => {
        // filter the data having the same category name
        let prod = data.filter(v => v.prodCat === name);
        // Return the category name and product name
        return { name, prod };
    });

    // Console the alignedBasedCategory to notice the change
    console.log('alignedBasedCategory', alignedBasedCategory);

    return (
        <div>
            {
                // alignedBasedCategory is the array of object which has the products' details under their specific category 
                alignedBasedCategory?.map(v => <div key={v.id}>
                    {/* Name of product in the h3 */}
                    <h3 className='font-bold bg-red-400 flex justify-center text-white py-2'>{v.name}</h3>
                    {/* prod array further mapped */}
                    <p className='flex flex-row'>{v.prod.map(p => <span className='flex flex-row'><span className='grid grid-cols-2'>{
                        // ProductItems used for more readable and styling
                        <ProductItems key={p?.prod?.id} items={p} />
                    }</span></span>)}</p>
                </div>)
            }
        </div>
    )
}

// ProductByCategory exported
export default ProductByCategory