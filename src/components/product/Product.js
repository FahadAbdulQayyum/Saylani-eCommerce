import React from 'react';
// importing products.json for using here
import Products from './products.json'
// ProductItems imported for aligning and styling the products' array in another component for better readibility
import ProductItems from './ProductItems';

const Product = () => {

  return (
    <span className='flex space-x-5 m-5'>
          {Products.map(item => <ProductItems key={item.id} items={item}/>
          )}
    </span>

  )
}

export default Product
