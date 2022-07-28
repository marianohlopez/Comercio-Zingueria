import { productos } from "./productos.js";
import { eliminarProductos, contador, sumaTotal, carritoStorage } from "./extras.js";
export {carritoDeCompras, carritoIndex, hacerCarrito};

let carritoDeCompras
let validarCarrito = localStorage.getItem("carrito");

//Renderizar los productos seleccionados en el carrito
const hacerCarrito = () =>{
    const contenedorCarrito = document.getElementById("carrito-contenedor");

    contenedorCarrito.innerHTML = ``;

    for(const item of carritoDeCompras){

        let div = document.createElement("div");

        div.classList.add ("productoEnCarrito");

        div.innerHTML = `
                        <p>${item.nombre}</p>
                        <p>Precio: ${item.precio}</p> 
                        <p id="cantidad${item.id}">Cantidad: ${item.cantidad}</p>
                        <button id="eliminar${item.id}" class="boton-eliminar">Eliminar</button>
                        `
        contenedorCarrito.appendChild(div);

        const botonEliminar = document.getElementById(`eliminar${item.id}`)
        botonEliminar.addEventListener("click", () => {eliminarProductos(item.id)})
    }
    sumaTotal();
    contador();

} 

//Ingresar productos en el carrito o aumentar cantidad
const carritoIndex = (productoCarrito)=>{
    let producto = productos.find(item => item.id === productoCarrito.id);
    if((productoCarrito.stock <= 0) || (productoCarrito != undefined && producto.cantidad >= productoCarrito.stock)){
        alert(`Lo sentimos, por el momento no tenemos stock de ${productoCarrito.nombre}, intente más tarde`);
    }
    else if(carritoDeCompras.some((element) => element.id === productoCarrito.id)){
        carritoDeCompras.find(item => item.id === productoCarrito.id).cantidad++;
        carritoStorage();
        hacerCarrito();   
        alert(`Se agrego ${productoCarrito.nombre}`);
    }else{
        carritoDeCompras.push(producto);
        carritoDeCompras.find(item => item.id === productoCarrito.id).cantidad++;
        carritoStorage();
        hacerCarrito();
        alert(`Se agrego ${productoCarrito.nombre}`);
    }
}

//Siguen renderizandose los productos del carrito luego de actualizar o reiniciar
validarCarrito ? (carritoDeCompras = JSON.parse(validarCarrito), hacerCarrito()) : carritoDeCompras = [];
















