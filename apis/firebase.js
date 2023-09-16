// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvBhBGbkwjrwCL43rvNWHXqbg8DeoEnSc",
  authDomain: "react-router-practice-c23ae.firebaseapp.com",
  projectId: "react-router-practice-c23ae",
  storageBucket: "react-router-practice-c23ae.appspot.com",
  messagingSenderId: "816516085407",
  appId: "1:816516085407:web:7b6fc45c3287ffb1fe54aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };