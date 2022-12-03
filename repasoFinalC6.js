
const arrayCuentas = [
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        edadTitular: 33,
        tipoCuenta: "sueldo",
        saldo: 5,
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        edadTitular: 27,
        tipoCuenta: "sueldo",
        saldo: 3,
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: 4,
        edadTitular: 30,
        tipoCuenta: "sueldo",
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1,
        edadTitular: 34,
        tipoCuenta: "corriente",
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 8,
        edadTitular: 25,
        tipoCuenta: "corriente",
    },
    {
        titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 10,
      edadTitular: 34,
      tipoCuenta: "sueldo",
    }
];


let numeros = [4, 9, 1, 5, 7]

// VERIFICAR SI EL ARRAY numeros
// ESTA ORDENADO DE FORMA ASCENDENTE 
// DEVOLVER UN BOOLEANDO INDICANDO LA RESPUESTA

const verificarOrdenamiento = arr =>{

    

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {

            if( arr[j] > arr[j + 1] ){

                return false

            }
            
        }

    }

    return true

}




// DADA LA SIGUIENTE MATRIZ

let matriz = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]


// ANCHOR ---> UN SOLO CICLO
// ANCHOR ---> LE PIDO LA LONGITUD A LA FILA
// CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO 
// CON TODOS LOS ELEMENTOS DE LA FILA 2


const recorrerFila = (mat, fila) =>{

    let nuevoArr = []

    for (let i = 0; i < mat[fila].length; i++) {

        nuevoArr.push(mat[fila][i])
        
    }

    return nuevoArr

}

let elementosFila = recorrerFila(matriz, 2)
console.log(elementosFila)




// ANCHOR ---> UN SOLO CICLO
// ANCHOR ---> LE PIDO LA LONGITUD A MATRIZ
// CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS DE
// LA COLUMNA 0, POR UN STRING QUE DIGA "hola"

let matriz2 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

const modificarCol = (mat,col)=>{

    for (let i = 0; i < mat.length; i++) {

        mat[i][col] = "hola"
        
    }

}

modificarCol(matriz2, 0 )

console.table(matriz2)


// ANCHOR ---> UN SOLO CICLO
// ANCHOR ---> LE PIDO LA LONGITUD A MATRIZ
// CREAR UNA FUNCION QUE RETORNE EL TOTAL DE MULTIPLICAR TODOS
// LOS ELEMENTOS DE LA DIAGONAL PRINCIPAL

let matriz3 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
] // 18

const recorrerPrincipal = mat =>{

    let producto = 1 

    for (let i = 0; i < mat.length; i++) {

        producto *= mat[i][i]
        
    }

    return producto

}

let productoPrincipal = recorrerPrincipal(matriz3)
console.log( productoPrincipal )


// ANCHOR ---> UN SOLO CICLO
// ANCHOR ---> LE PIDO LA LONGITUD A MATRIZ
// CREAR UNA FUNCION QUE RETORNE EL TOTAL DE 
// LA SUMA DE LA DIAGONAL SECUNDARIA
let matriz4 = [

    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
] 

const recorrerSec = mat =>{

    let acc = 0

    for (let i = 0; i < mat.length; i++) {

        acc += mat[i][mat.length - 1 - i]
        
    }

    return acc

}

let totalSecundaria = recorrerSec(matriz4)
console.log(totalSecundaria)


// ANCHOR --> ACA DOBLE FOR
// CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR UN OBJETO VACIO
// CAMBIAR TODOS LOS ELEMENTOS IMPARES POR SU NEGATIVO

let matriz5 = [

    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9]

]

const recorrerMat = mat =>{

    for (let i = 0; i < mat.length; i++) { // i MANEJA LAS FILAS

        for (let j = 0; j < mat[i].length; j++) { // j MANEJA LAS COLUMNAS

            if( mat[i][j] % 2 !== 0 ){
                mat[i][j] = mat[i][j] * (-1)
            }
            
        }
        
    }

}

recorrerMat(matriz5)
console.table( matriz5 )

