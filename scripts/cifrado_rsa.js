/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// CIFRADOS DE CLAVE PÚBLICA
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
// Cifrado RSA - Encriptación
/////////////////////////////////////////////////////////////////////////////////////
function encriptarRSA(textoOriginal, publica = 3, privada = 7, moduloRSA = 33, idioma = "Español"){
    var textoEncriptado = "";
    var abecedario = {};

    if (idioma == "Español"){
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "ñ": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26, " ": 27};
    }

    if (idioma == "Inglés"){
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25, " ": 26};
    }

    textoOriginal = textoOriginal.toLowerCase();
    textoOriginal = eliminarDiacriticos(textoOriginal);

    for (var indice = 0; indice < textoOriginal.length; indice++){
        letraActual = textoOriginal[indice];
        letras = Object.keys(abecedario);

        if (letraActual in abecedario){
            valorOriginal = abecedario[letraActual];
            valorCifrado = modular(Math.pow(valorOriginal,publica), moduloRSA);
            
            nCifras= valorCifrado.toString().length;
            if(nCifras == 1){
                letraCifrada = "0".concat(valorCifrado.toString());
            }
            else{
                letraCifrada = valorCifrado.toString();
            }
        }
        else{
            letraCifrada = "99";
        }

        textoEncriptado = textoEncriptado.concat(letraCifrada);
    }
    return textoEncriptado
}

/////////////////////////////////////////////////////////////////////////////////////
// Cifrado RSA - Desencriptación
/////////////////////////////////////////////////////////////////////////////////////
function desencriptarRSA(textoEncriptado, publica = 3, privada = 7, moduloRSA = 33, idioma = "Español"){
    var textoCifrado = textoEncriptado;
    var textoDesencriptado = "";
    var abecedario = {};

    if (idioma == "Español"){
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "ñ": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26, " ": 27};
    }

    if (idioma == "Inglés"){
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25, " ": 26};
    }

    for (var indice = 0; indice < textoCifrado.length; indice = indice + 2){
        numeroActual = parseInt(textoCifrado.slice(indice,indice+2));
        letras = Object.keys(abecedario);
    
        if(numeroActual != 99){
            numeroOriginal = modular(Math.pow(numeroActual,privada), moduloRSA);
            letraNueva = letras[numeroOriginal];
        }
        else{
            letraNueva = "";
        }
    
        textoDesencriptado = textoDesencriptado.concat(letraNueva);
    }
    return textoDesencriptado
}
