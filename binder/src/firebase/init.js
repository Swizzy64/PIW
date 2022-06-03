// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUz33lPxml7-w98nVK8cFukl6chptXd7U",
  authDomain: "piww-fb197.firebaseapp.com",
  projectId: "piww-fb197",
  storageBucket: "piww-fb197.appspot.com",
  messagingSenderId: "230110630243",
  appId: "1:230110630243:web:1f1133d359d104f4714356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);