// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e3fa0.firebaseapp.com",
  projectId: "mern-estate-e3fa0",
  storageBucket: "mern-estate-e3fa0.appspot.com",
  messagingSenderId: "419816934605",
  appId: "1:419816934605:web:8e7f06e538cdd170b86d84"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);