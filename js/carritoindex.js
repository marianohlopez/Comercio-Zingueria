import { productos } from "./productos.js";

const carritoDeCompras = []

const hacerCarrito = () =>{
    if(carritoDeCompras.length > 0){
        const contenedorCarrito = document.getElementById("carrito-contenedor");

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
    
            //SUMA DEL PRECIO DE LOS PRODUCTOS SELECCIONADOS
    
            let total = carritoDeCompras.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
    
            let precioTotal = document.getElementById("sumaTotal");
    
            precioTotal.innerHTML = `<h5>El precio total es ${total}</h5>`
        }
    }
}

export const carritoIndex = (productoId)=>{
        let producto = productos.find(producto => producto.id === productoId);
        if((productoId.stock <= 0) || (producto != undefined && producto.cantidad >= productoId.cantidad)){
            alert(`Por el momento no tenemos stock de ${productoId.nombre}, vuelva más tarde`);
        }else if(carritoDeCompras.some((element) => element.id === productoId)){
            carritoDeCompras.find(item => item.id === productoId).cantidad++;
        }else{
            carritoDeCompras.push(producto);
            carritoDeCompras.find(item => item.id === productoId).cantidad++;
            hacerCarrito();
        }
}









    
