// Un usuario va a escoger una cantidad de productos y luego se entregará la suma para el pago

class producto{
    constructor(nombre, id, precio) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
}


// Creación de productos
const hamburguesa = new producto("hamburguesa", 1, 8)
const papasFritas = new producto("Papas fritas", 2, 4)
const bebida = new producto("coca cola", 3, 3)

// Preguntar al cliente los productos que quiere comprar
let comprarProductos = parseInt(prompt("Ingrese el número del producto que desea comprar \n1. Hamburguesa ($8)\n2. Papas fritas ($4)\n3. Coca Cola ($3)"))


// Validación de la elección
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

// Cálculo del precio total
const cantidad = parseInt(prompt("Ingrese la cantidad del producto seleccionado"))

const precio = infoProductoDeseado.precio * cantidad

alert("El precio del producto deseado es de: $" + precio)