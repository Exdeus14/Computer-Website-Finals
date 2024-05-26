<?php
include('includes/db.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <h1>Your Cart</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.php">Products</a></li>
                <li><a href="contact.php">Contact</a></li>
                <li><a href="cart.php">Cart</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Cart Items</h2>
            <div id="cart-items"></div>
            <button id="checkout">Checkout</button>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Computer Store</p>
    </footer>
    <script src="js/cart_display.js"></script>
</body>
</html>
