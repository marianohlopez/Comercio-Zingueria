import { productos } from "./productos.js";
import { carritoIndex } from "./carritoindex.js";

let filtrarPorNombre = document.getElementById("porNombre");
let filtroCaños = document.getElementById("caños");
let filtroCurvas = document.getElementById("curvas");
let filtroSombreros = document.getElementById("sombreros");
let filtroEolicos = document.getElementById("eolicos");
let filtroAccesorios = document.getElementById("accesorios");
let filtroParaTechos = document.getElementById("paraTechos");
let filtroTodos = document.getElementById("todos");

/* MOSTRAR PRODUCTOS EN EL LAYOUT */

const mostrarProductos = (renderProductos) =>{
    const contenedorProductos = document.getElementById("productoContenedor"); 
    contenedorProductos.innerHTML = ``;
    renderProductos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card", "cardPadre")
        div.innerHTML = `
                        <div class = "card">
                            <img src="${producto.img}" class="card-img" alt="imagenProducto">
                            <div >
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Precio: $${producto.precio}</p>
                                <button class="botonCompra" id="${producto.id}">Agregar</button>
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

const filtrarNombre = (nombre) => {
    let filtrados = productos.filter (el => el.nombre === nombre);
    if(filtrados.length >= 1){
        mostrarProductos(filtrados);
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'info',
            width: 300,
            title: "El producto no se encuentra disponible (RECUERDA INTRODUCIR EL NOMBRE COMPLETO DEL PRODUCTO)",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            className: "letraSweet",
            showConfirmButton: false,
            timer: 4500
        })
    }
}


filtrarPorNombre = addEventListener("keydown", (e) => {
    let infoBuscador = (document.getElementById("porNombre").value).toUpperCase();
    if(e.key === "Enter"){
        filtrarNombre(infoBuscador)
    }
})

filtroCaños.addEventListener("click", ()=> {filtrar("CAÑOS");})

filtroCurvas.addEventListener("click", ()=> {filtrar("CURVAS");})

filtroSombreros.addEventListener("click", ()=> {filtrar("SOMBREROS");})

filtroEolicos.addEventListener("click", ()=> {filtrar("EOLICOS");})

filtroAccesorios.addEventListener("click", () => {filtrar("ACCESORIOS")})

filtroParaTechos.addEventListener("click", () => {filtrar("PARA TECHOS")})

filtroTodos.addEventListener("click", ()=> {mostrarProductos(productos);})

export {mostrarProductos}
