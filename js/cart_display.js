document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalPrice = 0;

        cart.forEach(item => {
            fetch(`get_product.php?id=${item.id}`)
                .then(response => response.json())
                .then(product => {
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('cart-item');
                    itemElement.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>Price: ₱${product.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                    `;
                    cartItemsContainer.appendChild(itemElement);

                    totalPrice += product.price * item.quantity;
                    updateTotalPrice(totalPrice);
                });
        });
    }

    function updateTotalPrice(price) {
        let totalPriceElement = document.getElementById('total-price');
        if (!totalPriceElement) {
            totalPriceElement = document.createElement('div');
            totalPriceElement.id = 'total-price';
            cartItemsContainer.appendChild(totalPriceElement);
        }
        totalPriceElement.innerHTML = `<h3>Total Price: ₱${price.toFixed(2)}</h3>`;
    }

    displayCartItems();

    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        localStorage.removeItem('cart');
        alert('Checkout complete!');
        window.location.href = 'index.html';
    });
});
