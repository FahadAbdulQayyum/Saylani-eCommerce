import React, { useEffect, useState } from 'react';
// importing products.json for using here
import Products from './products.json'
// ProductItems imported for aligning and styling the products' array in another component for better readibility
import ProductItems from './ProductItems';
// getData imported from contextApi/getData for getting data from firebase
import { getData } from '../contextApi/getData';

// Product arrow function starts here
const Product = () => {
  // data and setData useState hook initialized and used for storing array of data from firebase using getData
  const [data, setData] = useState([])

  // useEffect hook starts here for api call immediately after the browser appears
  useEffect(() => {
    // dataFetch function used asynchronisly for retrieving data from firebase using getData
    const dataFetch = async () => {
      // data from getData are temporarily stored in dataa
      let dataa = await getData()
      // then dataa stored in data hook for using it globally within this component
      setData(dataa)
    }
    dataFetch()
  }, [])

  return (
    // this flex the cards and then provide space by 5px in horizontally the marginify it by 5px
    <span className='flex space-x-5 m-5 '>
      {/* then cards made grid into columns by 4 in one line and provided gap of 10px */}
      <span className='grid grid-cols-4 gap-10'>
        {/*  Products' array is spread using map */}
        {[...data, ...Products].map(item => <ProductItems key={item.id} items={item} />
        )}
      </span>
    </span>

  )
}

export default Product
