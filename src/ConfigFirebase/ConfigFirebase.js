// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0sIvhE2Bb86AJuXupvHffFibIzH7RTgU",
  authDomain: "tugerente2-db.firebaseapp.com",
  projectId: "tugerente2-db",
  storageBucket: "tugerente2-db.appspot.com",
  messagingSenderId: "743327030705",
  appId: "1:743327030705:web:27cc5ac4e4e1b4d7f1b190",
  measurementId: "G-GDX2PJ8PDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);