//Obtiene el id del producto
//Variable que guarda la ubicación actual
const query = location.search;
//Variable que instancia la clase URLSearchParams
const params = new URLSearchParams(query);
const id = params.get("id");
console.log(id);

/**
 * Renderizar dinámicamente la vista de detalle
 */

function printDetails(id) {
    const product = products.find((each) => each.id == id);
    const detailsTemplate = `
    <section class="product-images-block">
    <div class="product-images">
      ${product.image.map((each) => `<img class="mini-img" src="${each}" alt="${product.title}" onclick="changeMini(event)" />`).join('')}
      </div>
      <img
        class="big-img"
        id="big-img"
        src="${product.image}"
        alt="MacBook Pro 13'4"
      />
  </section>
  <div class="product-description-block">
    <h1 class="product-title">${product.title}</h1>
    <form class="product-selector">
      <fieldset class="product-fieldset">
        <label class="product-label" for="color">Color</label>
        <select
          class="product-select"
          type="text"
          placeholder="Selecciona un color"
          id="color">
          ${product.color.map(each => `<option value="${each}">${each}</option>`).join('')}
        </select>
      </fieldset>
    </form>
    <div class="product-description">
      <span class="product-label">Descripción</span>
      <p>
        ${product.description}
      </p>
    </div>
  </div>
  <div class="product-checkout-block">
    <div class="checkout-container">
      <span class="checkout-total-label">Total:</span>
      <h2 id="price" class="checkout-total-price">$${product.price-(product.price*(product.discount*1/100))}</h2>
      <p class="checkout-description">
        ${product.tax} Podés recuperar AR$ 50711 haciendo la solicitud en AFIP.
      </p>
      <ul class="checkout-policy-list">
        <li>
          <span class="policy-icon"
            ><img src="./assets/truck.png" alt="Truck"
          /></span>
          <span class="policy-desc"
            >Agrega el producto al carrito para conocer los costos de
            envío</span
          >
        </li>
        <li>
          <span class="policy-icon"
            ><img src="./assets/plane.png" alt="Plane"
          /></span>
          <span class="policy-desc"
            >Recibí aproximadamente entre 10 y 15 días hábiles,
            seleccionando envío normal</span
          >
        </li>
      </ul>
      <div class="checkout-process">
        <div class="top">
          <input type="number" min="1" value="1" onclick="changePrice(event)"/>
          <button type="button" class="cart-btn" onclick="saveProduct(${product.id})">
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  </div>
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
 }


// filtre el array con todos los productos con los productos cuyo nombre incluya el texto capturado
let offerProducts = products.filter(product => product.onsale == true);

// Crea una funcion para que retorne las tarjetas de producto que estaban en HTML en oferta
function createCard(product) {
  return `
    <a href="./details.html?id=${product.id}" class="product-card">
    <img class="product-img" src="${product.image[0]}" alt="${product.id}">
    <div class="product-info">
    <span class="product-title">${product.title}</span>
    <span class="product-description">${product.color[0]}</span>
    <div class="product-price-block">
    <span class="product-price">${product.price}</span>
    <span class="product-discount">${product.discount}% off</span></div>
    <div class="product-tax-policy">${product.tax}</div></div></a>
    `;
}

function printCards(arrayOfProducts, idSelector) {
let productsTemplate = "";
for (const element of arrayOfProducts) {
  productsTemplate = productsTemplate + createCard(element);
}
const productsSelector = document.getElementById(idSelector);
productsSelector.innerHTML = productsTemplate;
}

printCards(offerProducts, "product-container");

/**
 * Definir función para cambiar imagen
 */
function changeMini(event){
  //Traer el src de la imagen seleccionada
  const selectedSrc = event.target.src;
  //Traer el selector de la imagen grande
  const bigSelector = document.querySelector("#big-img");
  //Cambiar el src de la imagen grande
  bigSelector.src = selectedSrc;
}

/**
 * Definir funcion para cambiar precio
 */
function changePrice(event){
  //traer la cantidad del input de tipo number
  const quantity = event.target.value;
  //traer el producto
  const product = products.find(product => product.id == id);
  //traer el selector del precio
  const priceSelector = document.querySelector("#price");
  //cambiar el precio total
  priceSelector.innerHTML = `$${quantity * (product.price-(product.price*(product.discount*1/100)))}`;
}

/**
 * Definir función para añadir al carrito
 */
function saveProduct(id) {
  //traer el producto
  const found = products.find(each => each.id == id);
  //defina un objeto con las propiedades especificadas en la compra
  const objectProduct = {
    id: found.id,
    title: found.title,
    //Obtener el valor del precio calculado y escrito en el h2 (se registra sin el $ por slice)
    //price: document.querySelector("#price").innerHTML.slice(1),
    price: found.price-(found.price*(found.discount*1/100)),
    //Obtiene el color que selecciona y lo mismo con la cantidad
    color: document.querySelector("#color").value,
    image: found.image[0],
    quantity: document.querySelector("input").value
  };
  //let cart = [];
  // Verificar si la clave 'cart' existe en localStorage
  if (localStorage.getItem('cart')) {
    // Si existe, obtener el contenido y convertirlo de nuevo en un array
    let cart = JSON.parse(localStorage.getItem('cart'));
    // Agregar el nuevo producto al array
    cart.push(objectProduct);
    // Guardar el array actualizado en el storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    // Si no existe, crear un nuevo array con el producto y guardarlo en el storage
    let cart = [objectProduct];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  // Obtener los datos almacenados en localStorage para la clave "cart"
  var cartData = localStorage.getItem("cart");
  // Imprimir el storage para verificar que funciona
  console.log(cartData);
}

printDetails(id);