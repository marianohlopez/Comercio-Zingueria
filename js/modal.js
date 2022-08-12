import { formProductos, carritoDeCompras } from "./carritoindex.js";
import { validarForm } from "./extras.js";

const modalContenedor = document.querySelector(".modal-container");
const abrirCarrito = document.getElementById("open");
const cerrarCarrito = document.getElementById("cerrar");
const modalCarrito = document.querySelector(".modal-carrito");
const abrirFormCompra = document.getElementById("btnFinalizarCompra");
const cerrarFormCompra = document.getElementById("btnCerrarForm");
const formCompra = document.querySelector(".containerForm");
const formFinalizarCompra = document.getElementById("formFinalizarCompra");
let errorCompra = document.getElementById("errorCompra");

abrirCarrito.addEventListener("click", ()=>{
    modalContenedor.classList.toggle("modal-active")
})

cerrarCarrito.addEventListener("click", ()=>{
    carritoDeCompras.length == 0 && (errorCompra.innerHTML = "");
    modalContenedor.classList.remove("modal-active")
})

modalContenedor.addEventListener("click", ()=>{
    cerrarCarrito.click();
})

modalCarrito.addEventListener("click", (e)=>{
    e.stopPropagation();
})

abrirFormCompra.addEventListener("click", () =>{
    if(carritoDeCompras.length >= 1){
        formProductos();
        modalContenedor.classList.remove("modal-active")
        formCompra.classList.toggle("containerForm-active");
    }else{
        errorCompra.innerHTML = "Primero debes seleccionar algún producto"
    }
})

cerrarFormCompra.addEventListener("click", () => {
    formCompra.classList.remove("containerForm-active")
})

formFinalizarCompra.addEventListener("submit", (e) => {
    e.preventDefault();
    validarForm(e);
})

export{ cerrarFormCompra };