import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyAmmP8fRh9NSFMUZni9raE_1mI5BNUEYRM",
    authDomain: "practing-project.firebaseapp.com",
    projectId: "practing-project",
    storageBucket: "practing-project.appspot.com",
    messagingSenderId: "494622875827",
    appId: "1:494622875827:web:f15d0d11eeb61a9ef590c6",
    measurementId: "G-8YBP5V3FRD"
});

// Firebase storage reference
const txtDb = getFirestore(app);

export default txtDb;