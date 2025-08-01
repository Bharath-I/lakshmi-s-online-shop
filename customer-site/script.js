let products = JSON.parse(localStorage.getItem("products")) || [];
const visibleProducts = products.filter(p => p.approved && p.stock > 0);
firebase.auth().createUserWithEmailAndPassword(email, password)
firebase.auth().signInWithEmailAndPassword(email, password)


db.collection("products")
    .where("approved", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // render product on customer page
        });
    });
db.collection("products")
    .where("approved", "==", true)
    .onSnapshot((snapshot) => {
        const container = document.getElementById("product-list");
        container.innerHTML = "";
        snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.inStock > 0) {
                container.innerHTML += `
          <div class="product">
            <img src="${data.image}" />
            <h3>${data.name}</h3>
            <p>${data.description}</p>
            <p>₹${data.price}</p>
            <button>Add to Cart</button>
          </div>`;
            }
        });
    });
if (data.approved) {
    const div = document.createElement("div");
    div.innerHTML = `
    <a href="product.html?id=${docSnap.id}">
      <img src="${data.imageURL}" width="100"><br>
      <strong>${data.name}</strong>
    </a>
    <p>₹${data.price}</p>
    <hr>
  `;
    productList.appendChild(div);
}

db.collection("products")
    .where("approved", "==", true)
    .where("stock", ">", 0)
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            const product = doc.data();
            // Show product on the page
        });
    });

db.collection("orders").add({
    productName: "Gold Ring",
    user: "lakshmi@gmail.com",
    address: "Chennai",
    price: 999,
    status: "Ordered", // Later change to Shipping / Delivered
    paymentStatus: "Paid",
    orderTime: new Date()
});
db.collection("products")
    .where("approved", "==", true)
    .onSnapshot(snapshot => {
        // Automatically updates product list
    });

// Load products
window.onload = function() {
    if (document.getElementById("productList")) {
        let list = document.getElementById("productList");
        list.innerHTML = "";
        products.forEach(p => {
            list.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>Size: ${p.size}</p>
          <p>Price: ${p.price}</p>
          <button onclick="viewProduct(${p.id})">View</button>
        </div>
      `;
        });
    }
}
const firebaseConfig = {
    apiKey: "AIzaSyA123456789EXAMPLEKEY",
    authDomain: "lakshmi-gold-site.firebaseapp.com",
    projectId: "lakshmi-gold-site",
    storageBucket: "lakshmi-gold-site.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdefgh123456"
};

// View product
function viewProduct(id) {
    localStorage.setItem("selectedProductId", id);
    window.location.href = "product.html";
}

// Logout
function logout() {
    localStorage.clear();
}

function viewProduct(id) {
    const product = products.find(p => p.id === id);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product.html";
}
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cartItems');
let total = 0;

cartContainer.innerHTML = ''; // Clear previous content
div.onclick = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(p));
    window.location.href = "product.html";
};
const paymentType = localStorage.getItem("paymentType");

orders.push({
    product: selectedProduct,
    address: address,
    date: new Date().toLocaleString(),
    paymentType: paymentType,
    status: "Paid"
});
localStorage.setItem("checkoutProduct", JSON.stringify(selectedProduct));
window.location.href = "payment.html"; // Example total price logic
const selectedProduct = {
    name: "Gold Necklace",
    image: "images/necklace.jpg",
    details: "22K gold covering",
    price: 1499,
    quantity: 1
};

localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
localStorage.setItem("paymentAmount", selectedProduct.price);

function notifyAdmin(subject, message) {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            subject: subject,
            message: message,
            to_email: "admin@example.com" // Your admin email
        })
        .then(function(response) {
            console.log("Admin notified", response.status, response.text);
        }, function(error) {
            console.error("Failed to notify admin", error);
        });
}
notifyAdmin("Payment Received", "Customer paid ₹[amount] for order #[order ID].");
notifyAdmin("Order Confirmed", "Customer confirmed order #[order ID]. Ready to ship.");
notifyAdmin("Payment Received", "Customer paid ₹[amount] for order #[order ID].");
notifyAdmin("Order ", "Customer confirmed order #[order ID]. Ready to ship.");
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

confirmedOrders.push(orderData);
localStorage.setItem("confirmedOrders", JSON.stringify(confirmedOrders));