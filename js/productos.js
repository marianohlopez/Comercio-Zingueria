import { mostrarProductos } from "./app.js";
import { carritoDeCompras } from "./carritoindex.js";
import { login } from "./extras.js";
import passwordAuthorization from "../config.js";

document.addEventListener("DOMContentLoaded", () => { login(); global() })

// CARGA DE PRODUCTOS DESDE JSON

const productos = []

class Producto {
    constructor(id, nombre, precio, img, stock, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.stock = stock;
        this.categoria = categoria;
        this.cantidad = 0;
    }
}

const cargarProd = async () => {
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

// FUNCIÓN PARA LLAMAR A API DE MERCADO PAGO

const pagar = async () => {

    const productosToMap = carritoDeCompras.map(element => {
        let nuevoElemento = {
            title: element.nombre,
            description: element.categoria,
            picture_url: element.img,
            category_id: element.id,
            quantity: element.cantidad,
            currency_id: "ARS",
            unit_price: element.precio
        }
        return nuevoElemento;
    })

    let response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: "POST",
        headers: {
            Authorization: passwordAuthorization
        },
        body: JSON.stringify({
            items: productosToMap
        })
    })

    let data = await response.json();

    window.open(data.init_point, "_blank")
}

export { productos, pagar };


