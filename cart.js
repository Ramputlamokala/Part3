// JavaScript to manage cart items, update total, and handle item removal

document.addEventListener('DOMContentLoaded', () => {

    // Get all the "Remove" buttons in the cart
    const removeButtons = document.querySelectorAll('.cart-item button');
    const totalPriceElement = document.getElementById('total-price');
    let total = 2490; // Initial total for all items in the cart

    // Function to update the total price displayed on the page
    function updateTotalPrice() {
        totalPriceElement.textContent = `TOTAL: R${total}`;
    }

    // Function to handle item removal
    function handleRemoveButtonClick(event) {
        // Find the parent cart item (the div that holds the product info)
        const cartItem = event.target.closest('.cart-item');
        
        // Get the price of the item to subtract it from the total
        const itemPrice = parseInt(cartItem.querySelector('p strong').textContent.replace(' R', '').trim());
        
        // Update the total price
        total -= itemPrice;
        
        // Remove the cart item from the DOM
        cartItem.remove();
        
        // Update the displayed total
        updateTotalPrice();
    }

    // Attach click event listeners to all "Remove" buttons
    removeButtons.forEach(button => {
        button.addEventListener('click', handleRemoveButtonClick);
    });

    // Checkout button functionality (for now, just logs a message)
    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', () => {
        if (total === 0) {
            alert("Your cart is empty! Please add items before checking out.");
        } else {
            alert("Proceeding to checkout...");
            console.log("Checkout process initiated. Total:", total);
            // For now, we just log the total. Here you would handle the checkout process.
        }
    });

    // Initialize the total price on page load
    updateTotalPrice();

});