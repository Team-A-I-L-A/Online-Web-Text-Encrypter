/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// CIFRADOS DE CLAVE PRIVADA
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
// Cifrado Hill - Encriptación
/////////////////////////////////////////////////////////////////////////////////////
function encriptarHill(textoOriginal, clave = [[35,53,12],[12,21,5],[2,4,1]], idioma = "Inglés"){
    var textoEncriptado = "";
    var abecedario = {};
    var tamanioMatrizClave = clave.length;

    if (idioma == "Español"){
        var modulo = 28;
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "ñ": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26, " ": 27};
    }

    if (idioma == "Inglés"){
        var modulo = 27;
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25, " ": 26};
    }

    textoOriginal = textoOriginal.toLowerCase();
    textoOriginal = eliminarDiacriticos(textoOriginal);
    textoOriginal = textoOriginal.replace(/[^\w\s]/gi, "");

    var listaTextoOriginal = textoOriginal.split(""); 
    var listaNumeroOriginal = new Array();

    // Convertir lista de caracteres en lista de números
    for(var indice = 0; indice < listaTextoOriginal.length; indice++){
        letraActual = listaTextoOriginal[indice];
        numeroActual = abecedario[letraActual];
        listaNumeroOriginal.push(numeroActual);
    }

    // Agregar espacios hasta que la longitud de la lista sea múltiplo de 3
    while(listaNumeroOriginal.length%tamanioMatrizClave != 0){
        listaNumeroOriginal.push(abecedario[" "]);
    }

    var nFilas = tamanioMatrizClave;
    var nColumnas = listaNumeroOriginal.length/tamanioMatrizClave; 

    var matrizOriginal = lista2Matriz(listaNumeroOriginal,nFilas,nColumnas);
    var matrizProcesada = multiplicarMatriz(clave,matrizOriginal);
    var matrizEncriptada = modularMatriz(matrizProcesada,modulo);

    // Convertir matriz encriptada a texto encriptado
    for(var i = 0; i < matrizEncriptada[0].length; i++){
        for(var j = 0; j < matrizEncriptada.length; j++){
            letras = Object.keys(abecedario);
            letraNueva = letras[matrizEncriptada[j][i]];
            textoEncriptado = textoEncriptado.concat(letraNueva);
        }
    }

    return textoEncriptado
}

/////////////////////////////////////////////////////////////////////////////////////
// Cifrado Hill - Desencriptación
/////////////////////////////////////////////////////////////////////////////////////
function desencriptarHill(textoEncriptado, clave = [[35,53,12],[12,21,5],[2,4,1]], idioma = "Inglés"){
    var textoCifrado = textoEncriptado;
    var textoDesencriptado = "";
    var abecedario = {};
    var tamanioMatrizClave = clave.length;
    var claveInversa = inverse(clave);

    if (idioma == "Español"){
        var modulo = 28;
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "ñ": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26, " ": 27};
    }

    if (idioma == "Inglés"){
        var modulo = 27;
        abecedario = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25, " ": 26};
    }

    var listaTextoCifrado = textoCifrado.split(""); 
    var listaNumeroCifrado = new Array();

    // Convertir lista de caracteres en lista de números
    for(var indice = 0; indice < listaTextoCifrado.length; indice++){
        letraActual = listaTextoCifrado[indice];
        numeroActual = abecedario[letraActual];
        listaNumeroCifrado.push(numeroActual);
    }

    // Agregar espacios hasta que la longitud de la lista sea múltiplo de 3
    while(listaNumeroCifrado.length%tamanioMatrizClave != 0){
        listaNumeroCifrado.push(abecedario[" "]);
    }

    var nFilas = tamanioMatrizClave;
    var nColumnas = listaNumeroCifrado.length/tamanioMatrizClave; 

    console.log(modularMatriz(claveInversa,modulo))

    var matrizCifrada = lista2Matriz(listaNumeroCifrado,nFilas,nColumnas);
    var matrizDecodificada = multiplicarMatriz(modularMatriz(claveInversa,modulo),matrizCifrada);
    var matrizDesencriptada = modularMatriz(matrizDecodificada,modulo);

    // Convertir matriz desencriptada a texto desencriptado
    for(var i = 0; i < matrizDesencriptada[0].length; i++){
        for(var j = 0; j < matrizDesencriptada.length; j++){
            letras = Object.keys(abecedario);
            letraNueva = letras[matrizDesencriptada[j][i]];
            textoDesencriptado = textoDesencriptado.concat(letraNueva);
        }
    }

    return textoDesencriptado
}
