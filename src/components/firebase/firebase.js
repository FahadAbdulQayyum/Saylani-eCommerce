// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAERQbwUhP5ttlnRtsu2hgTt4BALZ8ynyc",
  authDomain: "saylani-ecommerce-da434.firebaseapp.com",
  projectId: "saylani-ecommerce-da434",
  storageBucket: "saylani-ecommerce-da434.appspot.com",
  messagingSenderId: "965964086692",
  appId: "1:965964086692:web:9e73b73221106232d5d531",
  measurementId: "G-971PN0HHF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);