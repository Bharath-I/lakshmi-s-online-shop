localStorage.setItem("adminLoggedIn", true);
window.location.href = "/admin/admin/admin-dashboard.html";
// Save product to Firestore
function saveProduct(productId, name, price, imageUrl, inStock, description) {
    db.collection("products").doc(productId).set({
        name: name,
        price: price,
        image: imageUrl,
        inStock: inStock,
        approved: true,
        description: description
    }).then(() => {
        alert("Product added and now live on customer site!");
    });
}
if (snapshot.empty) {
    container.innerHTML = "<p>No products to approve.</p>";
    return;
}

function approveOrder(btn) {
    const row = btn.closest("tr");
    row.querySelector(".status").innerText = "Confirmed";
    btn.disabled = true;
    row.querySelectorAll("button")[1].disabled = false; // Enable Ship
}

function markShipped(btn) {
    const row = btn.closest("tr");
    row.querySelector(".status").innerText = "Shipped";
    btn.disabled = true;
    row.querySelectorAll("button")[2].disabled = false; // Enable Deliver
}

function markDelivered(btn) {
    const row = btn.closest("tr");
    row.querySelector(".status").innerText = "Delivered";
    btn.disabled = true;
}
const orders = JSON.parse(localStorage.getItem("orders")) || [];
localStorage.setItem("orders", JSON.stringify(updatedOrders));
const confirmedOrders = JSON.parse(localStorage.getItem("confirmedOrders")) || [];

const orderData = {
    customerName: localStorage.getItem("customerName"),
    email: localStorage.getItem("customerEmail"),
    phone: localStorage.getItem("customerPhone"),
    address: localStorage.getItem("customerAddress"),
    productName: product.name,
    productDetails: product.details,
    quantity: product.quantity,
    totalPrice: product.price * product.quantity,
    status: "Order Received"
};
const firebaseConfig = {
    apiKey: "AIzaSyA123456789EXAMPLEKEY",
    authDomain: "lakshmi-gold-site.firebaseapp.com",
    projectId: "lakshmi-gold-site",
    storageBucket: "lakshmi-gold-site.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdefgh123456"
};
db.collection("products").add({
    name: productName,
    price: productPrice,
    image: productImageURL,
    description: productDescription,
    approved: false, // ❗ Must wait for approval
    inStock: stockCount
});

confirmedOrders.push(orderData);
localStorage.setItem("confirmedOrders", JSON.stringify(confirmedOrders));
let allProducts = JSON.parse(localStorage.getItem('admin_products')) || [];
let approvedProducts = allProducts.filter(product => product.approved);
localStorage.setItem("products", JSON.stringify(products));
// Example inside your admin-products.js
db.collection("products").add({
    name: "Gold Ring",
    price: 999,
    description: "Beautiful 22K ring",
    image: "ring.jpg",
    stock: 10,
    approved: false // This will be changed to true after admin approves
});
db.collection("products").doc(productId).update({
    approved: true
});
db.collection("products").add({
    name: productName,
    price: productPrice,
    image: productImageURL,
    inStock: true,
    approved: true
}).then(() => {
    alert("Product added successfully!");
});