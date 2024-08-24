// add to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      image: button.closest('.products').querySelector('.product-img img').src,
      name: button.closest('.products').querySelector('.menu-txt-cont h3').textContent,
      price: button.closest('.products').querySelector('.menu-rev-con span').textContent.trim()
    };
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = 'cart.html';
  });
});

// // cart display
// const cartItemsList = document.getElementById('cartItems');
// const clearCartButton = document.getElementById('clear-cart');

// const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// storedCartItems.forEach(item => {
//   const listItem = document.createElement('ul');
//   listItem.innerHTML = `
//     <img src="${item.image}">
//     <h3>${item.name}</h3>
    
//   `;
//   cartItemsList.appendChild(listItem);
// });

// clearCartButton.addEventListener('click', () => {
//   localStorage.removeItem('cartItems');
//   cartItemsList.innerHTML = '';
// });

// Retrieve cart items from localStorage
const cartItemsList = document.getElementById('cartItems');
const clearCartButton = document.getElementById('clear-cart');
let storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to display cart items
function displayCartItems() {
    cartItemsList.innerHTML = ''; // Clear the cart item list

    storedCartItems.forEach((item, index) => {
        const listItem = document.createElement('ul');
        listItem.innerHTML = `
            <img src="${item.image}" style="width: 40%; height: 40%;margin-left:90px;">
            <h3 style="margin-left:215px;">${item.name}</h3>
            <p>${item.price}</p>
            <button class="remove-item" data-index="${index}" style="background-color: red; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;margin-left:130px;margin-bottom:20px;">Remove</button>
        `;
        cartItemsList.appendChild(listItem);
    });

    attachRemoveItemEvents(); // Attach event listeners to remove buttons
}

// Function to attach event listeners to "Remove" buttons
function attachRemoveItemEvents() {
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemIndex = e.target.getAttribute('data-index');
            removeCartItem(itemIndex);
        });
    });
}

// Function to remove an individual item from the cart
function removeCartItem(index) {
    storedCartItems.splice(index, 1); // Remove the item from the array
    localStorage.setItem('cartItems', JSON.stringify(storedCartItems)); // Update localStorage
    displayCartItems(); // Refresh the cart display
}

// Event listener for the "Clear Cart" button to remove all items
clearCartButton.addEventListener('click', () => {
    localStorage.removeItem('cartItems'); // Clear all items from localStorage
    storedCartItems = []; // Clear the local array
    cartItemsList.innerHTML = ''; // Clear the cart display
});

// Initially display the cart items on page load
displayCartItems();