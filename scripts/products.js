class Product {
  constructor(id, title, price, stock, image, onsale, supplier, color, description, discount, tax) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.image = image;
    this.onsale = onsale;
    //Atributo privado
    this._supplier = supplier;
    this.color=color;
    this.description=description;
    this.discount=discount;
    this.tax=tax;
  }
  //Metodo gey y set del atributo privado
  get Supplier() {
    return this._supplier;
  }
  set Supplier(newName) {
    this._supplier = newName;
  }

  //define metodo para que cumpla los reque.
  sellUnits(units) {
    if (this.stock < units) {
      //this.stock;
      console.log("No hay stock");
      return;
    }
    this.stock = this.stock - units;
  }
}

const images = ["https://i.postimg.cc/kX8PKZpq/ipad2.jpg","./assets/mock1.jpg", "./assets/mock2.jpg","https://i.postimg.cc/2ymFtsTn/kindle2.jpg","./assets/mock1.jpg", "./assets/mock2.jpg"];
const taxes = "Incluye impuesto País y percepción AFIP.";
const descriptions = "Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage, this laptop provides the performance and storage capacity needed for demanding tasks. The sleek design in silver and space gray adds a touch of sophistication. The high-resolution Retina display brings your visuals to life, whether you're editing photos, creating videos, or simply browsing the web. With the latest technology and a lightweight build, the MacBook Pro 13'4 is the perfect companion for professionals and creative individuals alike.";

const colors = ["Silver", "Black", "White", "Sky blue"];
const prod1 = new Product(1,"iPad Ultra 12.9",900000,2,images.slice(0,3),false,"Supplier1",colors.slice(0,3),descriptions,"0",taxes);
const prod2 = new Product(2,"iPad Pro 12.9",800000,20,images.slice(0,3),true,"Supplier2",colors.slice(0,2),descriptions,"45",taxes);
const prod3 = new Product(3,"iPad Ultra 12.9",900000,10,images.slice(0,3),false,"Supplier3",colors.slice(1,3),descriptions,"0",taxes);
const prod4 = new Product(4,"iPad 12.9",700000,2,images.slice(0,3),true,"Supplier4",colors.slice(2),descriptions,"60",taxes);
const prod5 = new Product(5,"iPad Ultra 12.9",900000,12,images.slice(0,3),false,"Supplier5",colors.slice(0,2),descriptions,"0",taxes);
const prod6 = new Product(6,"iPad Lite 12.9",600000,19,images.slice(0,3),true,"Supplier6",colors.slice(0,3),descriptions,"70",taxes);
const prod7 = new Product(7,"iPad 12.9",700000,2,images.slice(3),false,"Supplier4",colors.slice(1),descriptions,"45",taxes);
const prod8 = new Product(8,"iPad Ultra 12.9",900000,12,images.slice(3),false,"Supplier5",colors.slice(2,3),descriptions,"5",taxes);
const prod9 = new Product(9,"iPad Lite 12.9",600000,19,images.slice(3),true,"Supplier6",colors.slice(0,3),descriptions,"50",taxes);

const products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9];
//const offerProducts = [prod7, prod8, prod9];

//console.log(colors.slice(1));

/*class Product {
    constructor(id, title, price, stock, image, onsale, supplier, color, description) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.stock = stock;
      this.image = image;
      this.onsale = onsale;
      //Atributo privado
      this._supplier = supplier;
      this.color=color;
      this.description=description;
    }
    //Metodo gey y set del atributo privado
    get Supplier() {
      return this._supplier;
    }
    set Supplier(newName) {
      this._supplier = newName;
    }

    //define metodo para que cumpla los reque.
    sellUnits(units) {
      if (this.stock < units) {
        //this.stock;
        console.log("No hay stock");
        return;
      }
      this.stock = this.stock - units;
    }
  }
const colors = ["azul", "rojo", "amarillo", "verde", "celeste", "blanco"];
  
const prod1 = new Product(1,"Titulo1",5.6,2,"Imagen prod1",false,"Supplier1",colors[1],"Descripcion1");
const prod2 = new Product(2,"Titulo2",23.5,20,"Imagen prod2",false,"Supplier2",colors[5],"Descripcion2");
const prod3 = new Product(3,"Titulo3",6.2,10,"Imagen prod3",true,"Supplier3",colors[4],"Descripcion3");
const prod4 = new Product(4,"Titulo4",8.2,2,"Imagen prod4",false,"Supplier4",colors[2],"Descripcion4");
const prod5 = new Product(5,"Titulo5",7.8,12,"Imagen prod5",false,"Supplier5",colors[0],"Descripcion5");
const prod6 = new Product(6,"Titulo6",3.8,19,"Imagen prod6",false,"Supplier6",colors[3],"Descripcion6");

  
  console.log(prod4._supplier);
  prod4.Supplier = "SupplierGetSet";
  console.log(prod4);
  console.log(prod4._supplier);
  prod4.setSupplier = "SupplierSet";
  console.log(prod4);
  console.log(prod4._supplier);
  console.log(prod2);
  console.log(prod2.title);
  console.log(prod3);
  console.log(prod3.onsale);
  console.log(prod5);
  console.log(prod5.stock);
  prod5.sellUnits(50);

const products = [prod1, prod2, prod3, prod4];

console.log(products[5]);
  //Mostrar el ultimo
console.log(products[products.length-1]);

  //Agregar al inicio del array
products.unshift(prod5);
  //Agregar al final del array
products.push(prod6);

  //Eliminar el inicio del array
products.shift(prod5);
  //Eliminar el final del array
products.pop();  


const images = ["Aprod1", "Aprod2", "Bprod3", "Cprod4"];
//console.log(images);

console.log(products);




//Para mostrar cada elemento de un arreglo con For
for (let cadaElemento of images){
  console.log(cadaElemento);
}

//Para mostrar cada elemento de un arreglo con ForEach
images.forEach((cadaElemento) =>{ console.log(cadaElemento)});

const nombreTransformado = images.map((cadaElemento)=>{
  cadaElemento=cadaElemento.toUpperCase();
  cadaElemento="Imagen del "+cadaElemento;
  return cadaElemento;
});

console.log(nombreTransformado);

//Para filtrar contenido dentro de un array
const filtrado = images.filter((cadaElemento)=>cadaElemento.includes("Apro"));
console.log(filtrado);

// const producto1 = {
//     nombre: "celular",
//     precio: 100000,
//     stock: 2
//     };

//     producto1.id = "id123";
// producto1.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
// console.log(producto1);

*/
