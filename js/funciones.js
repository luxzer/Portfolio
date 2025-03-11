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

// Ver si el DOM cargó
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar alerta personalizada según la página
    const titulo = document.title;
     {
        alert(`Bienvenido a ${titulo}`);
    }

    // Comprobar y aplicar el modo oscuro si estaba activado
    if (localStorage.getItem('modo-oscuro') === 'activado') {
        document.body.classList.add('modo-oscuro');
        const iconoModo = document.querySelector('#botonModoOscuro i');
        iconoModo.classList.remove('bi-moon');
        iconoModo.classList.add('bi-sun');
    }
    
    // Agregar el botón del modo oscuro
    const botonModoOscuro = document.getElementById('botonModoOscuro');
    if (botonModoOscuro) {
        botonModoOscuro.addEventListener('click', alternarModoOscuro);
    }
});