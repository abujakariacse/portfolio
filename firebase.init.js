import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEHIk2P2uZtYjPORxcTtuFqq33XTQzNSA",
    authDomain: "abujakaria-cse.firebaseapp.com",
    projectId: "abujakaria-cse",
    storageBucket: "abujakaria-cse.appspot.com",
    messagingSenderId: "180308110780",
    appId: "1:180308110780:web:3674a9334c3151cf358fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;