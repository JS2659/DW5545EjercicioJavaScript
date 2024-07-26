function calcular(){
    let largo = document.getElementById("Largo").value;
    let ancho = document.getElementById("Ancho").value;
    let respuesta = document.getElementById("Respuesta");
    if (largo > 0 && ancho > 0){
        respuesta.value = largo * ancho

    }else{
        alert("El Largo y el Ancho deben ser mayores a 0");
    }
}

function limpiar(){
    let largo = document.getElementById("Largo");
    let ancho = document.getElementById("Ancho");
    let respuesta = document.getElementById("Respuesta");

    largo.value = 0;
    ancho.value = 0;
    respuesta.value = 0;
}