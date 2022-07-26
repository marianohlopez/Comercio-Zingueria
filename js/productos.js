const productos = []

class Producto{
    constructor(id, nombre, precio, img, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.stock = stock;
        this.cantidad = 0;
    }
}

productos.push(new Producto(1, "CAÑO REDONDO", 569.86, "../img/caño-redondo.jpg", 20))
productos.push(new Producto(2, "CAÑO RECTANGULAR", 650.33, "../img/caño-rectangular.jpg", 20))
productos.push(new Producto(3, "CURVA ARTICULADA", 500.25, "../img/curva-articulada.jpg", 20))
productos.push(new Producto(4, "CURVA CORRUGADA", 368.78, "../img/caño-redondo.jpg", 20))
productos.push(new Producto(5, "SOMBRERO DOBLE ARO", 597, "../img/sombrero-doblearo.jpg", 20))
productos.push(new Producto(6, "SOMBRERO VENTURI", 1625.83, "../img/sombrero-venturi.jpg", 20))
productos.push(new Producto(7, "SOMBRERO TIPO H", 1102.33, "../img/sombrero-h.jpg", 20))
productos.push(new Producto(8, "EOLICO DE ALUMINIO", 2405, "../img/caño-redondo.jpg", 20))

export {productos};

