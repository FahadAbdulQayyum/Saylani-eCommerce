import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const appDB = initializeApp({
    apiKey: "AIzaSyAmmP8fRh9NSFMUZni9raE_1mI5BNUEYRM",
    authDomain: "practing-project.firebaseapp.com",
    projectId: "practing-project",
    storageBucket: "practing-project.appspot.com",
    messagingSenderId: "494622875827",
    appId: "1:494622875827:web:f15d0d11eeb61a9ef590c6",
    measurementId: "G-8YBP5V3FRD"
});

// Firebase storage reference
const txtDb = getFirestore(appDB);

// // Initialize Firebase
// const app = initializeApp({
//     apiKey: "AIzaSyAERQbwUhP5ttlnRtsu2hgTt4BALZ8ynyc",
//     authDomain: "saylani-ecommerce-da434.firebaseapp.com",
//     projectId: "saylani-ecommerce-da434",
//     storageBucket: "saylani-ecommerce-da434.appspot.com",
//     messagingSenderId: "965964086692",
//     appId: "1:965964086692:web:9e73b73221106232d5d531",
//     measurementId: "G-971PN0HHF5"
// });

// // Firebase storage reference
// const storage = getStorage(app);
const storage = getStorage(appDB);

export { txtDb, storage };
// export default txtDb;