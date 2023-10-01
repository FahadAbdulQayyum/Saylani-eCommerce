import React, { useState } from 'react'
import { storage, txtDb } from '../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore';

import LoadingButton from '../loadingButton/LoadingButton';

const UploadData = () => {
    const [txt,setTxt] = useState('');
    const [img,setImg] = useState('');

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');

    const [loading, setLoading] = useState(false);

    const handleUpload = e => {
        if(!name.length && !desc.length && !price.length) return alert("First fill the info")
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
        setLoading(true)
        const valRef = collection(txtDb, 'txtData')
        await addDoc(valRef,{txtVal:txt, prodName:name, prodDesc:desc, prodPrice:price ,imgUrl:img})
        alert("Data Added Successfully")
        setLoading(false);
        setName('')
        setDesc('')
        setPrice('')
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }

  return (
    <div className='space-y-2 flex flex-col w-60'>
        <input type='text' placeholder="Enter the product's Name" onChange={e=>setName(e?.target?.value)} value={name} className='border p-2'/>
        <input type='text' placeholder="Enter the product's Description" onChange={e=>setDesc(e?.target?.value)} value={desc} className='border p-2'/>
        <input type='text' placeholder="Enter the product's Price" onChange={e=>setPrice(e?.target?.value)} value={price} className='border p-2'/>
        <input type='file' onChange={e=>handleUpload(e)}/>
        {!loading?<button onClick={()=>setTimeout(() => {
            dbFunction()
        }, 1000)} className='bg-slate-500 p-2 text-white'>Upload Product</button>        
        :<LoadingButton/>}
    </div>
  )
}

export default UploadData