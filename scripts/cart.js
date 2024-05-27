//Array con los productos que estan en el carrito
let cartproducts = JSON.parse(localStorage.getItem("cart"));
console.log(cartproducts);

/**
 * Renderizar dinámicamente los productos del carrito
 */
//Definir funcion printCart
function printCart() {
  //Traer el selector del contenedor de productos
  const container = document.querySelector("#productscart");
  //Limpiar el contenedor
  container.innerHTML = "";
  //Consulta si no hay productos en el localstorage
  if (cartproducts === null || cartproducts.length === 0) {
    container.innerHTML = `
        <article class="product-cart">
            <strong style='width: 100%; text-align: center'>No hay productos en el carrito</strong>
        </article>
            `;
  } else {
    //Iterar sobre los productos del carrito
    cartproducts.forEach((product) => {
      //Crear un div que contenga la información del producto
      const productDiv = document.createElement("article");
      //Agregar la clase product al div
      productDiv.classList.add("product-cart");
      //Agregar el contenido al div
      productDiv.innerHTML = `
    <img class="product-img" src="${product.image}">
    <div class="product-details">
      <strong class="title-product">${product.title}</strong>
      <div class="color-product">${product.color}</div>
      <!--Mostrar la cantidad a comprar y establecer una variable ID con el id y color-->
      <input class="product-input" type="number" name="quantity" min="1" 
      id="${product.id}_${product.color}" value="${product.quantity}" 
      onchange="changeQuantity(event)">
    </div>
    <div class="product-price">
      <span>Precio U. $ ${product.price}.00 <br></span>
      <span class="discount-product"><strong >Descuento ${product.discount}% <br></strong></span>
      ---------------- <br>
        <strong>Subtotal $ ${
       (product.price - product.price * ((product.discount * 1) / 100)) *
       product.quantity
     }.00</strong>
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
  let desTax = "";

  if (cartproducts !== null) {
    //Iterar sobre los productos del carrito
    cartproducts.forEach((product) => {
      //Sumar el precio de cada producto al total
      totalPrice =
        totalPrice +
        (product.price - product.price * ((product.discount * 1) / 100)) *
          product.quantity;
      desTax = product.tax;
    });
  }

  //Traer el selector del contenedor del total
  const totalContainer = document.querySelector("#total");
  //Limpiar el contenedor
  totalContainer.innerHTML = "";
  //Agregar el html
  totalContainer.innerHTML = `
    <div class="cart-resume">
      <div class="cart-data">
      <h2 class="cart-title"><span>Resumen</span><span>del</span><span>pedido</span></h2>
        <div class="cart-total">
          <h3>Total</h3>
          <strong class="cart-price">USD $
          ${totalPrice !== null || totalPrice != 0 ? totalPrice : 0}
          </strong>
        </div>
        <small class="cart-tax">${desTax}</small>
      </div>
      <button class="cart-btn" id="buy" type="button" onclick="checkout()">COMPRAR</button>
    </div>
    `;
  //Tambien funciona colocando el EventListener
  //const buySelector = document.getElementById("buy");
  //buySelector.addEventListener("click", checkout);
}

function changeQuantity(event) {
  //Traer el id del producto (id_color) y separarlo por el _
  const id = event.target.id.split("_");
  //Traer el valor de la cantidad
  const quantity = event.target.value;
  //Iterar sobre los productos del carrito
  cartproducts.forEach((product) => {
    //Verificar si el id del producto es igual al id del producto seleccionado
    //Validamos el id y el color
    if (product.id == id[0] && product.color == id[1]) {
      //Cambiar la cantidad del producto
      product.quantity = quantity;
      //Variable con el subtotal para mostrar al cambiar
      let subtotal =
        (product.price - product.price * ((product.discount * 1) / 100)) *
        product.quantity;
      //Mensaje de alerta de cambio de cantidad y subtotal establecido
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Cantidad actualizada",
        text: `El subtotal del producto es $${subtotal}.00`,
        showConfirmButton: false,
        //Cerrarse luego de 3 milisegundos
        timer: 3000,
      });
    }
  });
  //Guardar el carrito en localStorage
  localStorage.setItem("cart", JSON.stringify(cartproducts));
  printCart();
  printTotal();
}

// Función para finalizar la compra
function checkout() {
  Swal.fire({
    title: "¿Confirmar compra?",
    text: "¿Estás seguro de que deseas finalizar la compra?",
    icon: "question",
    //Por defecto el confirmbutton esta habilitado
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, comprar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      // Vaciar el carrito
      cartproducts = [];
      localStorage.setItem("cart", JSON.stringify(cartproducts));
      printCart();
      printTotal();
      // Mostrar una alerta indicando que la compra se realizó con éxito
      Swal.fire({
        title: "Compra realizada",
        text: "Tu compra se ha realizado con éxito.",
        icon: "success",
        confirmButtonText: "Entendido",
      });
    }
  });
}

printCart();
printTotal();
