// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWk_MWH_SE5onLJ78CuI6YngOF5B2OUN0",
  authDomain: "culinarygrove.firebaseapp.com",
  projectId: "culinarygrove",
  storageBucket: "culinarygrove.appspot.com",
  messagingSenderId: "485434310375",
  appId: "1:485434310375:web:dc73d7a7084338aaf52c42",
  measurementId: "G-9H1KNMD55G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);