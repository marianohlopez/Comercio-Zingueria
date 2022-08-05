import { formProductos } from "./carritoindex.js";

const modalContenedor = document.querySelector(".modal-container");
const abrirCarrito = document.getElementById("open");
const cerrarCarrito = document.getElementById("cerrar");
const modalCarrito = document.querySelector(".modal-carrito");
const abrirFormCompra = document.getElementById("btnFinalizarCompra");
const cerrarFormCompra = document.getElementById("btnCerrarForm");
const formCompra = document.querySelector(".containerForm");

abrirCarrito.addEventListener("click", ()=>{
    modalContenedor.classList.toggle("modal-active")
})

cerrarCarrito.addEventListener("click", ()=>{
    modalContenedor.classList.remove("modal-active")
})

modalContenedor.addEventListener("click", ()=>{
    cerrarCarrito.click();
})

modalCarrito.addEventListener("click", (e)=>{
    e.stopPropagation();
})

abrirFormCompra.addEventListener("click", () =>{
    formProductos();
    modalContenedor.classList.remove("modal-active")
    formCompra.classList.toggle("containerForm-active");
})

cerrarFormCompra.addEventListener("click", () => {
    formCompra.classList.remove("containerForm-active")
})