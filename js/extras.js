import { pagar } from "./productos.js";
import { carritoDeCompras, hacerCarrito } from "./carritoindex.js";
import { cerrarFormCompra } from "./modal.js";

let usuarioStorage = sessionStorage.getItem("usuario");
let msjBienvenida = document.getElementById("nombreUsuario");
const cerrarSesion = document.getElementById("cerrarSesion");

//Guardar en localStorage los productos del carrito

const carritoStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}

// Botón de suma del carrito 

const sumar = (producto) => {
  let productoCarrito = carritoDeCompras.find(item => item.id === producto.id)
  if (productoCarrito.cantidad < producto.stock) {
    productoCarrito.cantidad++;
    carritoStorage();
    hacerCarrito();
  } else {
    Swal.fire({
      position: 'center',
      icon: 'info',
      width: 400,
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

const resta = (producto) => {
  let index = carritoDeCompras.findIndex(item => item.id === producto.id);
  if (carritoDeCompras[index].cantidad == 1) {
    carritoDeCompras[index].cantidad--
    carritoDeCompras[index].cantidad++
    carritoStorage();
    hacerCarrito();
  } else {
    carritoDeCompras[index].cantidad--
    carritoStorage();
    hacerCarrito();
  }
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

// VACIAR CARRITO

const vaciarCarrito = () => {
  carritoDeCompras.length = 0;
  carritoStorage();
  hacerCarrito();
}

// SUMA DEL PRECIO DE LOS PRODUCTOS SELECCIONADOS

const sumaTotal = (precio) => {
  let total = (carritoDeCompras.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0)).toFixed(2);
  total >= 1 ? precio.innerHTML = `<h5 class= "precioSumaTotal">El precio total es $ ${total}</h5>` : precio.innerHTML = `<h5>Aún no hay productos en el carrito</h5>`;
}

// Contador del carrito de compras

const contador = () => {
  let contadorCarrito = document.getElementById("contador-carrito")
  contadorCarrito.textContent = carritoDeCompras.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
}

// Loguear al usuario

const login = () => {

  if (sessionStorage.length == 0 || usuarioStorage == `` || usuarioStorage == undefined) {
    Swal.fire({
      title: "Ingrese su nombre",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
        style: 'width: 280px; margin: 0 auto;',
      },
      showCancelButton: true,
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.setItem("usuario", result.value);
        usuarioStorage = sessionStorage.getItem("usuario").toUpperCase();
        msjBienvenida.innerHTML = `<h5 class= "msjBienvenido">BIENVENID@ ${usuarioStorage}</h5>`;
      }
    });
  } else {
    msjBienvenida.innerHTML = `<h5 class= "msjBienvenido">BIENVENID@ ${usuarioStorage.toUpperCase()}</h5>`;
  }
}

// Cerrar sesión

const cerrarLogin = () => {
  if (sessionStorage.length == 0 || usuarioStorage == ``) {
    msjBienvenida.innerHTML = `<h5 class= "msjBienvenido">BIENVENID@</h5>`
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      width: 200,
      title: `Aún no ha iniciado sesión`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      className: "letraSweet",
      showConfirmButton: false,
      timer: 2000
    })
  } else {
    Swal.fire({
      title: '¿Desea cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        usuarioStorage = sessionStorage.clear();
        msjBienvenida.innerHTML = `<h5 class= "msjBienvenido">BIENVENID@</h5>`
      }
    })
  }
}

cerrarSesion.addEventListener("click", () => { cerrarLogin() });

// Validar formulario de compra

const validarForm = (e) => {
  if ((e.target.children[1].elements[0].value === ``) || (e.target.children[1].elements[1].value === ``)
    || (e.target.children[1].elements[2].value === ``) || (e.target.children[1].elements[3].value === ``)) {
    Swal.fire({
      position: 'center',
      icon: 'info',
      width: 200,
      title: `Asegúrese de completar todos los casilleros por favor`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      className: "letraSweet",
      showConfirmButton: false,
      timer: 1500
    })
  }
  if (!e.target.children[1].elements[2].value.includes("@") || !e.target.children[1].elements[2].value.includes(".")) {
    let mensaje = document.getElementById("errorCorreo");
    mensaje.innerHTML = `Asegúrese de incluir una dirección de correo válida`
  }
  else {
    Swal.fire({
      position: 'center',
      icon: 'info',
      width: 200,
      title: `Redirigiendo`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      className: "letraSweet",
      showConfirmButton: false,
      timer: 2500
    })
    pagar();
    cerrarFormCompra.click();
    vaciarCarrito();
  }
}

export { carritoStorage, eliminarProductos, sumaTotal, contador, login, vaciarCarrito, sumar, resta, validarForm };






