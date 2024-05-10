let cartproducts = JSON.parse(localStorage.getItem('cart'));
console.log(cartproducts);

/**
 * Renderizar dinámicamente los productos del carrito
 */
//Definir funcion printCart
function printCart() {
    //Traer el selector del contenedor de productos
    const container = document.querySelector(".container");
    //Limpiar el contenedor
    container.innerHTML = "";
    //Consulta si no hay productos en el localstorage
    if (cartproducts === null || cartproducts.length === 0) {
        container.innerHTML = `
        <article id="cartproducts" class="product-cart">
            <div class="title-product">No hay productos en el carrito</div>
        </article>
            `;
    } else {
        
        //Iterar sobre los productos del carrito
        cartproducts.forEach(product => {
            //Crear un div que contenga la información del producto
            const productDiv = document.createElement("article");
            //Agregar la clase product al div
            productDiv.classList.add("product-cart");
            //Agregar el contenido al div
            productDiv.innerHTML = `
    <img class="product-img" src="${product.image}">
    <div class="product-details">
      <div class="title-product">${product.title}</div>
      <div class="color-product">${product.color}</div>
      <!--Mostrar la cantidad a comprar-->
      <input class="product-input" type="number" name="quantity" min="1" id="${product.id}_${product.color}" value="${product.quantity}" onchange="changeQuantity(event)">
    </div>
    <div class="product-price">
        P.U. $ ${product.price}.00 <br>
        --------------- <br>
     Subtotal $ ${product.price * product.quantity}.00
    </div>
    `;
            //Agregar el div al contenedor
            container.appendChild(productDiv);
        });
    }
}

/**
 * Renderizar el total a pagar
 */
//Definir función printTotal
function printTotal() {
    //Definir variable para almacenar el precio total
    let totalPrice = 0;

    if (cartproducts !== null ) {

        //Iterar sobre los productos del carrito
        cartproducts.forEach(product => {
            //Sumar el precio de cada producto al total
            totalPrice = totalPrice + (product.price * product.quantity);
        });
    }

    //Traer el selector del contenedor del total
    const totalContainer = document.querySelector("#total");
    //Limpiar el contenedor
    totalContainer.innerHTML = "";
    //Agregar el html
    totalContainer.innerHTML = `
    <h1 class="cart-title">Resumen del pedido</h1>
        <p class="cart-total">Total        USD $${(totalPrice !== null || totalPrice !=0) ? totalPrice : 0 }</p>
        <p class="cart-tax">Taxes</p>
        <button class="cart-btn" id="buy" type="button">COMPRAR</button>
    `;
    const buySelector = document.getElementById("buy");

    buySelector.addEventListener("click", () => {
        //Borrar los productos del carrito
        localStorage.removeItem('cart');
        //Redirigir a la página de inicio
        window.location.href = "./cart.html";
    });
}

printCart();
printTotal();