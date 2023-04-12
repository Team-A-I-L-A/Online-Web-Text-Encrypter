function crearMatriz2D(nFilas, nColumnas){
    var matriz = new Array(nFilas);
    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(nColumnas);
    }   

    return matriz
}

function lista2Matriz(lista, nFilas, nColumnas){
    var matriz = crearMatriz2D(nFilas, nColumnas);
  
    var indiceActual = 0;
    for (let i = 0; i < nColumnas; i++){
        for(let j = 0; j < nFilas; j++){
            matriz[j][i] = lista[indiceActual];
            indiceActual++;
        }
    }
  
    return matriz;
}

function multiplicarMatriz(matrizA, matrizB){
    resultado = crearMatriz2D(matrizA.length, matrizB[0].length);

    // Recorre las filas y columnas de la matriz resultante y multiplica cada elemento de la primera matriz por cada elemento de la segunda matriz
    for(let i = 0; i < matrizA.length; i++) {
        for(let j = 0; j < matrizB[0].length; j++) {
            let suma = 0;
            for (let k = 0; k < matrizA[0].length; k++) {
                suma += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = suma;
        }
    }

    return resultado;
}

function modularMatriz(matriz, modulo){
    matrizModulada = crearMatriz2D(matriz.length, matriz[0].length);

    // Recorre las filas y columnas de la matriz modulada agregando el valor de operación módulo por cada elemento
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[0].length; j++) {
            matrizModulada[i][j] = modular(matriz[i][j],modulo);
        }
    }

    return matrizModulada;
}

function minor(matrix, row, col) {
    let mini = new Array(matrix.length - 1);
    for (let i = 0; i < mini.length; i++) {
        mini[i] = new Array(matrix[0].length - 1);
    }
  
    let currentRow = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (i === row) continue;
        let currentCol = 0;
        for (let j = 0; j < matrix[0].length; j++) {
            if (j === col) continue;
                mini[currentRow][currentCol] = matrix[i][j];
                currentCol++;
        }
        currentRow++;
    }
  
    return mini;
}

// Función auxiliar para calcular el determinante de una matriz
function determinant(matriz) {
    // Si la matriz es de tamaño 1x1, devuelve el único elemento
    if (matriz.length == 1 && matriz[0].length == 1){
        return matriz[0][0];
    }

    // Si la matriz es de tamaño 2x2, devuelve el determinante como la diferencia de los productos de los elementos de la diagonal principal menos los elementos de la diagonal secundaria
    if (matriz.length == 2 && matriz[0].length == 2) {
        return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
    }

    // Si la matriz es de tamaño mayor que 2x2, divide la matriz en submatrices menores y suma o resta los productos de cada elemento de la primera fila por el determinante de la submatriz menor correspondiente según el signo (-1)^(i+j)
    let determinante = 0;
    for (let i = 0; i < matriz[0].length; i++) {
        let sign = (i % 2 === 0) ? 1 : -1;
        determinante += sign * matriz[0][i] * determinant(minor(matriz, 0, i));
    }

    return determinante;
}

function inverse(matriz) {
    // Verifica si la matriz es cuadrada y tiene un determinante distinto de cero
    if (matriz.length != matriz[0].length || determinant(matriz) == 0) {
        return "La matriz no tiene inversa.";
    }
  
    // Calcula la matriz adjunta de la matriz original
    let adjoint = new Array(matriz.length);
    for (let i = 0; i < adjoint.length; i++) {
        adjoint[i] = new Array(matriz[0].length);
    }
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            let sign = (i + j) % 2 == 0 ? 1 : -1;
            adjoint[i][j] = sign * determinant(minor(matriz, i, j));
        }
    }
  
    // Calcula la inversa de la matriz original como el inverso del determinante de la matriz original multiplicado por la matriz adjunta transpuesta
    let inverse = new Array(matriz.length);
    for (let i = 0; i < inverse.length; i++) {
        inverse[i] = new Array(matriz[0].length);
    }
    let determinantInv = 1 / determinant(matriz);
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            inverse[i][j] = determinantInv * adjoint[j][i];
        }
    }
    return inverse;
}
