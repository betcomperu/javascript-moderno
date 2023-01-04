//alert("no me funciona en Opera");
const producto = "Monitor de 42 Pulgadas";
console.log(producto);
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('42','32'));
console.log(producto.replace('Monitor','Pantalla Led'));
console.log(producto.replace('Monitor','Monitor Curvo'));

//Slice : Corta

console.log(producto.slice(4, 10)); //tor de
console.log(producto.substring(4, 10)); // tor de

const usuario = "Beto";
console.log(usuario.substring(0,1)); // B , es la inicial de tu nombre Beto
console.log(usuario.charAt(0)); // B , es la inicial de tu nombre Beto