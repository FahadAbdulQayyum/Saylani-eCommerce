import React, {useState} from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home'
import Product from './components/product/Product';

const App = () => {

  const [file, setFile] = useState("");

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

// Handles input change event and updates state
const handleChange = event => {
  setFile(event.target.files[0]);
}

return (
  <div className='flex flex-col'>
      <RouterProvider router={router} />
      <input type="file" accept="image/*" onChange={handleChange}/>
      <button className='bg-slate-600 text-white py-2 w-52 mt-3'>Upload to Firebase</button>
  </div>
);

}

export default App