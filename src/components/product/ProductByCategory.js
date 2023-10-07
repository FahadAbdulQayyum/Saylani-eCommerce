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
    return (
        <div>
            {
                data.map(v=>
                    <span key={v.id}>
                        <h3>{v?.prodCat}</h3>
                        {console.log('v.id',v?.prodCat)}
                    </span>
                    )
            }
        </div>
    )
}

export default ProductByCategory