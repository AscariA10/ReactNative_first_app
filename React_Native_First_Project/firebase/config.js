// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyA5438hqsldRlMuAKyOKNsMU6r3WayVjPg",
   authDomain: "postsapprn.firebaseapp.com",
   databaseURL: "https://postsapprn-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "postsapprn",
   storageBucket: "postsapprn.appspot.com",
   messagingSenderId: "314654411977",
   appId: "1:314654411977:web:995c3292b5e093e8cd9118",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
