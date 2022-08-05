import { productos } from "./productos.js";
import { carritoIndex } from "./carritoindex.js";

/* MOSTRAR PRODUCTOS EN EL LAYOUT */

const mostrarProductos = (renderProductos) =>{
    const contenedorProductos = document.getElementById("productoContenedor"); 
    contenedorProductos.innerHTML = ``;
    renderProductos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
                        <div class = "card">
                            <img src="${producto.img}" class="card-img" alt="imagenProducto">
                            <div >
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Precio: ${producto.precio}</p>
                                <button class="botonCompra" id="${producto.id}">Comprar</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`${producto.id}`)

        boton.addEventListener("click", ()=> {
            carritoIndex(producto);
        })
    })
}

/* FILTRAR PRODUCTOS EN EL LAYOUT */

const filtrar = (catg) => {
    let filtrados = productos.filter (el => el.categoria === catg);
    mostrarProductos(filtrados);
}

let filtroCaños = document.getElementById("caños")
filtroCaños.addEventListener("click", ()=> {filtrar("CAÑOS");})

let filtroCurvas = document.getElementById("curvas")
filtroCurvas.addEventListener("click", ()=> {filtrar("CURVAS");})

let filtroSombreros = document.getElementById("sombreros")
filtroSombreros.addEventListener("click", ()=> {filtrar("SOMBREROS");})

let filtroEolicos = document.getElementById("eolicos")
filtroEolicos.addEventListener("click", ()=> {filtrar("EOLICOS");})

let filtroTodos = document.getElementById("todos")
filtroTodos.addEventListener("click", ()=> {mostrarProductos(productos);})

export {mostrarProductos}
