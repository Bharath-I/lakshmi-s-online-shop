import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getFirestore,
    doc,
    collection,
    addDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

// ✅ Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCkY7eaJEpf3zq6Nn3kai1QsruRlbank7E",
    authDomain: "bharath-storage.firebaseapp.com",
    projectId: "bharath-storage",
    storageBucket: "bharath-storage.appspot.com",
    messagingSenderId: "885867111825",
    appId: "1:885867111825:web:a933ba695b17aec7f4a630"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Form Submit
document.getElementById("productForm").addEventListener("submit", async(e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const details = document.getElementById("details").value;
    const price = parseFloat(document.getElementById("price").value);
    const stock = parseInt(document.getElementById("stock").value);
    const imageFile = document.getElementById("image").files[0];

    if (!imageFile) {
        alert("Please select an image.");
        return;
    }

    try {
        // ✅ Upload image to Firebase Storage
        const imageRef = ref(storage, 'product-images/' + Date.now() + "-" + imageFile.name);
        const snapshot = await uploadBytes(imageRef, imageFile);
        const imageURL = await getDownloadURL(snapshot.ref);

        // ✅ Save product to Firestore → bharath123/pending/products
        const productRef = collection(doc(db, "bharath123", "pending"), "products");

        await addDoc(productRef, {
            name,
            details,
            price,
            stock,
            imageURL,
            approved: false,
            createdAt: new Date()
        });

        alert("Product submitted for approval!");
        // window.location.href = "approval.html"; // Optional
    } catch (error) {
        console.error("Error adding product:", error);
        alert("Error adding product.");
    }
});