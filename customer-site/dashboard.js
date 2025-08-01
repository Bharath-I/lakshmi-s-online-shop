import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// ✅ Firebase Config
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

async function loadDashboardProducts() {
    const approvedRef = collection(doc(db, "bharath123", "approved"), "products");
    const snapshot = await getDocs(approvedRef);
    const container = document.getElementById("dashboard-products");

    if (snapshot.empty) {
        container.innerHTML = "<p>No approved products yet.</p>";
        return;
    }

    snapshot.forEach(docSnap => {
        const product = docSnap.data();
        const div = document.createElement("div");

        div.innerHTML = `
      <div style="border:1px solid #ccc; padding:10px; margin:10px;">
        <h3 onclick="goToProduct('${docSnap.id}')">${product.name}</h3>
        <img src="${product.imageURL}" width="200" onclick="goToProduct('${docSnap.id}')">
        <p>₹${product.price}</p>
        <p>${product.details}</p>
        <p><strong>Stock:</strong> ${product.stock}</p>
      </div>
    `;

        container.appendChild(div);
    });
}

window.goToProduct = function(id) {
    localStorage.setItem("selectedProductId", id);
    window.location.href = "product.html";
};

loadDashboardProducts();