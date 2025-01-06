

// Fetch data from Fake Store API
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to create a card element
function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="card-image">
    <div class="card-content">
      <h3 class="card-title">${product.title}</h3>
      <p class="card-description">${product.description.substring(0, 100)}...</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
    </div>
  `;

  return card;
}

// Function to display loading spinner
function showLoading() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading products...</p>
    </div>
  `;
}

// Function to display products after data is loaded
function displayProducts(products) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear loading spinner

  if (products.length === 0) {
    cardContainer.innerHTML = "<p>No products available.</p>";
    return;
  }

  products.forEach((product) => {
    const card = createCard(product);
    cardContainer.appendChild(card);
  });

  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id, products));
  });
}

function addToCart(productId, products) {
  const selectedProduct = products.find((product) => product.id == productId);

  if (!selectedProduct) {
    alert("Product not found");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.some((item) => item.id === selectedProduct.id);

  if (exists) {
    alert("Product is already in the cart!");
    return;
  }

  
  cart.push(selectedProduct);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
  window.location.href = "cart.html";
}


async function init() {
  showLoading(); 
  const products = await fetchProducts(); 
  setTimeout(() => displayProducts(products), 1000); 
}


init();
