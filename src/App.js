import React, { useState } from 'react'
// Following the imported from 'react-router-dom' for creating the routes
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Home component imported here
import Home from './components/home/Home'
// Product component imported here
import Product from './components/product/Product';
// This is the firebase Storage configuration and connected to the Firebase
import { storage } from './components/firebase/firebaseConfig'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL

} from "firebase/storage";

import Retrieve from './components/retrieve/Retrieve'
import UploadData from './components/uploadData/UploadData';

const App = () => {

  // percent state 
  const [percent, setPercent] = useState(0);
  // file state
  const [file, setFile] = useState("");

  const router = createBrowserRouter([
    {
      // path is '/'
      path: "/",
      // on Home component is appeared on path = '/'
      element: <Home />
    },
    {
      // path is '/product'
      path: "/product",
      // on Product component is appeared on path = '/product'
      element: <Product />
    },
    {
      // path is '/product'
      path: "/addProduct",
      // on Product component is appeared on path = '/product'
      element: <UploadData />
    },
    {
      path: "/retrieveData",
      element: <Retrieve />
    },

  ]);

  return (
    <div className='flex flex-col'>
      {/* This is routing  */}
      <RouterProvider router={router} />
    </div>
  );
}

// App is exported 
export default App
