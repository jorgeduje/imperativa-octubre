
// NOTA CONCEPTO ---> 10%
// NOTA PARCIAL  ---> 30% 
// NOTA FINAL    ---> 60% ---- X 
// NOTA DE MATERIA --- X

// ANCHOR ---> MATRICES 


let numeros = [1, 2, 4]
// 3 filas X 3 columnas
let matriz = [
    [1, 4, 5], // FILA 0 
    [2, 6, 1, 6], // FILA 1
]


// matriz[1][0]
// matriz[1][1]
// matriz[1][2]
// matriz[1][3]




// RECORRER FILA 1

// Tips CUANDO RECORRO UNA FILA LE PIDO LA LOGITUD A ESA FILA
// Tips LA FILA ES ESTATICA Y LA COLUMNA DINAMICA

const recorrerFila = ( mat )=>{

    let acc = 0

    for (let i = 0; i < mat[1].length; i++) {

        if( mat[1][i] % 2 === 0){

            acc += mat[1][i] 

        }
    }

    return acc

}

// recorrerFila(matriz, 0)
// console.log("------")
let resultadoFilaUno = recorrerFila(matriz)

console.log(resultadoFilaUno)

let matriz2 = [
    [1, 4, 5], // FILA 0 
    [2, 6, 1, 6], // FILA 1
    [2, 6], // FILA 2
    [2, 6, 7, 6], // FILA 3
]

matriz2[0][2]
matriz2[1][2]

// RECORRER COLUMNA 2
// Tips CUANDO RECORRE UNA COLUMNA LE PIDO LA LONGITUD A LA MATRIZ
// 

const recorrerCol = (mat)=>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {

        if( mat[i][2] !== undefined ){
            // VALIDAR QUE LA COLUMNA EXISTA EN LA FILA
            // QUE SE ESTA ITERANDO
            acc += mat[i][2]
        }
        
    }

    return acc

}

console.log("----")

let resultadoCol =  recorrerCol(matriz2)
console.log(resultadoCol)


let matrix = [
    [1,2,5],
    [2,5,6]
]

// RECORRER LA MATRIZ COMPLETA

const recorrerMatriz = ( mat )=>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {
        console.log(`estoy recorriendo la fila de la posicion ${i}`)

        for (let j = 0; j < mat[i].length; j++) {
            
            acc += mat[i][j] 

        }


        console.log("aca termine de iterar la fila")
    }

    console.log("termine de recorrer toda la mat")

    return acc
}
console.log("-----")
let resultadoMat = recorrerMatriz(matrix)
console.log(resultadoMat)