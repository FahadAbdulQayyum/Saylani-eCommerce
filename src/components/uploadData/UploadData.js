import React, { useState } from 'react'
import { storage, txtDb } from '../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore';

const UploadData = () => {
    const [txt,setTxt] = useState('');
    const [img,setImg] = useState('');

    const handleUpload = e => {
        console.log('e.target.file',e.target.files[0]);
        const imgs = ref(storage, 'Imgs'+e?.target?.files[0]?.name)
        uploadBytes(imgs, e?.target?.files[0]).then(data => {
            console.log('imgs', data)
            getDownloadURL(data.ref).then(val=>{
                console.log('finally uploaded', val)
                setTxt(e.target.files[0].name)
                setImg(val)
            })
        })

    }
    
    const dbFunction = async () => {
        const valRef = collection(txtDb, 'txtData')
        await addDoc(valRef,{txtVal:txt, imgUrl:img})
        alert("Data Added Successfully")
    }

  return (
    <div className='space-y-2'>
        <input type='file' onChange={e=>handleUpload(e)}/><br/>
        <button onClick={dbFunction} className='bg-slate-500 p-2 text-white'>Upload Image</button>
    </div>
  )
}

export default UploadData