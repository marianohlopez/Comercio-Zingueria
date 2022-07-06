class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const iva = valor => valor * 1.21;

const productos = [];

let nombre = prompt("Ingrese el nombre del producto, o escriba esc para salir").toUpperCase(); 

while(nombre != "ESC"){
    let precio = Number(prompt("Ingrese el costo del producto")); 
    productos.push(new Producto(nombre, precio));
    nombre = prompt("Ingrese el nombre del producto, o escriba esc para salir").toUpperCase();
}

console.log(productos);

for(item of productos){
    alert("Usted ingreso el producto " + item.nombre + " y su precio con iva incluido es " + iva(item.precio))
}



/* const iva = x => x * 0.21;
let costo = Number(prompt("Ingrese el costo del producto, o una letra para salir")); 

while(Number(costo)){
    let porcentaje = iva(costo);
    alert(`el iva del producto es ${porcentaje}`);
    let precioFinal = costo + porcentaje;
    alert(`El precio final del producto es ${precioFinal}`);
    costo = Number(prompt("Ingrese el costo del producto, o una letra para salir"));
}
alert("Gracias, vuelva pronto"); */


