// Cambiar entre modo oscuro
function alternarModoOscuro() {
    document.body.classList.toggle('modo-oscuro');
    const iconoModo = document.querySelector('#botonModoOscuro i');
    
    if (document.body.classList.contains('modo-oscuro')) {
        iconoModo.classList.remove('bi-moon');
        iconoModo.classList.add('bi-sun');
        localStorage.setItem('modo-oscuro', 'activado');
    } else {
        iconoModo.classList.remove('bi-sun');
        iconoModo.classList.add('bi-moon');
        localStorage.setItem('modo-oscuro', 'desactivado');
    }
}

// Ver si el DOM cargo
document.addEventListener('DOMContentLoaded', function() {

    alert(`Has entrado a ${document.title}`);

    if (localStorage.getItem('modo-oscuro') === 'activado') {
        document.body.classList.add('modo-oscuro');
        const iconoModo = document.querySelector('#botonModoOscuro i');
        iconoModo.classList.remove('bi-moon');
        iconoModo.classList.add('bi-sun');
    }

    // Boton del Modo Oscuro
    const botonModoOscuro = document.getElementById('botonModoOscuro');
    if (botonModoOscuro) {
        botonModoOscuro.addEventListener('click', alternarModoOscuro);
    }
});