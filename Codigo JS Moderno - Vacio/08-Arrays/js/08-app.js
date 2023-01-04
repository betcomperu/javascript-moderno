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

// Destructurin con Arreglos

const numeros=[10, 20, 30, 40, 50, 60, 70];

const [, , ,tercero]= numeros; // Mostrara el tercer indice que es el cuarto osea 40

const [primero, ...resto]= numeros; // Mostrara el tercer indice que es el cuarto osea 40

// console.log(tercero); //40

// console.log(tercero,...numeros); //40 10 20 30 40 50 60 70

console.log(resto); //[ 20, 30, 40, 50, 60, 70 ]

