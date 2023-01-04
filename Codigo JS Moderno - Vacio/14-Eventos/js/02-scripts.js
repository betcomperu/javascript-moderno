const nav = document.querySelector('.navegacion');
//registrar un evento

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
})