const radios = document.querySelectorAll("#pelicula");

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        const valor = radios[i].value;
   
        const renglon = document.querySelector("#_" + valor);
        
        const idpelicula = document.querySelector("#idpelicula");
        const nombre = document.querySelector("#nombre");
        const genero = document.querySelector("#genero");
        const soporte = document.querySelector("#soporte");
    
        nombre.disabled = true;
        genero.disabled = true;
        soporte.disabled = true;
        idpelicula.value = valor;
        nombre.value = renglon.childNodes[1].textContent;
        genero.value = renglon.dataset.idgenero;
        soporte.value = renglon.dataset.idsoporte;
        
    });
}
 function nuevoRegistro() {
        const nombre = document.querySelector("#nombre");
        const idpelicula = document.querySelector("#idpelicula");
        const genero = document.querySelector("#genero");
        const soporte = document.querySelector("#soporte");
        nombre.disabled = false;
        genero.disabled = false;
        soporte.disabled = false;
        idpelicula.value = '';
        nombre.value = '';
        
    }

    function modificarRegistro() {
        const nombre = document.querySelector("#nombre");
        const idpelicula = document.querySelector("#idpelicula");
        const genero = document.querySelector("#genero");
        const soporte = document.querySelector("#soporte");
        nombre.disabled = false;
        genero.disabled = false;
        soporte.disabled = false;
        
    }

    const nuevo = document.querySelector("#nuevo");
    const modificar = document.querySelector("#modificar");

    nuevo.addEventListener('click', nuevoRegistro);
    modificar.addEventListener('click', modificarRegistro);
