import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home'
import Product from './components/product/Product';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/product",
      element: <Product/>
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App