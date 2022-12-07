const radios = document.querySelectorAll("#pelicula");

radios[i].onclick = function () {
        const valor = radios[i].value;
        const renglon = document.querySelector("#_" + valor);
        const nombre = document.querySelector("#nombre");
        const idpelicula = document.querySelector("#idpelicula");
        const idgenero = document.querySelector("#idgenero");
        const genero = document.querySelector("#genero");
        
        nombre.disabled = true;
        idpelicula.value = valor;
        nombre.value = renglon.childNodes[1].textContent;
        

    };


    function nuevoRegistro() {
        const nombre = document.querySelector("#nombre");
        const idpelicula = document.querySelector("#idpelicula");
        nombre.disabled = false;
        idpelicula.value = '';
        nombre.value = '';
    }

    function modificarRegistro() {
        const nombre = document.querySelector("#nombre");
        nombre.disabled = false;
        
    }

    const nuevo = document.querySelector("#nuevo");
    const modificar = document.querySelector("#modificar");

    nuevo.addEventListener('click', nuevoRegistro);
    modificar.addEventListener('click', modificarRegistro);
}

