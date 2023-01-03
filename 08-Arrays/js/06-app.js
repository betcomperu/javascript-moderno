let carrito = [];

let producto1 = {
    nombre: "Arroz Faraón 5kg",
    codigo: 12322, 
    precio: 17.80
}

let producto2 = {
    nombre: "Arroz Costeño 7kg",
    codigo: 14552, 
    precio: 16.50
}

let producto3 = {
    nombre: "Papel Higienico Suave 24",
    codigo: 44557, 
    precio: 29.50
}

// Creando productos en forma declarativa - Programación Funcional

resultado = [...carrito, producto1]; //Llena primero el carrito con una copia ...carrito y le mete producto1
resultado = [...resultado, producto2];// El resultado le saca copia y le mete producto2
resultado = [producto3, ...resultado];// producto3 es metido antes de la copia de todo lo anterior osea ...resultado

console.table(resultado);