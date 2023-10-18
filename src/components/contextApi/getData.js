// 'txtDb' is a configuration setup with firebase store which is imported from 'firebaseConfig'
import { txtDb } from '../firebase/firebaseConfig';
// The function imported from firebase/firebasestore
import { collection, getDocs } from 'firebase/firestore';

// getData is initiallized from here and directly exported
export const getData = async () => {
    // This gets the collection stored in the firebasestore in the name of txtDb
    const valRef = collection(txtDb, 'txtData')
    // Get the data present in the collection and store them into dataDb
    const dataDb = await getDocs(valRef)
    // Fetch all data, align them as per requirement as store them into allData variable
    const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
    console.log('allData', allData);
    // return allData to use in another components
    return allData
}
