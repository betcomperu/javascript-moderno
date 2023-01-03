//alert('HAY UN MAÑANA NUEVO POR ESTAR PENDIENTE')
// Creamos un arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
// Arreglos de objeto
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
// En la forma larga 
meses.forEach(mes => {
    if (mes="Enero") {
        console.log('Enero si existe');
        
    }
});

// Con Include
const result= meses.includes('diciembre');
console.log(result); // false

// Con Some tanto para arreglos con indice como para arreglos con objetos

const existe=carrito.some(producto => producto.nombre==='Celular');
console.log(existe);// true

// Con Some en un arreglo clasico

const existe2 = meses.some(mes => mes === "Febrero");
console.log(existe2);//true

