import React, { useEffect, useState } from 'react';
import { storage, txtDb } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
// import storage from '../firebase/firebaseConfig';

function ImageComponent() {
  const [imagesUrl, setImagesUrl] = useState([null]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const valRef = collection(txtDb, 'txtData')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val=>({...val.data(), id:val.id}))
    setImagesUrl(allData)
    console.log('allData',allData);
  }

  return (
    <div>
      <h1>Welcome to Retrieve Data from Firebase</h1>
      {
        imagesUrl.map((v,i)=>{
          return (
            <img key={i} src={v?.imgUrl}/>
          )
          // console.log('v',v)
        })
      }
    </div>
  );
}

export default ImageComponent;
