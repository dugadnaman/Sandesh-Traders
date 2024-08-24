// Initialize cart
let cart = [];

// Function to add item to cart
function addToCart(name, price) {
    cart.push({name, price});
    updateCartCount();
    alert(`${name} added to cart!`);
}

// Function to update cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to calculate total
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}

// Function to display cart
function displayCart() {
    let cartContent = cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('');
    let total = calculateTotal();
    alert(`Your Cart:\n${cartContent}\n\nTotal: $${total}`);
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart buttons
    let addToCartButtons = document.querySelectorAll('.buy-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            let card = this.closest('.product-card');
            let name = card.querySelector('h3').textContent;
            let price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
            addToCart(name, price);
        });
    });

    // Cart icon
    document.getElementById('cart-icon').addEventListener('click', function(e) {
        e.preventDefault();
        displayCart();
    });
});