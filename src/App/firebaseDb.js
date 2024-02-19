// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI-uAsU3SHavAugY4GVDR6QALfWbbOSeY",
  authDomain: "app-caih.firebaseapp.com",
  projectId: "app-caih",
  storageBucket: "app-caih.appspot.com",
  messagingSenderId: "596116028493",
  appId: "1:596116028493:web:453a054256683d83d17004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;