
// MATRIZ -- ARRAY bidimensional 

// CREAR UNA MATRIZ DE 5 filas X 2 columnas

let matriz = [
   [2, 5, 1], // FILA 0
   [1, 7, 3, 5, 1], // FILA 1
]

let num = [1,2,5,12]

// console.log( mat[1][2] )

// console.log(matriz[2][1] )

// RECORRER LA FILA 0
// SOLO UN CICLO FOR
// LA FILA ES ESTATICA Y LA COLUMNA DINAMICA
// LE PIDO LA LONGITUD A ESA FILA

// mat[0][0]
// mat[0][1]
// mat[0][2]


const recorrerFila = ( mat, numDeFila )=>{

    let acc = 0

    for (let i = 0; i < mat[numDeFila].length; i++) {

      acc += mat[numDeFila][i] 
        
    }

    return acc

}

let resultadoFila = recorrerFila(matriz, 1)

console.log(resultadoFila)

// 3 x 3
let matrix = [
    [1, 2, 5],
    [5, 4],
    [5, 4, 4],
]

// RECORRER LA COLUMNA 2
// SOLO UN CICLO FOR
// LE PIDO LA LONGITUD A LA MATRIZ
// LA COLUMNA ES ESTATICA Y LA FILA DINAMICA

// mat[0][2]
// mat[1][2]
// mat[2][2]

const recorrerCol = (mat, numDeCol )=>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {
        
        if( mat[i][numDeCol] !== undefined ){

            acc += mat[i][numDeCol]
        }

    }

    return acc

}

console.log("-------------")

let resultadoCol = recorrerCol(matrix, 0)
console.log(resultadoCol)


// RECORRER TODA LA MATRIZ
// DOS CICLOS FOR


let matrixRecargada = [
    [1, 3, 2],
    [1, 5]
]

const recorrerMatrizCompleta = (mat)=>{

    // LA VARIABLE i ES LA QUE MANEJA LAS FILAS
    for (let i = 0; i < mat.length; i++) {

        console.log("estoy recorriendo la fila: " + i)
        console.log(`estoy recorriendo la fila: ${i}`)
        
        for(let j = 0; j < mat[i].length; j++ ){
            
            console.log( mat[i][j] )

        }

    }

}
console.log("-----")
recorrerMatrizCompleta(matrixRecargada)

let a = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]