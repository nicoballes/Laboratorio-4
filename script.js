document.addEventListener("DOMContentLoaded", function() {
    // Oculta todas las secciones al cargar la página
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
});

// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    // Muestra la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}
