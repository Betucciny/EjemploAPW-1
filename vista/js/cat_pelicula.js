const radios = document.querySelectorAll("#pelicula");

for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
        const valor = radios[i].value;
        const renglon = document.querySelector("#_" + valor);
        const nombre = document.querySelector("#nombre");
        const idsoporte = document.querySelector("#idsoporte");
        const idgenero = document.querySelector("#idgenero");
        const id = document.querySelector("#id");
        nombre.disabled = true;
        descripcion.disabled = true;
        id.value = valor;
        nombre.value = renglon.childNodes[1].textContent;
        descripcion.value = renglon.childNodes[2].textContent;

    };


    function nuevoRegistro() {
        const nombre = document.querySelector("#nombre");
        const descripcion = document.querySelector("#descripcion");
        nombre.disabled = false;
        descripcion.disabled = false;
        nombre.value = '';
        descripcion.value = '';
    }


    const nuevo = document.querySelector("#nuevo");

    nuevo.addEventListener('click', nuevoRegistro);
}


