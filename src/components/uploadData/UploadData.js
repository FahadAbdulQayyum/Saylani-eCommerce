// useState imported
import React, { useState } from 'react'
import { storage, txtDb } from '../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore';

import LoadingButton from '../loadingButton/LoadingButton';

const UploadData = () => {
    const [file, setFile] = useState('');

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');

    const [loading, setLoading] = useState(false);

    const handleUpload = () => {
        if(!name.length && !desc.length && !price.length) return alert("First fill the info")
        console.log('e.target.file',file.name);
        const imgs = ref(storage, 'Imgs'+file.name)
        uploadBytes(imgs, file).then(data => {
            console.log('imgs', data)
            getDownloadURL(data.ref).then(val=>{
                console.log('finally uploaded', val)
                dbFunction(val, file.name)
            })
        })
    }
    
    const dbFunction = async (imgUrl, imgTxt) => {
        setLoading(true)
        const valRef = collection(txtDb, 'txtData')
        await addDoc(valRef,{txtVal:imgTxt, prodName:name, prodDesc:desc, prodPrice:price ,imgUrl})
        alert("Data Added Successfully")
        setLoading(false);
        setTimeout(() => {
            window.location.reload()
        }, 300);
    }

  return (
    <div className='space-y-2 flex flex-col w-60'>
        <input type='text' placeholder="Enter the product's Name" onChange={e=>setName(e?.target?.value)} value={name} className='border p-2'/>
        <input type='text' placeholder="Enter the product's Description" onChange={e=>setDesc(e?.target?.value)} value={desc} className='border p-2'/>
        <input type='text' placeholder="Enter the product's Price" onChange={e=>setPrice(e?.target?.value)} value={price} className='border p-2'/>
        <input type='file' onChange={e=>setFile(e?.target?.files[0])}/>
        {!loading?<button onClick={handleUpload} className='bg-slate-500 p-2 text-white'>Upload Product</button>        
        :<LoadingButton/>}
    </div>
  )
}

export default UploadData
