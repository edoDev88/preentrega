// Un usuario va a escoger una cantidad de productos y luego se entregará la suma para el pago

class producto {
    constructor(nombre, id, precio) {
        this.nombre = nombre
        this.id = id
        this.precio = precio
    }
}


// Creación de productos
const lomoItaliano = new producto("Lomo italiano", 1, 10)
const chacarero = new producto("Chacarero", 2, 8)
const papasFritasG = new producto("Papas fritas - G", 3, 5)
const papasFritasM = new producto("Papas fritas - M", 4, 4)
const papasFritasP = new producto("Papas fritas - P", 5, 3)
const bebidaC = new producto("Coca cola", 6, 3)
const bebidaF = new producto("Fanta", 7, 3)

// Catalogo de productos
const productos = [lomoItaliano, chacarero, papasFritasG, papasFritasM, papasFritasP, bebidaC, bebidaF]
console.log(productos)


// Preguntar al cliente los productos que quiere comprar
let comprarProductos = prompt("Ingrese el producto que desea comprar \n1. Lomo italiano ($10)\n2. Chacarero ($8)\n3. Papas fritas - G ($5) \n4. Papas fritas - M \n5. Papas fritas - P \n6. Coca cola \n7. Fanta")


// Validación de la elección
let seguirComprando = true
const carritoCompra = []

while (seguirComprando === true) {
    const producto = productos.find((producto) => producto.nombre === comprarProductos.trim())

    // Preguntar al usuario sobre un producto que exista o si existe, agregarlos a la variable carritoCompra
    if (producto) {
        carritoCompra.push(producto)
    } else {
        comprarProductos = prompt("Ingrese el producto que desea comprar \n1. Lomo italiano ($10)\n2. Chacarero ($8)\n3. Papas fritas - G ($5) \n4. Papas fritas - M \n5. Papas fritas - P \n6. Coca cola \n7. Fanta")
        continue
    }

    const desicion = prompt("Deseas continuar comprando? \nsi - no")
    if (desicion === "si") {
        seguirComprando = prompt("Ingrese el producto que desea comprar \n1. Lomo italiano ($10)\n2. Chacarero ($8)\n3. Papas fritas - G ($5) \n4. Papas fritas - M \n5. Papas fritas - P \n6. Coca cola \n7. Fanta")
    } else {
        seguirComprando = false
    }
}

console.log(carritoCompra)
let totalCompra = 0
carritoCompra.forEach(producto => {
        totalCompra = totalCompra + producto.precio
    }
)
alert("El total de tu compra es " + totalCompra)