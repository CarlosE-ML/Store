const comprar = () => {
  let totalApagar = 0;
  const cliente = prompt("¿Nombre del cliente?");
  for (let index = 1; index <= 3; index++) {
  const nombre = prompt("¿Qué producto desea llevar?");
  const cantidad = Number(prompt("¿Cuántas unidades?"));
  const precio = Number(prompt("¿Cuánto sale cada unidad?"));
  const subtotal = cantidad * precio;
  totalApagar = totalApagar + subtotal;
  }
  console.log("Cliente " + cliente + " lleva en total " + totalApagar);
  return totalApagar;
  };
  
  const total1 = comprar();
  const total2 = comprar(); //7
  const total3 = comprar(); //12
  const total = total1 + total2 + total3;
  
  console.log("Suma de los 3 clientes " + total);


// let totalApagar = 0;
// let llevar = Number(prompt("¿Cuántos productos desea llevar?"));

// for (let index = 1; index <= llevar; index++) {
//   const nombre = prompt("¿Qué producto desea llevar?");
//   const cantidad = Number(prompt("¿Cuántas unidades?"));
//   const precio = Number(prompt("¿Cuánto sale cada unidad?"));
//   const subtotal = cantidad * precio;
//   totalApagar = totalApagar + subtotal;
//   console.log("Total del producto " + nombre + " es " + subtotal);
// }
// console.log("Total a pagar es " + totalApagar);
// alert(totalApagar);
