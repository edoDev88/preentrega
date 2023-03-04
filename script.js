// Un usuario va a escoger una cantidad de productos y luego se entregará la suma para el pago

class productos{
    constructor(nombre, id, precio) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
}


// Creación de productos
const hamburguesa = new productos("hamburguesa", 1, 8)
const papasFritas = new productos("Papas fritas", 2, 4)
const bebida = new productos("coca cola", 3, 3)

// Preguntar al cliente los productos que quiere comprar
let comprarProductos = parseInt(prompt("Ingrese el número del producto que desea comprar \n1. Hamburguesa \n2. Papas fritas \n3. Coca Cola"))


// Validacion de la elección
let productoEscogido = false
let infoProductoDeseado;

while (productoEscogido === false) {
    if (comprarProductos === 1){
        productoEscogido = true
        infoProductoDeseado = hamburguesa
    } else if (comprarProductos === 2) {
        productoEscogido = true
        infoProductoDeseado = papasFritas
    }else if (comprarProductos === 3) {
        productoEscogido = true
        infoProductoDeseado = bebida
    } else {
        comprarProductos = parseInt(prompt("Ingrese un número valido"))
    }
}