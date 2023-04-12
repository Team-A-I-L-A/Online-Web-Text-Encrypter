/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// CIFRADOS DE CLAVE PRIVADA
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
// Cifrado César - Encriptación
/////////////////////////////////////////////////////////////////////////////////////
function encriptarCesar(textoOriginal, desplazamiento = 8, idioma = "Español"){
    var textoEncriptado = "";
    var abecedario = {};

    if (idioma == "Español"){
        var modulo = 27;
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "ñ": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26};
    }

    if (idioma == "Inglés"){
        var modulo = 26;
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25};
    }

    textoOriginal = textoOriginal.toLowerCase();
    textoOriginal = eliminarDiacriticos(textoOriginal);

    for (var indice = 0; indice < textoOriginal.length; indice++){
        letraActual = textoOriginal[indice];
        letras = Object.keys(abecedario);

        if (letraActual in abecedario){
            posicionActual = abecedario[letraActual]
            posicionNueva = (posicionActual + desplazamiento) % modulo
        
            letraNueva = letras[posicionNueva];
        }
        else{
            letraNueva = letraActual;
        }

        textoEncriptado = textoEncriptado.concat(letraNueva);
    }
    return textoEncriptado
}

/////////////////////////////////////////////////////////////////////////////////////
// Cifrado César - Desencriptación
/////////////////////////////////////////////////////////////////////////////////////
function desencriptarCesar(textoEncriptado, desplazamiento = 8, idioma = "Español"){
    var textoCifrado = textoEncriptado;
    var textoDesencriptado = "";
    var abecedario = {};
    
    if (idioma == "Español"){
        var modulo = 27;
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "ñ": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26};
    }
    
    if (idioma == "Inglés"){
        var modulo = 26;
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25};
    }
    
    for (var indice = 0; indice < textoCifrado.length; indice++){
        letraActual = textoCifrado[indice];
        letras = Object.keys(abecedario);
    
        if (letraActual in abecedario){
            posicionActual = abecedario[letraActual]
            posicionNueva = (modulo + posicionActual - desplazamiento) % modulo
        
            letraNueva = letras[posicionNueva];
        }
        else{
            letraNueva = letraActual;
        }
    
        textoDesencriptado = textoDesencriptado.concat(letraNueva);
    }
    return textoDesencriptado
}
