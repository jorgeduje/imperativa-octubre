
const arrayCuentas = [
    {
        titular: "Roslyn Torres",
        saldo: 2,
        estaHabilitada: false,
        edadTitular: 27,
        tipoCuenta: "sueldo",
    },
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        edadTitular: 33,
        tipoCuenta: "sueldo",
        saldo: 5,
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: 3,
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

// ASC

let numero = [ 3, 2, 1 ] 
let palabras = [ "hola", "chau", "casa", "mama"]

// 9 > 2

// "hola" > "chau"

// {} > {} --> ESTO NO SE PUEDE

const ordenar = (arr) =>{

    // let aux = undefined
    let aux 

    for(let i = 0 ; i < arr.length; i++ ){

        for(let j = 0; j < arr.length - 1; j++){

            if( arr[j].saldo > arr[j + 1].saldo){

                aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux

            }

        }

    }

}

ordenar(arrayCuentas)
console.log( arrayCuentas )

// truthy -- 1 
// falsy -- 0 


// let obj = {
//     nombre: "algo",
//     edad: 21
// }

// obj.edad
// obj["edad"]

// MATRICES 


// RECORRER UNA FILA
// CAMBIAR TODOS LOS ELEMENTOS DE LA FILA 2 POR UN STRING QUE DIGA "HOLA"
// DEVOLVER UN NUEVO ARREGLO CON TODOS LOS ELEMENTOS DE LA FILA 2
// SUMAR TODOS LOS ELEMENTOS DE LA FILA 2

let matrix = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

const recorrerFila = (mat, fila)=>{

    let acc = 0

    for( let i = 0; i < mat[fila].length; i++ ){

       acc += mat[fila][i] 

    }

    return acc

}

recorrerFila(matrix, 2)

console.table( matrix )


// RECORRER UNA COLUMNA

// CAMBIAR TODOS LOS ELEMENTOS DE LA COLUMNA 0 , por sus valores negativos

let matrix2 = [
    [2, 4, 3],
    [3, 1, 5],
    [-8, 4, 9],
]
// ANCHOR ELEMENTO
const recorrerCol = (mat, columna)=>{

    for(let i = 0; i < mat.length; i++ ){

        if( mat[i][columna] > 0 ){
            mat[i][columna] =  "HOLA ELEMENTO"
        }

    }

}

recorrerCol(matrix2, 0)
console.table(matrix2)



// RECORRER LA PRINCIPAL
// CAMBIAR LOS ELEMENTOS DE LA DIAGONAL PRINCIPAL POR UN OBJETO VACIO

// CALCULAR EL TOTAL, DE MULTIPLICAR TODOS LOS ELEMENTOS DE 
// LA DIAGONAL PRINCIPAL, ( SOLO LOS IMPARES )

let matrix3 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
]

const recorrerPrincipal = mat =>{

    let acc = 1

    for(let i = 0; i < mat.length; i++){

        // mat[i][i] = {}

        if( mat[i][i] % 2 !== 0  ){
            acc *= mat[i][i] 
        }

    }

    return acc 

}

let accPrincipal = recorrerPrincipal(matrix3)
console.log(accPrincipal)


// RECORRER LA MATRIZ
// RECORRER LA SECUNDARIA



