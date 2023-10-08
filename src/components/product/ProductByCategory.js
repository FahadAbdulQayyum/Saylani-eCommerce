import React, { useState, useEffect } from 'react'
import { getData } from '../contextApi/getData';

const ProductByCategory = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const dataFetch = async () => {
            let dataa = await getData()
            setData(dataa)
        }
        dataFetch()
    }, [])

    const dataUnduplicated = () => {
        // console.log('dataUnduplicated', [...new Set(data)])
        // console.log('dataUnduplicated', data.map(v=>[...new Set(v.prodCat)]))
        const uniqueProdCats = [...new Set(data.map(v => v.prodCat))];
        console.log('uniqueProdCats', uniqueProdCats);
        return uniqueProdCats;
    }

    // dataUnduplicated();
    
    const ProductByCat = ({cat, name}) => {
    // const ProductByCat = (cat,{name}) => {
        const filtered = data.filter(v=>v.prodCat === name)
        const dataUnd = dataUnduplicated()
        return (
            <div className='relative'>
                {console.log('dataUnd', dataUnd)}
                {/* <h2 className='bg-teal-200 flex text-center justify-center font-bold'>{dataUnd.includes(name) && cat.prodCat === name && name}</h2> */}
                <h2 className='bg-teal-200 flex text-center justify-center font-bold'>{dataUnd.includes(name) && cat.prodCat === name && name}</h2>
                {/* {console.log('||||---|||', cat.prodCat)} */}
                {/* {console.log('||||---|||', cat)} */}
                {/* {console.log('||||---|||', [...new Set(name)])} */}
                {cat.prodCat === name && filtered.length>1 && filtered.map(v=><span>{v.prodName}</span>)}
                {/* {cat.prodCat === name && <div className='my-5'>
                    <img className='h-36' src={cat.imgUrl}/>
                    <small>{cat.prodName}</small>
                    <small className='absolute top-10 left-0 z-10 text-white bg-orange-400 px-3'>{'$'+cat.prodPrice}</small>
                </div>} */}
            </div>
        )
   }

    return (
        <div>
            {
                data.map(v=>
                    <span key={v.id}>
                        <h3>{v?.prodCat === 'Vegetable'}</h3>
                        <ProductByCat cat={v} name='Vegetable'/>
                        <ProductByCat cat={v} name='Sweet'/>
                        <ProductByCat cat={v} name='Fruit'/>
                    </span>
                    )
            }
        </div>
    )
}

export default ProductByCategory