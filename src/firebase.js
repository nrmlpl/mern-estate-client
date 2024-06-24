// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-34550.firebaseapp.com",
  projectId: "mern-estate-34550",
  storageBucket: "mern-estate-34550.appspot.com",
  messagingSenderId: "390890121610",
  appId: "1:390890121610:web:f1e895fe67495e647c0073"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);