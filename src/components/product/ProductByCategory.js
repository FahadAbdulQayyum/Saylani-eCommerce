import React, { useState, useEffect } from 'react'
import { getData } from '../contextApi/getData';

const ProductByCategory = () => {
    const [data, setData] = useState([])

    const [categ, setCateg] = useState({
        name:'',
        prod: []
    })

    const dataCat = data.map(v=>v.prodCat)

    {console.log('dataCat', dataCat)}

    useEffect(() => {
        const dataFetch = async () => {
            let dataa = await getData()
            setData(dataa)
        }
        dataFetch()
    }, [])

    return (
        <>
        </>
    )

}

export default ProductByCategory;