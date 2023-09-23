import React from 'react';
import Products from './products.json'
import ProductItems from './ProductItems';

const Product = () => {

  return (
    <span className='flex space-x-2 m-5'>
          {Products.map(item => <ProductItems key={item.id} items={item}/>
          )}
    </span>

  )
}

export default Product