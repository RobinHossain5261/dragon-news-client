// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATpOc1bKcn192CK8Iw647AYNHzNvFNPCQ",
    authDomain: "dragon-news-f8f9f.firebaseapp.com",
    projectId: "dragon-news-f8f9f",
    storageBucket: "dragon-news-f8f9f.appspot.com",
    messagingSenderId: "445520433867",
    appId: "1:445520433867:web:5cf6c02d303d0ae9f4814e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;