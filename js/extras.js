import {carritoDeCompras, hacerCarrito} from "./carritoindex.js";
export {carritoStorage, eliminarProductos, sumaTotal, contador};

//Guardar en localStorage los productos del carrito
const carritoStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}

//Función del boton eliminar del carrito
const eliminarProductos = (producto) => {
  let index = carritoDeCompras.findIndex(item => item.id === producto.id);
  carritoDeCompras.splice(index, 1);
  carritoStorage();
  hacerCarrito();
  Swal.fire({
    position: 'top-start',
    icon: 'warning',
    width: 200,
    title: `Se eliminó ${producto.nombre} del carrito`,
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    },
    className: "letraSweet",
    showConfirmButton: false,
    timer: 1000
})
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

let div = document.getElementById("nombreUsuario")
let usuarioStorage = sessionStorage.getItem("usuario");
if(usuarioStorage == undefined){
  Swal.fire({
    title: "Ingrese su nombre",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      sessionStorage.setItem("usuario", result.value);
      usuarioStorage = sessionStorage.getItem("usuario").toUpperCase();
      div.innerHTML = `<h5>BIENVENID@ ${usuarioStorage}</h5>`;
    }
  });
}div.innerHTML = `<h5>BIENVENID@ ${usuarioStorage}</h5>`;

const cerrarSesion = document.getElementById("cerrarSesion");
cerrarSesion.addEventListener("click", () => {
  Swal.fire({
  title: '¿Desea cerrar sesión?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OK'
}).then((result) => {
  if (result.isConfirmed) {
    sessionStorage.clear()
  }
})
} )

/* if(usuarioStorage){
  let usuario = usuarioStorage;
  let mensaje = `Bienvenid@ ${usuario}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
}
 */








