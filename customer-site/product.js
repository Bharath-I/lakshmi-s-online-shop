import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getFirestore,
    doc,
    getDocs,
    collection
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkY7eaJEpf3zq6Nn3kai1QsruRlbank7E",
    authDomain: "bharath-storage.firebaseapp.com",
    projectId: "bharath-storage",
    storageBucket: "bharath-storage.appspot.com",
    messagingSenderId: "885867111825",
    appId: "1:885867111825:web:a933ba695b17aec7f4a630"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productId = localStorage.getItem("selectedProductId");

async function loadProduct() {
    const approvedRef = collection(doc(db, "bharath123", "approved"), "products");
    const snapshot = await getDocs(approvedRef);
    const container = document.getElementById("product-detail");

    snapshot.forEach(docSnap => {
        if (docSnap.id === productId) {
            const product = docSnap.data();
            container.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.imageURL}" width="300">
        <p><strong>Price:</strong> ₹${product.price}</p>
        <p><strong>Stock:</strong> ${product.stock}</p>
        <p>${product.details}</p>
      `;

            // Add button events
            document.getElementById("add-to-cart").onclick = () => {
                localStorage.setItem("cartProduct", JSON.stringify(product));
                window.location.href = "cart.html";
            };

            document.getElementById("buy-now").onclick = () => {
                localStorage.setItem("buyNowProduct", JSON.stringify(product));
                window.location.href = "checkout.html";
            };
        }
    });
}

loadProduct();