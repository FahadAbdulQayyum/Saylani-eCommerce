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

    const ProductByCat = ({cat, name}) => {
        console.log('cat',cat)
        const filtered = data.filter(v=>v.prodCat === name)
        console.log('filtered', filtered)
        return (
            <div className='relative'>
                <h2 className='bg-teal-200 flex text-center justify-center font-bold'>{cat.prodCat === name && name}</h2>
                {cat.prodCat === name && <div className='my-5'>
                    <img className='h-36' src={cat.imgUrl}/>
                    <small>{cat.prodName}</small>
                    <small className='absolute top-10 left-0 z-10 text-white bg-orange-400 px-3'>{'$'+cat.prodPrice}</small>
                </div>}
            </div>
        )

        // return (
        //     <>
        //         {
        //             filtered.map(v=><>{v.prodName}</>)
        //         }
        //     </>
        // )
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