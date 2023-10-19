// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "lucki-estate.firebaseapp.com",
    projectId: "lucki-estate",
    storageBucket: "lucki-estate.appspot.com",
    messagingSenderId: "258122844233",
    appId: "1:258122844233:web:6c48a37b18fcb9c7edd798"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);