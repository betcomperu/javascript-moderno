//alert('HAY UN MAÑANA NUEVO POR ESTAR PENDIENTE')
// Creamos un arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
// Arreglos de objeto
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Aplicando foreach para encontrar un indice del array

meses.forEach((mes,i) => {
    if (mes=="Abril") {
        console.log(`El mes de Abril esta en el indice ${i}`); //3
        
    }
});

// Aplicando findIndex

const indice= meses.findIndex(mes => mes==="Abril");
console.log(`El mes de Abril esta en el indice ${indice}`);//3

// Comprobar un indice de un arreglo de objetos

const indice2= carrito.findIndex( producto => producto.precio===1000);
console.log(`Existe ${indice2} de productos con el precio 100`); 
// hay 2 productos con el valor de 100 pero solo pinta el numero 1 si ve 1 , pero si no ve nada pinta -1