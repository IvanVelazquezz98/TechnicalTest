// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa9_ejuSOUwk38Yx8LnuE4LIPh2DKkUWM",
  authDomain: "tugerente-7a724.firebaseapp.com",
  projectId: "tugerente-7a724",
  storageBucket: "tugerente-7a724.appspot.com",
  messagingSenderId: "132702057679",
  appId: "1:132702057679:web:12dfe174aaba306f4573ba",
  measurementId: "G-D0B495YQZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);