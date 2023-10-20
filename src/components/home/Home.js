// React is imported from 'react';
import React from 'react'
import Navbar from '../navbar/Navbar'
import Product from '../product/Product'
import ProductByCategory from '../product/ProductByCategory'

const Home = () => {
  return (
    <>
        <Navbar/>    
        <ProductByCategory/>    
    </>
  )
}

export default Home