const productos = [
    {id: 1, nombre: "CAÑO REDONDO", precio: 569.86},
    {id: 2, nombre: "CAÑO RECTANGULAR", precio: 650.33},
    {id: 3, nombre: "CURVA ARTICULADA", precio: 500.25},
    {id: 4, nombre: "CURVA CORRUGADA", precio: 368.78},
    {id: 5, nombre: "SOMBRERO DOBLE ARO", precio: 597},
    {id: 6, nombre: "SOMBRERO VENTURI", precio: 1625.83},
    {id: 7, nombre: "SOMBRERO TIPO H", precio: 1102.33},
    {id: 8, nombre: "EOLICO DE ALUMINIO", precio: 2405},
]

//BUSQUEDA DE UNO O MAS PRODUCTOS E INGRESO EN CARRITO

const iva = valor => valor * 1.21;
const carrito = [];
let entrada = prompt("Ingrese el nombre del producto que desea comprar o escriba ESC para salir:\nCAÑO REDONDO\nCAÑO RECTANGULAR\nCURVA ARTICULADA\nCURVA CORRUGADA\nSOMBRERO DOBLE ARO\nSOMBRERO VENTURI\nSOMBRERO TIPO H\nEOLICO DE ALUMINIO").toUpperCase()

while (entrada != "ESC"){
    let producto = productos.find(item => item.nombre === entrada);
    carrito.push(producto);
    entrada = prompt("Ingrese el nombre del producto que desea comprar o escriba ESC para salir:\nCAÑO REDONDO\nCAÑO RECTANGULAR\nCURVA ARTICULADA\nCURVA CORRUGADA\nSOMBRERO DOBLE ARO\nSOMBRERO VENTURI\nSOMBRERO TIPO H\nEOLICO DE ALUMINIO").toUpperCase()
}

for(item of carrito){
    alert("Usted ingreso el producto " + item.nombre + " y su precio con iva incluido es " + iva(item.precio).toFixed(2))
}

//SUMA DEL PRECIO DE LOS PRODUCTOS SELECCIONADOS

let total = carrito.reduce((acumulador, elemento) => acumulador + iva(elemento.precio), 0);

alert("El precio total es " + total.toFixed(2));

