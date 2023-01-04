alert('Hola Beto que tal !!!');
//Forma explicita

let aprendiendo = function(){

    console.log('Aprendiendo JavaScript');
}

// Forma ArowFunction o Funcion Flecha

let aprendiendo2 = ()=>{

    console.log('Aprendiendo 2 JavaScript');

}

aprendiendo();// Aprendiendo JavaScript

aprendiendo2(); //Aprendiendo 2 JavaScript

//Forma explicita con parametro

let aprendiendo3 = function(curso){

    console.log(`Aprendiendo el curso de ${curso}`);
}

console.log(aprendiendo3('PHP 8.0'));

// Forma ArowFunction o Funcion Flecha con parametros

let menu = (plato)=>`El menú de hoy Sabado es ${plato}`;

console.log(menu('SALCHIPAPA JAJAJAJAJAJA '));