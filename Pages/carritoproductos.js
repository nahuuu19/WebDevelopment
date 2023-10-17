document.addEventListener("DOMContentLoaded", function () {
    const productTable = document.getElementById("product-table");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Función para agregar un producto al carrito
    function addToCart(productName, productPrice) {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${productName} - $${productPrice}`;
        cartItems.appendChild(cartItem);

        const total = parseFloat(cartTotal.textContent) + parseFloat(productPrice);
        cartTotal.textContent = total.toFixed(2);
    }

    // Ejemplo: Agregar productos a la tabla
    const products = [
        { name: "Producto 1", price: 10.00 },
        { name: "Producto 2", price: 15.00 },
        { name: "Producto 3", price: 20.00 },
    ];

    products.forEach(product => {
        const row = productTable.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.textContent = product.name;
        cell2.textContent = `$${product.price.toFixed(2)}`;
        cell3.innerHTML = `<button onclick="addToCart('${product.name}', ${product.price})">Agregar al Carrito</button>`;
    });
});
