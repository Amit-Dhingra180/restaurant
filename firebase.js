// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaeehU_KO9Gudh537xGanfyKU-pRHJ3lY",
  authDomain: "restaurant-c3c46.firebaseapp.com",
  projectId: "restaurant-c3c46",
  storageBucket: "restaurant-c3c46.appspot.com",
  messagingSenderId: "1016216103050",
  appId: "1:1016216103050:web:970138ce89f6831712a573",
  measurementId: "G-VYD47G78XZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);