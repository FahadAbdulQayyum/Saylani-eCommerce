import React, {useState} from 'react'
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
      element: <Home/>
    },
    {
      path: "/product",
      element: <Product/>
    },
  ]);

// Handles input change event and updates state
// const handleChange = event => {
//   if(!event.target.files[0]){
//     return alert("Please choose a file first");
//   }
//   const storageRef = ref(storage, `/files/${file.name}`)
//   setFile(event.target.files[0]);
// }

function handleChange(event) {
        setFile(event.target.files[0]);
    }

// function handleUpload() {
//     if (!file) {
//         alert("Please choose a file first!")
//     }
 
//     const storageRef = ref(storage,`/files/${file.name}`)
//     const uploadTask = uploadBytesResumable(storageRef, file);
 
//     uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//             const percent = Math.round(
//                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//             );
 
//             // update progress
//             setPercent(percent);
//         },
//         (err) => console.log(err),
//         () => {
//             // download url
//             getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//                 console.log(url);
//             });
//         }
//     ); 
// }

  const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
 
        const storageRef = ref(storage, `/files/${file.name}`);
 
        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
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
                });
            }
        );
    };

return (
  <div className='flex flex-col'>
      <RouterProvider router={router} />
      {/* <input type="file" accept="image/*" onChange={handleChange}/>
      <button className='bg-slate-600 text-white py-2 w-52 mt-3'>Upload to Firebase</button> */}
        <div>
            <input type="file" onChange={handleChange} accept="" />
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent} "% done"</p>
        </div>
  </div>
);

}

export default App