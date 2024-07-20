// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeiPWX4J0i-7lFHGausEoEM6tvOTfWqBc",
  authDomain: "ab-architects.firebaseapp.com",
  projectId: "ab-architects",
  storageBucket: "ab-architects.appspot.com",
  messagingSenderId: "114865178359",
  appId: "1:114865178359:web:9031a3bb6c6f2291e5b5f2",
  measurementId: "G-Z7RZ8C9NCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);