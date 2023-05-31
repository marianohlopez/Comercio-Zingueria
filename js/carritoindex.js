import { productos } from "./productos.js";
import { carritoStorage, eliminarProductos, contador, sumaTotal, vaciarCarrito, sumar, resta } from "./extras.js";

let carritoDeCompras
let validarCarrito = localStorage.getItem("carrito");

// Renderizar los productos seleccionados en el carrito

const hacerCarrito = () => {
    const contenedorCarrito = document.getElementById("carrito-contenedor");

    contenedorCarrito.innerHTML = ``;

    for (const item of carritoDeCompras) {

        let div = document.createElement("div");

        div.classList.add("productoEnCarrito");

        div.innerHTML = `
                        <p class= "nombreProdCarrito fontsize">${item.nombre}</p>
                        <p class: "precioProdCarrito fontsize">Precio: $${item.precio}</p> 
                        <div class= "sumarRestarCarrito">
                        <button id="restar${item.id}" class= "restaBoton">-</button>
                        <p class: "fontsize" id="cantidad${item.id}">Cant.: ${item.cantidad}</p>
                        <button id="sumar${item.id}" class= "sumarBoton">+</button>
                        </div>
                        <button id="eliminar${item.id}" class="boton-eliminar" title="Eliminar producto"><img src="../img/trash.svg" alt="botonEliminar"></button>
                        `
        contenedorCarrito.appendChild(div);

        const botonResta = document.getElementById(`restar${item.id}`);
        botonResta.addEventListener("click", () => { resta(item) })

        const botonSuma = document.getElementById(`sumar${item.id}`);
        botonSuma.addEventListener("click", () => { sumar(item) })

        const botonEliminar = document.getElementById(`eliminar${item.id}`)
        botonEliminar.addEventListener("click", () => { eliminarProductos(item) })
    }
    let precioFinal = document.getElementById("sumaTotal");
    sumaTotal(precioFinal);
    contador();
}

// Botón para vaciar el carrito 

const botonVaciarCarrito = document.getElementById("vaciarCarrito").addEventListener("click", () => { vaciarCarrito(); })

//Ingresar productos en el carrito o aumentar cantidad

const carritoIndex = (productoCarrito) => {
    let producto = productos.find(item => item.id === productoCarrito.id);
    if ((productoCarrito.stock <= 0) || (productoCarrito != undefined && producto.cantidad >= productoCarrito.stock)) {
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
    else if (carritoDeCompras.some((element) => element.id === productoCarrito.id)) {
        carritoDeCompras.find(item => item.id === productoCarrito.id).cantidad++;
        carritoStorage();
        hacerCarrito();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            width: 200,
            title: `Se agregó ${productoCarrito.nombre} al carrito`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            className: "letraSweet",
            showConfirmButton: false,
            timer: 1222500
        })

    } else {
        producto.cantidad = 0
        carritoDeCompras.push(producto);
        carritoDeCompras.find(item => item.id === productoCarrito.id).cantidad++;
        carritoStorage();
        hacerCarrito();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            width: 200,
            title: `Se agregó ${productoCarrito.nombre} al carrito`,
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
}

// MODAL FORMULARIO 

const formProductos = () => {
    let formProductos = document.getElementById("compraProductos");
    formProductos.innerHTML = ``;
    carritoDeCompras.forEach(element => {
        let div = document.createElement("div");
        div.classList.add("productoEnForm");
        div.innerHTML = `
                        <p class= "productoForm">${element.nombre}</p>
                        <p> $${element.precio}</p> 
                        <p>Cant.: ${element.cantidad}</p>
                        `
        formProductos.appendChild(div);
    });
    let precioFinalForm = document.getElementById("precioFinalForm");
    sumaTotal(precioFinalForm);
}

//Siguen renderizandose los productos del carrito luego de actualizar o reiniciar

validarCarrito ? (carritoDeCompras = JSON.parse(validarCarrito), hacerCarrito()) : carritoDeCompras = [];

export { carritoDeCompras, carritoIndex, hacerCarrito, formProductos };











