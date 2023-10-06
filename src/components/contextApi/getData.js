// 'txtDb' is a configuration setup with firebase store which is imported from 'firebaseConfig'
import { txtDb } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const getData = async () => {
    // This gets the collection stored in the firebasestore
    const valRef = collection(txtDb, 'txtData')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
    console.log('allData', allData);
    return allData

}
