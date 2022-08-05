import { mostrarProductos } from "./app.js";

const productos = []

class Producto{
    constructor(id, nombre, precio, img, stock, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.stock = stock;
        this.categoria = categoria;
        this.cantidad = 0;
    }
}

const cargarProd = async () =>{
    const response = await fetch("../data/data.json");
    const dataProductos = await response.json();
    dataProductos.forEach(item => {
        productos.push(new Producto(item.id, item.nombre, item.precio, item.img, item.stock, item.categoria))
    });
}

const global = async () => {
    await cargarProd();
    mostrarProductos(productos);
}

global();

export {productos};


