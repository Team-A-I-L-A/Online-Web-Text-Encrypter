/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// CIFRADOS AVANZADOS
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
// Cifrado Alura - Encriptación
/////////////////////////////////////////////////////////////////////////////////////

function encriptarAlura(textoOriginal){
    var textoEncriptado = "";
    var letraEncriptada = "";
    var letraActual = "";

    for (var indice = 0; indice < textoOriginal.length; indice++){
        letraActual = textoOriginal[indice]
        if (letraActual == "a"){
            letraEncriptada = "ai";
        }
        else{
            if (letraActual == "e"){
                letraEncriptada = "enter";
            }
            else{
                if (letraActual == "i"){
                    letraEncriptada = "imes";
                }
                else{
                    if (letraActual == "o"){
                        letraEncriptada = "ober";
                    }
                    else{
                        if (letraActual == "u"){
                            letraEncriptada = "ufat";
                        }
                        else{
                            letraEncriptada = letraActual
                        }
                    }
                }
            }
        }
        textoEncriptado = textoEncriptado.concat(letraEncriptada);
    }

    return textoEncriptado;
}

/////////////////////////////////////////////////////////////////////////////////////
// Cifrado Alura - Desencriptación
/////////////////////////////////////////////////////////////////////////////////////

function desencriptarAlura(textoEncriptado){
    var textoDesencriptado = textoEncriptado;

    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");

    return textoDesencriptado;
}