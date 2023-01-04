
// var nombre = prompt('Cual es tu nombre ?');

// // Toma una parte del HTML y lo reemplaza 
// document.querySelector('.contenido').innerHTML= `${nombre} Esta aprendiendo Java Script Moderno`;


//Sacar el IGV de un numero

function igv(){
  var calculo= document.getElementById("monto");

   console.log(calculo);
}
var monto = 0;
var base = monto/1.18;
var igv = base*0.18


   document.querySelector('.contenido').innerHTML= `El IGV de S/ ${monto} es S/ ${igv}, y su Base Imponible es S/ ${base}`;



