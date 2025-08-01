import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    deleteDoc,
    addDoc,
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

// ✅ Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Get Pending Products
async function loadPendingProducts() {
    const pendingRef = collection(doc(db, "bharath123", "pending"), "products");
    const snapshot = await getDocs(pendingRef);

    const container = document.getElementById("product-list");
    container.innerHTML = "";

    if (snapshot.empty) {
        container.innerHTML = "<p>No products pending approval.</p>";
        return;
    }

    snapshot.forEach(docSnap => {
        const product = docSnap.data();
        const div = document.createElement("div");
        div.innerHTML = `
      <hr>
      <h3>${product.name}</h3>
      <img src="${product.imageURL}" width="150" />
      <p><strong>Description:</strong> ${product.details}</p>
      <p><strong>Price:</strong> ₹${product.price}</p>
      <p><strong>Stock:</strong> ${product.stock}</p>
      <button onclick="approveProduct('${docSnap.id}', ${JSON.stringify(JSON.stringify(product) || {})})">Approve</button>
    `;
        container.appendChild(div);
    });
}

// ✅ Approve product (move from pending → live)
window.approveProduct = async function(productId, productJSON) {
    const product = JSON.parse(JSON.parse(productJSON));

    try {
        // ✅ Add to approved list
        const approvedRef = collection(doc(db, "bharath123", "approved"), "products");
        await addDoc(approvedRef, {
            ...product,
            approved: true,
            approvedAt: new Date()
        });

        // ✅ Delete from pending
        const pendingDocRef = doc(collection(doc(db, "bharath123", "pending"), "products"), productId);
        await deleteDoc(pendingDocRef);

        alert("Product approved!");
        loadPendingProducts(); // Reload list
    } catch (error) {
        console.error("Approval failed:", error);
        alert("Error approving product.");
    }
};

loadPendingProducts();