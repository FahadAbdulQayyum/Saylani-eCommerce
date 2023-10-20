// React is imported from 'react';
import React from 'react'
// Navbar is imported from '../navbar/Navbar' directory
import Navbar from '../navbar/Navbar'
// Product is imported from '../product/Product' directory
import Product from '../product/Product'
// ProductByCategory is imported from '../product/ProductByCategory'
import ProductByCategory from '../product/ProductByCategory'

// HomePage starts here
const Home = () => {
  return (
    <>
        <Navbar/>    
        <ProductByCategory/>    
    </>
  )
}

export default Home