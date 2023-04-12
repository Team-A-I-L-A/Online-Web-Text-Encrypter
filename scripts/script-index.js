/////////////////////////////////////////////////////////////////////////////////////
// ABRIR Y CERRAR EL POP-UP DE CONFIGURACIÓN
/////////////////////////////////////////////////////////////////////////////////////

// Variables traídas de ID's del html (botón de configuración, botón de aceptar, botón de cancelar y el menú de configuración)
const abrirConfiguracion = document.querySelector('#abrir-configuracion');
const aceptarConfiguracion = document.querySelector('#aceptar-configuracion');
const cerrarConfiguracion = document.querySelector('#cerrar-configuracion');
const menuConfiguracion = document.querySelector('#menuConfiguracion');
var body = document.getElementById("paginaPrincipal"); 

// Radiobotón traído por nombre o name
var radiosBoton = document.getElementsByName("cifrado");

// Variables de estado de cifrado seleccionado
var cifradoPrevio = "aluraR";
var cifradoElegido = "aluraR";

// Ante el evento click sobre el botón de configuración, mostrar el modal (pop-up) del menú
abrirConfiguracion.addEventListener('click',()=>{
    menuConfiguracion.showModal();      // Abrir y mostrar pop-up
    body.style.overflowY = "hidden";    // Ocultar el scroll para evitar que pueda bajar o subir la página de fondo

    // Bucle para buscar cuál radiobotón está seleccionado y guardar su valor en una variable como previa configuración
    for(var indice = 0; indice < radiosBoton.length; indice++){
        if(radiosBoton[indice].checked){
            cifradoPrevio = radiosBoton[indice].value;
            cifradoElegido = cifradoPrevio;
            break;
        }
    }
}) 

// Ante el evento click sobre el botón cancelar, cerrar el modal (pop-up) del menú
cerrarConfiguracion.addEventListener('click',()=>{
    menuConfiguracion.close();          // Cerrar pop-up
    body.style.overflowY = "visible";   // Volver visible y activar el scroll

    cifradoElegido = cifradoPrevio;     // Cifrado elegido vuelve a ser el previo sin importar cambios

    // Se selecciona el radiobotón que previamente estaba seleccionado al iniciar el pop-up
    for(var indice = 0; indice < radiosBoton.length; indice++){
        if(radiosBoton[indice].value == cifradoPrevio){
            radiosBoton[indice].checked = true;
        }
        else{
            radiosBoton[indice].checked = false;
        }
    }
})

// Ante el evento click sobre el botón de aceptar, guardar el cifrado elegido por el usuario
aceptarConfiguracion.addEventListener('click',()=>{
    menuConfiguracion.close();          // Cerrar pop-up
    body.style.overflowY = "visible";   // Volver visible y activar el scroll
    
    // Bucle para buscar cuál radiobotón está seleccionado y guardar su valor en una variable configuración elegida
    for(var indice = 0; indice < radiosBoton.length; indice++){
        if(radiosBoton[indice].checked){
            cifradoElegido = radiosBoton[indice].value;
            break;
        }
    }
}) 


/////////////////////////////////////////////////////////////////////////////////////
// COPIAR TEXTO DE SALIDA AL PORTAPAPELES
/////////////////////////////////////////////////////////////////////////////////////
// Variables traídas de clases del html (botón de copiar)
const copiar = document.querySelector('.boton-co');

// Ante el evento click sobre el botón de configuración, mostrar el modal (pop-up) del menú
copiar.addEventListener('click',()=>{
    var outputArea = document.getElementById("labelOutputText");

    navigator.clipboard.writeText(outputArea.value)
}) 


/////////////////////////////////////////////////////////////////////////////////////
// ENCRIPTAR Y DESENCRIPTAR MENSAJES
/////////////////////////////////////////////////////////////////////////////////////

// Variables traídas de clases del html (botón de encriptar y desencriptar)
const encriptar = document.querySelector('.boton-e');
const desencriptar = document.querySelector('.boton-d');

// Ante el evento click sobre el botón de configuración, mostrar el modal (pop-up) del menú
encriptar.addEventListener('click',()=>{
    var textoInput = obtenerTextoInput();
    var textoProcesado = "";

    if(cifradoElegido == "aluraR"){
        textoProcesado = encriptarAlura(textoInput);
    }
    else{
        if(cifradoElegido == "cesarR"){
            textoProcesado = encriptarCesar(textoInput);
        }
        else{
            if(cifradoElegido == "hillR"){
                textoProcesado = encriptarHill(textoInput);
            }
            else{
                if(cifradoElegido == "afinR"){
                    textoProcesado = encriptarAfin(textoInput);
                }
                else{
                    if(cifradoElegido == "rsaR"){
                        textoProcesado = encriptarRSA(textoInput);
                    }
                    else{
                        textoProcesado = encriptarAlura(textoInput);
                    }
                }
            }
        }
    }

    mostrarTextoOutput(textoProcesado);
}) 

// Ante el evento click sobre el botón de configuración, mostrar el modal (pop-up) del menú
desencriptar.addEventListener('click',()=>{
    textoInput = obtenerTextoInput();
    var textoProcesado = "";

    if(cifradoElegido == "aluraR"){
        textoProcesado = desencriptarAlura(textoInput);
    }
    else{
        if(cifradoElegido == "cesarR"){
            textoProcesado = desencriptarCesar(textoInput);
        }
        else{
            if(cifradoElegido == "hillR"){
                textoProcesado = desencriptarHill(textoInput);
            }
            else{
                if(cifradoElegido == "afinR"){
                    textoProcesado = desencriptarAfin(textoInput);
                }
                else{
                    if(cifradoElegido == "rsaR"){
                        textoProcesado = desencriptarRSA(textoInput);
                    }
                    else{
                        textoProcesado = desencriptarAlura(textoInput);
                    }
                }
            }
        }
    }

    mostrarTextoOutput(textoProcesado);
}) 