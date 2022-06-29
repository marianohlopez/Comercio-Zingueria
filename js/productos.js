
const iva = x => x * 0.21;
let costo = Number(prompt("Ingrese el costo del producto, o una letra para salir")); 

while(Number(costo)){
    let porcentaje = iva(costo);
    alert(`el iva del producto es ${porcentaje}`);
    let precioFinal = costo + porcentaje;
    alert(`El precio final del producto es ${precioFinal}`);
    costo = Number(prompt("Ingrese el costo del producto, o una letra para salir"));
}
alert("Gracias, vuelva pronto");


