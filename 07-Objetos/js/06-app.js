var miCarro = {
    modelo : "Toyota",
    año: 1987,
    fabricacion: "Japon",
    informacion: {
        peso: "2Ton",
        licencia: true,
    }

}

console.log(miCarro);

//Extraer peso de un objeto en otro objeto

const {informacion:{peso}}=miCarro; //2ton

console.log(peso);

// Document Write
if(18>=9){
document.write("Dios me atrae a no ser como quiero ser");
}

// Variable impresa
var ts = new Date().getTime();

alert(ts);