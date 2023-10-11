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

  useEffect(() => {
    const dataFetch = async () => {
      let dataa = await getData()
      setData(dataa)
    }
    dataFetch()
  }, [])

  return (
    <span className='flex space-x-5 m-5 '>
      <span className='grid grid-cols-4 gap-10'>
        {/*  Products' array is spread using map */}
        {[...data, ...Products].map(item => <ProductItems key={item.id} items={item} />
        )}
      </span>
    </span>

  )
}

export default Product
