const productos = []
/* const carrito = [];

const iva = valor => valor * 1.21; */

class Producto{
    constructor(id, nombre, precio, img, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.stock = stock;
        this.cantidad = 0;
    }
}

productos.push(new Producto(1, "CAÑO REDONDO", 569.86, "../img/caño-redondo.jpg", 20))
productos.push(new Producto(2, "CAÑO RECTANGULAR", 650.33, "../img/caño-rectangular.jpg", 20))
productos.push(new Producto(3, "CURVA ARTICULADA", 500.25, "../img/curva-articulada.jpg", 20))
productos.push(new Producto(4, "CURVA CORRUGADA", 368.78, "../img/caño-redondo.jpg", 20))
productos.push(new Producto(5, "SOMBRERO DOBLE ARO", 597, "../img/sombrero-doblearo.jpg", 20))
productos.push(new Producto(6, "SOMBRERO VENTURI", 1625.83, "../img/sombrero-venturi.jpg", 20))
productos.push(new Producto(7, "SOMBRERO TIPO H", 1102.33, "../img/sombrero-h.jpg", 20))
productos.push(new Producto(8, "EOLICO DE ALUMINIO", 2405, "../img/caño-redondo.jpg", 20))

export {productos};


//BUSQUEDA DE UNO O MAS PRODUCTOS E INGRESO EN CARRITO

/* let entrada = prompt("Ingrese el nombre del producto que desea comprar o escriba ESC para salir:\nCAÑO REDONDO\nCAÑO RECTANGULAR\nCURVA ARTICULADA\nCURVA CORRUGADA\nSOMBRERO DOBLE ARO\nSOMBRERO VENTURI\nSOMBRERO TIPO H\nEOLICO DE ALUMINIO").toUpperCase() */
/* 
while (entrada != "ESC"){
    let producto = productos.find(item => item.nombre === entrada);
    carrito.push(producto);
    entrada = prompt("Ingrese el nombre del producto que desea comprar o escriba ESC para salir:\nCAÑO REDONDO\nCAÑO RECTANGULAR\nCURVA ARTICULADA\nCURVA CORRUGADA\nSOMBRERO DOBLE ARO\nSOMBRERO VENTURI\nSOMBRERO TIPO H\nEOLICO DE ALUMINIO").toUpperCase()
}

let estiloCarrito = document.getElementById("estiloCarrito");
estiloCarrito.className = "estiloCarrito";

let tituloSeleccion = document.getElementById("tituloCarrito");
tituloSeleccion.innerHTML = `<h2>Usted selecciono los siguientes productos:</h2>`;

let contenedorCarrito = document.getElementById("mensajeCarrito");

for(const item of carrito){
    let li = document.createElement("li")
    li.innerHTML = `<h3>Producto: ${item.nombre}</h3>
                    <b>Precio con iva: ${iva(item.precio).toFixed(2)}</b>
                    `;
    contenedorCarrito.append(li);
} */

//SUMA DEL PRECIO DE LOS PRODUCTOS SELECCIONADOS

/* let total = carrito.reduce((acumulador, elemento) => acumulador + iva(elemento.precio), 0);

let sumaTotal = document.getElementById("precioTotal");
sumaTotal.innerHTML = `<h4>El precio total es ${total.toFixed(2)}</h4>`


 */