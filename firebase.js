// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

// ✅ Your Firebase configuration (already correct)
const firebaseConfig = {
    apiKey: "AIzaSyCkY7eaJEpf3zq6Nn3kai1QsruRlbank7E",
    authDomain: "bharath-storage.firebaseapp.com",
    projectId: "bharath-storage",
    storageBucket: "bharath-storage.appspot.com", // ✅ Fixed typo here
    messagingSenderId: "885867111825",
    appId: "1:885867111825:web:a933ba695b17aec7f4a630",
    measurementId: "G-G4Z272DVWR"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);