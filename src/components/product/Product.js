import React, { useEffect, useState } from 'react';
// importing products.json for using here
import Products from './products.json'
// ProductItems imported for aligning and styling the products' array in another component for better readibility
import ProductItems from './ProductItems';
// import ProductItems from './ProductItems copy';
import { getData } from '../contextApi/getData';

const Product = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      let dataa = await getData()
      setData(dataa)
    }
    dataFetch()
    console.log('getData', data)
    // setData(getData())
  }, [])

  return (
    <span className='flex space-x-5 m-5'>
      {/*  Products' array is spread using map */}
      {[...data,...Products].map(item => <ProductItems key={item.id} items={item} />
      )}
      {/* {Products.map(item => <ProductItems key={item.id} items={item} />
      )} */}
    </span>

  )
}

export default Product
