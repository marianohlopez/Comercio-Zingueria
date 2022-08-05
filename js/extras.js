import {carritoDeCompras, hacerCarrito} from "./carritoindex.js";

//Guardar en localStorage los productos del carrito
const carritoStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}

// Botón de suma del carrito 
const sumar = (producto) =>{
  let productoCarrito = carritoDeCompras.find(item => item.id === producto.id)
  if(productoCarrito.cantidad < producto.stock){
      productoCarrito.cantidad++;
      carritoStorage();
      hacerCarrito();
  }else{
      Swal.fire({
          position: 'center',
          icon: 'info',
          width: 200,
          title: `Lo sentimos, por el momento no tenemos stock de ${productoCarrito.nombre}, intente más tarde`,
          showClass: {
              popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
          },
          className: "letraSweet",
          showConfirmButton: false,
          timer: 3500
      })
  }
}

//Botón de resta del carrito

const resta = (producto) =>{
  let index = carritoDeCompras.findIndex(item => item.id === producto.id);
  if(carritoDeCompras[index].cantidad == 1){
      /* carritoDeCompras.splice(index, 1); */
      carritoDeCompras[index].cantidad--
      carritoDeCompras[index].cantidad++
      carritoStorage();
      hacerCarrito();
  }else{
      carritoDeCompras[index].cantidad--
      carritoStorage();
      hacerCarrito();
  }
}
/* const resta = (producto) =>{
  let index = carritoDeCompras.findIndex(item => item.id === producto.id);
  if(carritoDeCompras[index].cantidad <= 0){
      carritoDeCompras.splice(index, 1);
      carritoStorage();
      hacerCarrito();
  }else{
      carritoDeCompras[index].cantidad--
      carritoStorage();
      hacerCarrito();
  }
} */


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

/* VACIAR CARRITO */

const vaciarCarrito = () =>{
  carritoDeCompras.length = 0;
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

const login = () =>{
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
  }else{
    div.innerHTML = `<h5>BIENVENID@ ${usuarioStorage.toUpperCase()}</h5>`;
  }
}
login();

/* Cerrar sesión */

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
      div.innerHTML = `<h5>BIENVENID@</h5>`
    }
  })
})

export {carritoStorage, eliminarProductos, sumaTotal, contador, vaciarCarrito, sumar, resta};






