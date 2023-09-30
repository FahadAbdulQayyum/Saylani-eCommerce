import React, { useState } from 'react'
import { storage } from '../firebase/firebaseConfig';
// import storage from '../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

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
                setImg(val)
            })
        })
    }
    
  return (
    <div>
        <input onChange={e=>setTxt(e.target.value)}/>
        <input type='file' onChange={e=>handleUpload(e)}/>
    </div>
  )
}

export default UploadData