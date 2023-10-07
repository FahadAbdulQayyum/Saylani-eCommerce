import React, { useEffect, useState } from 'react';
import { txtDb } from '../firebase/firebaseConfig';
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
      <span className='grid grid-cols-3 gap-3'>
      {
        imagesUrl.map((v,i)=>{
          return (
            <span>
              {/* <div className='bg-slate-400 w-[30%] p-2 rounded'> */}
              <div className='bg-slate-300 p-2 rounded'>
                <img className='' key={i} src={v?.imgUrl}/>
                <span className='flex justify-between'>
                  <h3 className='font-bold'>{v?.prodName}</h3>
                  <h1>{`$`+v?.prodPrice}</h1>
                </span>
                  <p>{v?.prodDesc}</p>
              </div>
            </span>
          )
          // console.log('v',v)
        })
      }
      </span>
    </div>
  );
}

export default ImageComponent;
