
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCe3jGhzZK7v46LDNda0v7DoLiGcI-hEk0",
    authDomain: "react-netflix-clone-8d570.firebaseapp.com",
    projectId: "react-netflix-clone-8d570",
    storageBucket: "react-netflix-clone-8d570.appspot.com",
    messagingSenderId: "497373230916",
    appId: "1:497373230916:web:3d44ec434f223092018911",
    measurementId: "G-QHEHYWF38K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);