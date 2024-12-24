// Cart Data
// Filter menu based on category
function filterMenu(category) {
    const allSections = document.querySelectorAll('.menu-category');
    
    if (category === 'all') {
      allSections.forEach(section => section.style.display = 'block');
    } else {
      allSections.forEach(section => {
        if (section.getAttribute('data-category') === category) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    }
  }
  
  // Display details of a dish
  function viewDetails(dishName) {
    alert(`You selected: ${dishName}\nEnjoy your meal!`);
  }
  
let cart = [];

// Add item to the cart
function addToCart(dishName, price) {
  // Create a new item object
  const item = { name: dishName, price: price };
  cart.push(item);
  updateCart();
}

// Update the cart display
function updateCart() {
  // Update the cart count
  document.getElementById('cart-count').innerText = cart.length;

  // Update cart total
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cart-total').innerText = total.toFixed(2);

  // Update cart items in the modal
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
  });
}

// Toggle cart visibility
function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Checkout (for demo purposes, just shows an alert)
function checkout() {
  alert('Thank you for your order! Total: $' + document.getElementById('cart-total').innerText);
  cart = [];  // Empty the cart
  updateCart();  // Refresh the cart display
}
