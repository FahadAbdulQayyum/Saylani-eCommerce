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

    // Remove the duplicacy
    let unrepeatedName = [...new Set(data.map(v => v.prodCat))];
    // Remove the 'undefined'
    let unrepeatedCat = unrepeatedName.filter(v=>v!==undefined)
    
    // Categorize the object based on it's splitted category
    let arr = unrepeatedCat.map(name => {
        // filter the data having the same category name
        let prod = data.filter(v => v.prodCat === name);
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