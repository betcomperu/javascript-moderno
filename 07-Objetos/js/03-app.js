var miCarro = {
    modelo : "Toyota",
    año: 1987,
    fabricacion: "Japon"

}

console.log(miCarro);

console.log( miCarro['modelo']);

// Agregar propiedades al objeto
miCarro.imagen = "logo.png"
//Eliminar propiedades
delete miCarro.modelo;
delete miCarro.año;
delete miCarro.fabricacion;

console.log(miCarro.imagen);