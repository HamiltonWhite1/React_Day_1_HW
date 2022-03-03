import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCv2FcaG4g99Fx0_qpR0gEGkHe1aEHnaSU",
    authDomain: "messaging-app-c0b36.firebaseapp.com",
    projectId: "messaging-app-c0b36",
    storageBucket: "messaging-app-c0b36.appspot.com",
    messagingSenderId: "942841700956",
    appId: "1:942841700956:web:41aeb1f252aa3ba2387c99"
};



  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);