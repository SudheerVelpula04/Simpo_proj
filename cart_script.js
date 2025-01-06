// Display cart items on the cart page
function displayCartItems() {
    const cartContainer = document.getElementById("cart-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }
  
    cartContainer.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-image">
          <div>
            <h3>${item.title}</h3>
            <p>Price: $${item.price}</p>
          </div>
        </div>
      `
      )
      .join("");
  }
  
  function handleFormSubmission(event) {
    event.preventDefault(); 
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before submitting.");
      return;
    }
  
    const orderData = {
      client: { name, email, address },
      cart,
    };
  
    console.log("Order Data:", JSON.stringify(orderData));
  
    localStorage.setItem("orderData", JSON.stringify(orderData));
  
    localStorage.removeItem("cart");
    alert("Order submitted successfully!");
 
    event.target.reset();
    window.location.href = "success.html"; // Redirect to a success page (optional)
  }
  
 
  document.getElementById("checkout-form").addEventListener("submit", handleFormSubmission);
  document.addEventListener("DOMContentLoaded", displayCartItems);
  