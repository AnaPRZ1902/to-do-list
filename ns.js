document.getElementById('agregar-tarea').addEventListener('click', function() {
    var inputTarea = document.getElementById('nueva-tarea');
    var textoTarea = inputTarea.value.trim();

    if (textoTarea !== '') {
        var listaTareas = document.getElementById('lista-tareas');

        var elementoTarea = document.createElement('li');
        elementoTarea.className = 'list-group-item d-flex justify-content-between align-items-center';

        var contenidoTarea = document.createElement('span');
        contenidoTarea.textContent = textoTarea;

        var botonCompletar = document.createElement('button');
        botonCompletar.className = 'btn btn-success btn-sm ml-2';
        botonCompletar.textContent = 'Completar';
        botonCompletar.onclick = function() {
            contenidoTarea.classList.toggle('completada');
            if (contenidoTarea.classList.contains('completada')) {
                botonCompletar.textContent = '✓ Completada';
            } else {
                botonCompletar.textContent = 'Completar';
            }
        };

        var botonBorrar = document.createElement('button');
        botonBorrar.className = 'btn btn-danger btn-sm ml-2';
        botonBorrar.textContent = 'Borrar';
        botonBorrar.onclick = function() {
            listaTareas.removeChild(elementoTarea);
        };

        elementoTarea.appendChild(contenidoTarea);
        elementoTarea.appendChild(botonCompletar);
        elementoTarea.appendChild(botonBorrar);
        listaTareas.appendChild(elementoTarea);

        inputTarea.value = '';
    }
});
