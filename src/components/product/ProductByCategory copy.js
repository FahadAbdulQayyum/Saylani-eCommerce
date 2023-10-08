import React, { useState, useEffect } from 'react'
import { getData } from '../contextApi/getData';

const ProductByCategory = () => {
    const [data, setData] = useState([])

    const [categ, setCateg] = useState({
        name:'',
        prod: []
    })

    useEffect(() => {
        const dataFetch = async () => {
            let dataa = await getData()
            setData(dataa)
            // dataa.map(d=>setCateg({...categ, name: d.prodCat}))
            // // setCateg({...categ, name: dataa.prodCat})
        }
        dataFetch()
    }, [])

    useEffect(() => {
        data.map(v=>setCateg({...categ, name: v.prodCat}))
        console.log('congegg', categ)
    },[])

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

//    const dataRun = () => {
   const DataRun = () => {
    // let wholeData = data?.map(v=> v.prodCat)
    let wholeData = data?.map(v=> v)
    let unRepeatedCategory = [...new Set(data?.map(v=> v.prodCat))]
    let unrepeatedCat = unRepeatedCategory.filter(v=>v!==undefined)
    // unrepeatedCat.forEach(ur=>setCateg({...categ, name:ur, prod.push()}))
    // unrepeatedCat.forEach(ur=> console.log('ur===wholeData.prodCat',ur===wholeData.prodCat))
    // unrepeatedCat.forEach(ur=> console.log('ur===wholeData.prodCat',ur,wholeData))

    // unrepeatedCat.forEach(ur=> wholeData.map(v=>{
    //     if(v.prodCat === ur){
    //         // console.log('v.prodCat === ur', v.prodCat, ur)
    //         console.log('v.prodCat === ur', v.prodCat, ur,v)
    //         let arr = []
    //         arr.push(ur)
    //         arr.push(v)
    //         console.log('arr',arr)
    //     }
    // }))

    // for(var l=0;l<=unrepeatedCat.length;l++){
    //     wholeData.map(v=>{
    //         if(v.prodCat === unrepeatedCat[l]){
    //             console.log('v.prodCat, unrepeatedCat['+l+'], v', v.prodCat, unrepeatedCat[l], v)
    //             let arr = []
    //         arr.push(unrepeatedCat[l])
    //         arr.push(v)
    //         console.log('arr',arr)
    //         }
    //     })
    // }

    // wholeData.map(v=>{if(v.prodCat === 'Vegetable'){
    //     console.log('()()()()', v)
    // }})

    wholeData.map(v=>{if(v.prodCat === unrepeatedCat){
        return (
            <>
            <img src={v.imgUrl}/>
            </>
        )
    }})

    // return(
    //     <>
    //     {
    //         wholeData.map(v=>{
    //             unrepeatedCat.forEach(ur=>{

    //                 if(v.prodCat === ur){
    //                 return (
    //                     <>
    //                     <img src={v.imgUrl}/>
    //                     {console.log('vvvv', v.imgUrl)}
    //                     </>
    //                 )
    //             }
    //             })
    //         console.log('elseee',v.prodCat, unrepeatedCat)
    //     })
    //     }
    //     </>
    // )

    return (
        <>
          {wholeData.map((v) => {
            if (unrepeatedCat.includes(v.prodCat)) {
              return (
                <div key={v.imgUrl}>
                  <img src={v.imgUrl} alt={v.prodCat} />
                  {console.log('vvvv', v.imgUrl)}
                </div>
              );
            } else {
              console.log('elseee', v.prodCat, unrepeatedCat);
              return null; // or any other fallback JSX if needed
            }
          })}
        </>
      );
      
    
    // return(
    //     <>
    //     {console.log('****', wholeData)}
    //     {console.log('dataR', unRepeatedCategory)}
    //     {console.log('unrepeatedCat', unrepeatedCat)}
    //     </>
    // )
   }

//    dataRun();

    return (
        <div>
            {
                data.map(v=>
                    <span key={v.id}>
                        {/* {console.log('categgg', categ)} */}
                        <h3>{v?.prodCat === 'Vegetable'}</h3>
                        <ProductByCat cat={v} name='Vegetable'/>
                        <ProductByCat cat={v} name='Sweet'/>
                        <ProductByCat cat={v} name='Fruit'/>
                        <DataRun/>
                    </span>
                    )
            }
        </div>
    )
}

export default ProductByCategory