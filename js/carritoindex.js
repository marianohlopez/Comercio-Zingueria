import { productos } from "./productos.js";

const carritoDeCompras = []

const carritoStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
 }

const sumaTotal = (producto) => {
    let total = (producto.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0)).toFixed(2);
    
    let precioTotal = document.getElementById("sumaTotal");
         
    precioTotal.innerHTML = `<h5>El precio total es ${total}</h5>`
}

const hacerCarrito = () =>{

    let validarCarrito = JSON.parse(localStorage.getItem("carrito"));
    const contenedorCarrito = document.getElementById("carrito-contenedor");

    contenedorCarrito.innerHTML = ``;

    for(const item of validarCarrito){

        let div = document.createElement("div");

        div.classList.add ("productoEnCarrito");

        div.innerHTML = `
                        <p>${item.nombre}</p>
                        <p>Precio: ${item.precio}</p> 
                        <p id="cantidad${item.id}">Cantidad: ${item.cantidad}</p>
                        <button id="eliminar${item.id}" class="boton-eliminar">Eliminar</button>
                        `
        contenedorCarrito.appendChild(div);

        //SUMA DEL PRECIO DE LOS PRODUCTOS SELECCIONADOS
        sumaTotal(validarCarrito);
    }
} 

export const carritoIndex = (productoId)=>{
    let producto = productos.find(producto => producto.id === productoId);
    if(carritoDeCompras.some((element) => element.id === productoId)){
        carritoDeCompras.find(item => item.id === productoId).cantidad++;
        carritoStorage();
        hacerCarrito();
        
    }else{
        carritoDeCompras.push(producto);
        carritoDeCompras.find(item => item.id === productoId).cantidad++;
        carritoStorage();
        hacerCarrito();
    }
}
hacerCarrito();











