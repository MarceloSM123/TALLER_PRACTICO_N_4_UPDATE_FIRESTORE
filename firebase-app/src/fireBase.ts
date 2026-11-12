import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLJYH9G-QsTiM4rTjhXhdozVnHW9z-fgs",
  authDomain: "curso-firebase-7a210.firebaseapp.com",
  projectId: "curso-firebase-7a210",
  storageBucket: "curso-firebase-7a210.firebasestorage.app",
  messagingSenderId: "904007059304",
  appId: "1:904007059304:web:5ba6646af80306075ff8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}