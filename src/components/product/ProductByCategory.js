import React from 'react'

const ProductByCategory = () => {
    // let a = [{id:1, name:'Fahad', age:27},{id:2, name:'Aftab', age:21},{id:3, name:'Aftab', age:23},{id:4, name:'Fahad', age:24}]

    // let name = a.map(v=>v.name)
    // let unrepeatedName = [...new Set(name)]
    // console.log('unrepeatedName',unrepeatedName)
    // let arr = []
    // let lets = a.map((v,i)=>{
    //     if(v.name === unrepeatedName[i]){
    //         arr.push({name:v.name, prod:[v]})
    //         console.log('arr',arr)
    //     }
    // })

    let a = [{id:1, name:'Fahad', age:27},{id:2, name:'Aftab', age:21},{id:3, name:'Aftab', age:23},{id:4, name:'Fahad', age:24}]

    let unrepeatedName = [...new Set(a.map(v => v.name))];
    
    let arr = unrepeatedName.map(name => {
        let prod = a.filter(v => v.name === name);
        return { name, prod };
    });
    
    console.log('arr', arr);
    

    return (
    <div>ProductByCategory</div>
  )
}

export default ProductByCategory



// import React, { useState, useEffect } from 'react'
// import { getData } from '../contextApi/getData';

// const ProductByCategory = () => {
//     const [data, setData] = useState([])

//     const [categ, setCateg] = useState({
//         name:'',
//         prod: []
//     })

//     const dataCat = data.map(v=>v.prodCat)
//     const dataCatUnduplicated = [...new Set(dataCat)]
//     const dataCatPurelyUnduplicated = dataCatUnduplicated.filter(v=>v!==undefined)

//     useEffect(() => {
//         const dataFetch = async () => {
//             let dataa = await getData()
//             setData(dataa)
//         }
//         dataFetch()
//     }, [])

//     const Func = () => dataCatPurelyUnduplicated.forEach(d=>{
//             data.map(v=>{
//                 if(v.prodCat===d){
//                     console.log('v.prodCat===dataCatPurelyUnduplicated', v.prodCat, d)
//                     // setCateg({...categ, name: d, prod:v})
//                     // console.log('categg', categ)
//                 }  
//             })
//         })
    
//     // const Func = () => {
//     //     dataCatPurelyUnduplicated.forEach((d) => {
//     //       const filteredData = data.filter((v) => v.prodCat === d);
//     //     //   console.log('v.prodCat===dataCatPurelyUnduplicated', filteredData.map((v) => v.prodCat), d);
//     //       setCateg({ ...categ, name: d, prod: [...categ.prod, ...filteredData] });
//     //       console.log('categ', categ);
//     //     });
//     //   };      


//     return (
//         <>
//         <Func/>
//         </>
//     )

// }

// export default ProductByCategory;