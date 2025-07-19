// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
// Get the element that displays the item count
const itemCountSpan = document.getElementById('item-count');

let cartItemCount = 0; // Initialize cart count

// Function to update the displayed cart count
function updateCartCount() {
    itemCountSpan.textContent = cartItemCount;
}

// Add a click event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Increment the cart count
        cartItemCount++;
        // Update the display
        updateCartCount();

        // Optional: Provide visual feedback to the user
        button.textContent = 'Added!';
        button.style.backgroundColor = '#28a745'; // Darker green
        button.disabled = true; // Disable button after adding

        // Reset button after a short delay (e.g., 2 seconds)
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '#4CAF50'; // Original green
            button.disabled = false;
        }, 2000);

        // In a real application, you'd also:
        // 1. Get the product ID: const productId = button.dataset.productId;
        // 2. Add the product to a cart array or local storage.
        // 3. Potentially send data to a server.
        console.log(`Product ID "${button.dataset.productId}" added to cart.`);
    });
});

// Initialize the count on page load
updateCartCount();