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
        saldo: [1, 2, 3],
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: [21, 21, 23],
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

// VERIFICAR SI EL ARRAY DE CUENTAS
// ESTA ORDENADO DE FORMA ASCENDENTE SEGUN EL SALDO
// DEVOLVER UN BOOLEANDO INDICANDO LA RESPUESTA

let num = [ 2, 5, 9, 12]

const verificarOrden = arr =>{

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {

            if( arr[j] > arr[j + 1] ){

                return false

            }
            
        }

    }

    return true

}


let arrOrdenado = verificarOrden(num)
console.log( arrOrdenado )

// DADA LA SIGUIENTE MATRIZ

let matriz = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]


// ANCHOR ---> UN SOLO CICLO
// CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO 
// CON TODOS LOS ELEMENTOS DE LA FILA 2


const elNombreDeLaFuncion = (mat)=>{

    let arrNuevo = []

    for (let i = 0; i < mat[2].length; i++) {

        arrNuevo.push(mat[2][i])
        
    }

    return arrNuevo

}

let matriz2 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

// CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS DE
// LA COLUMNA 0, POR UN STRING QUE DIGA "hola"

const recorrerCol = mat =>{

    for (let i = 0; i < mat.length; i++) {

        mat[i][0] = "hola"
        
    }

}

let matriz3 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

// CREAR UNA FUNCION QUE RETORNE EL TOTAL DE MULTIPLICAR TODOS
// LOS ELEMENTOS DE LA DIAGONAL PRINCIPAL

const recorrerPrincipal = mat =>{

    let acc = 1 // 18

    for (let i = 0; i < mat.length; i++) {
        
        acc *= mat[i][i]

    }

    return acc
}


let matriz4 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]
// CREAR UNA FUNCION QUE RETORNE EL TOTAL DE 
// LA SUMA DE LA DIAGONAL SECUNDARIA

const recorrerSec = mat => {

    let acc = 0

    for (let i = 0; i < mat.length; i++) {

        acc += mat[i][ mat.length - 1 - i ]
        
    }

    return acc

}



let matriz5 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]
// ANCHOR --> ACA DOBLE FOR
// CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR UN OBJETO VACIO


const recorrerMat = mat =>{

    for (let i = 0; i < mat.length; i++) { // MANEJA LAS FILAS

        for (let j = 0; j < mat[i].length; j++) { // MANEJA LAS COLUMNAS
            
            mat[i][j] = {}

        }
        
    }

}

recorrerMat(matriz5)

console.table(matriz5)