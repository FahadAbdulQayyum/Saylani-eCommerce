import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home'
import Product from './components/product/Product';
import storage from './components/firebase/firebaseConfig'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";

const App = () => {

  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/product",
      element: <Product />
    },
  ]);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setFile(prev=>"")
        });
      }
      );
  };

  return (
    <div className='flex flex-col'>
      <RouterProvider router={router} />
      <div>
        {/* Product's name input field */}
        <input type="text" className='border my-1 p-2' placeholder="Enter your product's Name"/><br/>
        <input type="text" className='border my-1 p-2' placeholder="Enter your product's Desc"/><br/>
        <input type="Number" className='border my-1 p-2' placeholder="Enter your product's Price"/><br/>
        <input type="file" accept="image/*" onChange={handleChange} />
        <button className='bg-slate-600 text-white py-2 w-52 mt-3' onClick={handleUpload}>Upload to Firebase</button>
        <p>{percent}% done</p>
      </div>
    </div>
  );
}

export default App