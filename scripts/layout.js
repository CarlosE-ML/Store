var navSelector = document.getElementById("navbar");
console.log(navSelector);

const options = [
  { title: "Ofertas", linkTo: "./index.html", opts:["Laptops", "Audio", "Auriculares"]},
  { title: "Como comprar", linkTo: "./index.html", opts:["Formas de pago", "Envio", "Devoluciones"]},
  { title: "Costos y tarifas", linkTo: "./index.html", opts:["Impuestos", "Facturacion"]},
  { title: "Mis pedidos", linkTo: "./index.html", opts:["Pedir nuevamente", "Lista de deseos"]},
  { title: "Garantia", linkTo: "./index.html", opts:[]}
];

for (let option of options) {
  let anchor = document.createElement("li");
  anchor.className = "nav-li";
  let a = document.createElement("a");
  a.className = "nav-a";
  //anchor.style.color="white";
  //anchor.style.textDecoration="none";
  //anchor.style.fontWeight="bold";
  //anchor.className = "nav-li";
  a.textContent = option.title;
  a.href = option.linkTo;
  anchor.appendChild(a);
  navSelector.appendChild(anchor);
} 

var footerSelector = document.querySelector("#footer");
console.log(footerSelector);

// for (let option of options) {
//   const anchor = document.createElement("a");
//   anchor.style.color="white";
//   anchor.style.textDecoration="none";
//   anchor.style.fontWeight="bold";
//   anchor.className = "footer-button";
//   anchor.textContent = option.title;
//   anchor.href = option.linkTo;
//   footerSelector.appendChild(anchor);
// } 

//iteracion con un for of
for (let option of options) {
  //crear un elemento
  let anchor = document.createElement("ul");
  //asignarle un nombre de clase
  anchor.className = "footer-ul";
  //agregar un il
  let li = document.createElement("li");
  //asignarle una clase
  li.className = "footer-main-item";
  //crear una etiqueta a
  let a = document.createElement("a");
  //asignarle un nombre de clase
  a.className = "footer-a";
  //asignarle un texto
  a.textContent = option.title;
  //asignarle un href
  a.href = option.linkTo;
  
  //agregar al li
  li.appendChild(a);
  //agregar a la ul
  anchor.appendChild(li);
  
  //iteracion con un for of
  for (let opt of option.opts) {
  //crear un li
  let li = document.createElement("li");
  //asignarle una clase
  li.className = "footer-li";
  //crear una etiqueta a
  let a = document.createElement("a");
  //asignarle un nombre de clase
  a.className = "footer-a";
  //asignarle un texto
  a.textContent = opt;
  //agregar al li
  li.appendChild(a);
  //agregar a la ul
  anchor.appendChild(li);
  }
  
  //agregar un hijo
  footerSelector.appendChild(anchor);
  }