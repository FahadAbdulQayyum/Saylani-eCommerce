// useState imported
import React, { useState } from 'react'
// Storage and txtDb is imported from 'firebaseConfig' file in current project
import { storage, txtDb } from '../firebase/firebaseConfig'
// getDownloadURL, ref and uploadBytes imported
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
// addDoc and collection imported from firestore
import { addDoc, collection } from 'firebase/firestore';

// LoadingButton from antD is imported
import LoadingButton from '../loadingButton/LoadingButton';

// UploadData function starts here
const UploadData = () => {
    // file and set Filehook is used
    const [file, setFile] = useState('');
    // name and setName hook is used
    const [name, setName] = useState('');
    // desc usestate hook used
    const [desc, setDesc] = useState('');
    // price hook used
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const [loading, setLoading] = useState(false);

    const handleUpload = () => {
        setLoading(true)
        if (!name.length && !desc.length && !price.length) return alert("First fill the info")
        console.log('e.target.file', file.name);
        const imgs = ref(storage, 'Imgs' + file.name)
        uploadBytes(imgs, file).then(data => {
            console.log('imgs', data)
            getDownloadURL(data.ref).then(val => {
                console.log('finally uploaded', val)
                dbFunction(val, file.name)
            })
        })
    }

    const dbFunction = async (imgUrl, imgTxt) => {
        const valRef = collection(txtDb, 'txtData')
        await addDoc(valRef, { txtVal: imgTxt, prodName: name, prodDesc: desc, prodCat: category, prodPrice: price, imgUrl })
        alert("Data Added Successfully")
        setLoading(false);
        setTimeout(() => {
            window.location.reload()
        }, 300);
    }

    console.log('category', category);

    return (
        <div className='space-y-2 flex flex-col w-60'>
            <input type='text' placeholder="Enter the product's Name" onChange={e => setName(e?.target?.value)} value={name} className='border p-2' />
            <input type='text' placeholder="Enter the product's Description" onChange={e => setDesc(e?.target?.value)} value={desc} className='border p-2' />
            {/* <input type='text' placeholder="Enter the product's Category" onChange={e=>setCategory(e?.target?.value)} value={category} className='border p-2'/> */}
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value={""} disabled>Select the product's Category</option>
                <option value="Fruit">Fruit</option>
                <option value="Vegetable">Vegetable</option>
                <option value="Sweet">Sweet</option>
            </select>
            <input type='text' placeholder="Enter the product's Price" onChange={e => setPrice(e?.target?.value)} value={price} className='border p-2' />
            <input type='file' onChange={e => setFile(e?.target?.files[0])} />
            {!loading ? <button onClick={handleUpload} className='bg-slate-500 p-2 text-white'>Upload Product</button>
                : <LoadingButton />}
        </div>
    )
}

export default UploadData
