// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI3hduoTfK8Ux7uwiOUuV1jwz4gFYe5Ec",
    authDomain: "luxary-living.firebaseapp.com",
    projectId: "luxary-living",
    storageBucket: "luxary-living.appspot.com",
    messagingSenderId: "781004373148",
    appId: "1:781004373148:web:1ef273e8b02d6f49abc159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;