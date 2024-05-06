function captureText(event) {
    //Capturar el valor que se encribe en la caja de texto
  let text = event.target.value;
  //filtre el array con todos los productos con los productos cuyo nombre incluya el texto capturado
  let filteredProducts = products.filter(product => product.title.toLowerCase().includes(text.toLowerCase()));

  //actualice la vista con una nueva impresión de las tarjetas
  printCards(filteredProducts, "products");
  //console.log(text);
}

//Obtener con el id la caja de texto
searchSelector = document.querySelector("#search");
//Realizar la funcion con el evento KeyUp
//searchSelector.addEventListener("keyup", captureText);

searchSelector.addEventListener("keyup", (event) => captureText(event));
