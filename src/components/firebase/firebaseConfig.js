// initializeApp imported from firebase/App
import { initializeApp } from "firebase/app";
// getStorage imported from firebase/Storage
import { getStorage } from "firebase/storage";
// getFirestore imported from 'firebase/firestore
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with their unique configuration
const app = initializeApp({
    // apiKey for initializedApp defined
    apiKey: "AIzaSyAmmP8fRh9NSFMUZni9raE_1mI5BNUEYRM",
    // authDomain for initializedApp defined
    authDomain: "practing-project.firebaseapp.com",
    // projectId for initializedApp defined
    projectId: "practing-project",
    // storageBucket for initializedApp defined
    storageBucket: "practing-project.appspot.com",
    // messagingSenderId for initializedApp defined
    messagingSenderId: "494622875827",
    // appId for initializedApp defined
    appId: "1:494622875827:web:f15d0d11eeb61a9ef590c6",
    // measurementId for initializedApp defined
    measurementId: "G-8YBP5V3FRD"
});

// Firebase storage reference
const storage = getStorage(app);
// txtDb referred from getFirestore(app)
const txtDb = getFirestore(app);

// both storage and txtDb is exported
export { storage, txtDb };