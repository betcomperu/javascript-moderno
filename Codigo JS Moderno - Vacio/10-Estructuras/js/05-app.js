// Switch Case

const metododepago = 'cheque';

switch (metododepago) {
    case 'efectivo':
        console.log(`Pagaste con ${metododepago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metododepago}`);
        break;

    default:
        console.log('Aun no haz solicitado tarjeta para pagar esta cuenta');
        break;
}

let autenticado=false;
let puedePagar= true;

console.log(autenticado && puedePagar ? 'Si puede pagar ' : 'No autenticado no puede pagar');