// React and useState imported from 'React'
import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home'
import Product from './components/product/Product';
// This is the firebase Storage configuration and connected to the Firebase
import storage from './components/firebase/firebaseConfig'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";

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
  ]);

  // This function helps in storing the images/file in the file state 
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  // This function is supposed to handle the uploading process
  const handleUpload = () => {
    // In case of no file uploaded and upload button is pressed for uploading a file then this error alerts to users
    if (!file) {
      // alert appears with the message as parameter
      alert("Please upload an image first!");
    }

    // This then refer the file and create a place in firebase and name it as file's name from the computer system
    const storageRef = ref(storage, `/files/${file.name}`);

    // This process aheads successfully and with the help this we can determine the bytes uploading and can calculate the percentage accordingly
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
          // This then empty the file to avoid reuploading the same image or data
          setFile(prev=>"")
        });
      }
      );
  };

  return (
    <div className='flex flex-col'>
      {/* This is routing  */}
      <RouterProvider router={router} />
      <div>
        {/* Product's name input field */}
        <input type="text" className='border my-1 p-2' placeholder="Enter your product's Name"/><br/>
        {/* Product's description input field */}
        <input type="text" className='border my-1 p-2' placeholder="Enter your product's Desc"/><br/>
        {/* Product's price input field */}
        <input type="Number" className='border my-1 p-2' placeholder="Enter your product's Price"/><br/>
        {/* This input field takes photo from system  */}
        <input type="file" accept="image/*" onChange={handleChange} />
        {/* This is button for uploading the image and hopefully for the data too to the firebase */}
        <button className='bg-slate-600 text-white py-2 w-52 mt-3' onClick={handleUpload}>Upload to Firebase</button>
        {/* This helps us to know the percentage of the process made when the image or data is transfered/ uploaded to the firebase cloud */}
        <p>{percent}% done</p>
      </div>
    </div>
  );
}

// App is exported 
export default App
