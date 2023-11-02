import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "dnd-damage-counter.firebaseapp.com",
  projectId: "dnd-damage-counter",
  storageBucket: "dnd-damage-counter.appspot.com",
  messagingSenderId: "377458844074",
  appId: "1:377458844074:web:a6ca3b75478b16ef0d0bd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app)