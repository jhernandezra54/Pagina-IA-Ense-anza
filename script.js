
function mostrarSeccion(id) {
    var secciones = document.getElementsByClassName('seccion');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}
