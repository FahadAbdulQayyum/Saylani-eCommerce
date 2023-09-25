import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyAERQbwUhP5ttlnRtsu2hgTt4BALZ8ynyc",
    authDomain: "saylani-ecommerce-da434.firebaseapp.com",
    projectId: "saylani-ecommerce-da434",
    storageBucket: "saylani-ecommerce-da434.appspot.com",
    messagingSenderId: "965964086692",
    appId: "1:965964086692:web:9e73b73221106232d5d531",
    measurementId: "G-971PN0HHF5"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;