document.addEventListener('DOMContentLoaded', function () {
    initDarkMode(); // Inicializar el modo oscuro
});

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');

    function toggleDarkMode() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode', !isDarkMode);
        localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
        updateDarkModeIcon(isDarkMode);
        updateDarkModeIconMobile(isDarkMode);
    }

    // Configurar el botón de escritorio
    if (darkModeToggle) {
        if (localStorage.getItem('dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
            updateDarkModeIcon(true);
        }
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Configurar el botón móvil
    if (darkModeToggleMobile) {
        if (localStorage.getItem('dark-mode') === 'enabled') {
            updateDarkModeIconMobile(true);
        }
        darkModeToggleMobile.addEventListener('click', toggleDarkMode);
    }
}

// Función para actualizar el ícono del botón de escritorio
function updateDarkModeIcon(isDarkMode) {
    const iconElement = document.querySelector('#darkModeToggle i');
    if (iconElement) {
        iconElement.classList.toggle('bi-moon', !isDarkMode);
        iconElement.classList.toggle('bi-sun', isDarkMode);
    }
}

// Función para actualizar el ícono del botón móvil
function updateDarkModeIconMobile(isDarkMode) {
    const iconElement = document.querySelector('#darkModeToggleMobile i');
    if (iconElement) {
        iconElement.classList.toggle('bi-moon', !isDarkMode);
        iconElement.classList.toggle('bi-sun', isDarkMode);
    }
}

// Mostrar el modal automáticamente cuando la página se cargue
document.addEventListener('DOMContentLoaded', function () {
    const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    welcomeModal.show();
});