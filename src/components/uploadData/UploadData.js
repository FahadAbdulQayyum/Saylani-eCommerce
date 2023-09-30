import React, { useState } from 'react'
// import { storage } from '../firebase/firebaseConfig';
// import { storage } from '../firebase/firebaseConfigBoth';
// import txtData from '../firebase/firebaseConfigBoth';
// import { storage } from '../firebase/firebaseConfigBoth';
import { storage, txtDb } from '../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore';
// import txtDb from '../firebase/firebaseConfigDB';

const UploadData = () => {
    const [txt,setTxt] = useState('');
    const [img,setImg] = useState('');

    // const imgrl = 'fhd'

    const handleUpload = e => {
        console.log('e.target.file',e.target.files[0]);
        const imgs = ref(storage, 'Imgs'+e?.target?.files[0]?.name)
        uploadBytes(imgs, e?.target?.files[0]).then(data => {
            console.log('imgs', data)
            getDownloadURL(data.ref).then(val=>{
                console.log('finally uploaded', val)
                setTxt(e.target.files[0].name)
                setImg(val)
                // imgrl = val
            })
        })

        // dbFunction(imgrl);
        // dbFunction();
    }
    
    // const dbFunction = async (imgInfo) => {
    const dbFunction = async () => {
        const valRef = collection(txtDb, 'txtData')
        await addDoc(valRef,{txtVal:txt, imgUrl:img})
        // await addDoc(valRef,{txtVal:txt, imgUrl:imgInfo})
        alert("Data Added Successfully")
    }

  return (
    <div>
        <input onChange={e=>setTxt(e.target.value)}/>
        <input type='file' onChange={e=>handleUpload(e)}/>
        <button onClick={dbFunction}>Add</button>
    </div>
  )
}

export default UploadData