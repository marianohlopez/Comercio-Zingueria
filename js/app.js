import { productos } from "./productos.js";
import { carritoIndex } from "./carritoindex.js";

const mostrarProductos = (productosRender) =>{
    const contenedorProductos = document.getElementById("productoContenedor");
    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
                        <div class = "card">
                            <img src="${producto.img}" class="card-img" alt="imagenProducto">
                            <div >
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Precio: ${producto.precio}</p>
                                <button class="botonCompra" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`boton${producto.id}`)

        boton.addEventListener("click", ()=> {
            carritoIndex(producto.id);
            alert(`Se agrego ${producto.nombre}`);
    })
    })
}

mostrarProductos(productos);

