
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.style.display = 'none');
    
    const seleccionada = document.getElementById(id);
    if (seleccionada) {
        seleccionada.style.display = 'block';
        seleccionada.scrollIntoView({ behavior: 'smooth' });
    }
}
