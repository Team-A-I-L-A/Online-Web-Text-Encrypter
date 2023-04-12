function modular(valor, modulo){
    var resultado = (valor%modulo+modulo)%modulo;
    return resultado;
}

function invMulModular(valor, modulo){
    // Verificamos que valor y modulo sean números enteros y m sea mayor que 0
    if (!Number.isInteger(valor) || !Number.isInteger(modulo) || modulo <= 0) {
        console.log("No soy un entero")
        return null;
    }
  
    // Utilizamos el algoritmo de Euclides extendido para calcular el inverso multiplicativo
    let [valor_, modulo_, x, y] = [valor, modulo, 0, 1];
    while(valor_ != 0){
        [x, y] = [y, x - Math.floor(modulo_ / valor_) * y];
        [valor_, modulo_] = [modulo_ % valor_, valor_];
        console.log(y)
    }
  
    // Si el módulo es relativamente primo con valor, entonces el inverso multiplicativo existe
    if(modulo_ == 1){
        // Si y es negativo, añadimos modulo para hacerlo positivo
        if (y < 0) {
            y += modulo;
        }
  
        console.log("SÍ TENGO INVERSA")
        // Devolvemos el inverso multiplicativo
        return y;
    }   
    else {
        // Si m no es relativamente primo con valor, entonces el inverso multiplicativo no existe
        console.log("No somos coprimos")
        return null;
    }
  }