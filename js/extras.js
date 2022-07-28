import {carritoDeCompras, hacerCarrito} from "./carritoindex.js";
export {carritoStorage, eliminarProductos, sumaTotal, contador};

//Guardar en localStorage los productos del carrito
const carritoStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}

//Función del boton eliminar del carrito
const eliminarProductos = (productoid) => {
  let index = carritoDeCompras.findIndex(item => item.id === productoid);
  carritoDeCompras.splice(index, 1);
  carritoStorage();
  hacerCarrito();
}

//SUMA DEL PRECIO DE LOS PRODUCTOS SELECCIONADOS
const sumaTotal = () => {
    let total = (carritoDeCompras.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0)).toFixed(2);    
    let precioTotal = document.getElementById("sumaTotal");  
    total >=1 ? precioTotal.innerHTML = `<h5>El precio total es ${total}</h5>` : precioTotal.innerHTML = `<h5>Aún no hay productos en el carrito</h5>`;
}

//Contador del carrito de compras
const contador = () => {
    let contadorCarrito = document.getElementById("contador-carrito")
    contadorCarrito.textContent = carritoDeCompras.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
}

//Loguear al usuario
let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let usuario = usuarioStorage;
  let mensaje = `Bienvenid@ ${usuario}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
}

const cerrarSesion = document.getElementById("cerrarSesion");
cerrarSesion.addEventListener("click", () => {sessionStorage.clear()} )






