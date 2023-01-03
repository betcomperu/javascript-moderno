let carrito = [];

// Agregar elementos al final del arreglo
// let meses = ['Enero', 'Febrero', 'Marzo'];
//meses.push('Abril');



let producto1 = {
    nombre: "Arroz Faraón 5kg",
    codigo: 12322, 
    precio: 17.80
}

let producto2 = {
    nombre: "Arroz Costeño 5kg",
    codigo: 14552, 
    precio: 16.50
}

carrito.push(producto1); // Agrego un objeto con el metodo push al arrego carrito
carrito.unshift(producto2);
console.table(carrito);