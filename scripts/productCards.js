

// Crea una funcion para que retorne las tarjetas de producto que estaban en HTML
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

printCards(products, "products");

/*
// Obtener el id products del HTML
const productsSelector = document.getElementById("products");

// Define la variable con las tarjetas de producto que estaban en HTML
let productsTemplate = "";

for (const element of products) {
  productsTemplate = productsTemplate + createCard(element);
}

// Colocar dentro del elemento id la variable con los elementos HTML
productsSelector.innerHTML = productsTemplate;
*/

// Define la variable productsSelector con las tarjetas de producto que estaban en HTML
/*let productsTemplate =`
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>
        <a class="product-card" href="./details.html">
          <img
            class="product-img"
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div class="product-info">
            <span class="product-title">iPad Pro 12.9</span>
            <span class="product-description">Silver</span>
            <div class="product-price-block">
              <span class="product-price">900000</span>
              <span class="product-discount">50% Off</span>
            </div>
            <div class="product-tax-policy">
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </a>`;*/



