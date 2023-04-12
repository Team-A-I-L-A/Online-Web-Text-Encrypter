function obtenerTextoInput(){
    inputArea = document.querySelector(".input-texto-box");
    
    return inputArea.value;
}

function mostrarTextoOutput(textoProcesado){
    outputArea = document.querySelector(".output-texto-box");

    outputArea.value = textoProcesado
}

// Elimina los diacríticos de un texto (ES6)
//
function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}