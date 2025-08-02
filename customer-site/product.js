// Example product data (you can replace this with dynamic data or loop-generated HTML)
const products = [{
        id: "1",
        name: "Gold Necklace",
        price: "₹1200",
        image: "images/gold1.jpg",
    },
    {
        id: "2",
        name: "Gold Bangles",
        price: "₹800",
        image: "images/gold2.jpg",
    },
];

// Display products
const productContainer = document.getElementById("product-container");
products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image" data-id="${product.id}">
    <h3 class="product-name" data-id="${product.id}">${product.name}</h3>
    <p class="product-price">${product.price}</p>
  `;
    productContainer.appendChild(productCard);
});

// Add click listeners
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("product-image") || e.target.classList.contains("product-name")) {
        const clickedId = e.target.getAttribute("data-id");
        const clickedProduct = products.find((p) => p.id === clickedId);

        if (clickedProduct) {
            const query = new URLSearchParams({
                id: clickedProduct.id,
                name: clickedProduct.name,
                price: clickedProduct.price,
                image: clickedProduct.image,
            });
            window.location.href = `product.html?${query.toString()}`;
        }
    }
});
