//Creando un Objeto

var miCarro = {
    modelo : "Toyota",
    año: 1987,
    fabricacion: "Japon"
}

console.log(miCarro);

console.log( miCarro['modelo']);

// Se leen las propiedades de pantalla
var anchura = screen.width;
var altura = screen.height;
var anchuraDisponible = screen.availWidth;
var alturaDisponible = screen.availHeight;
var profundidadColor = screen.colorDepth;

// Se muestran en la pagina 

document.write( "la anchura del monitor es : " + anchura + " pixeles <br>");
document.write( "la altura del monitor es : " + altura + " pixeles <br>");
document.write( "la anchura del monitor es : " + anchuraDisponible + " pixeles <br>");
document.write( "la altura del monitor es : " + alturaDisponible + " pixeles <br>");
document.write( "la profundidad del monitor es : " + profundidadColor + " pixeles");
