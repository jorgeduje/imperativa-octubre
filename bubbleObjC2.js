
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
        saldo: 2,
        estaHabilitada: false,
        edadTitular: 27,
        tipoCuenta: "sueldo",
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
    },
];

// if( !booleana ){

// }else{

// }

let num = [ 9, 2, 3, 5, 4 ]

const ordenar = arr =>{

    let aux;
    
    for( let i = 0; i < arr.length; i++ ){
        
        for( let j = 0; j < arr.length - 1; j++){
            
            if( arr[j].saldo < arr[j + 1].saldo ){

                aux = arr[j]
                arr[j] = arr[j + 1] // 2
                arr[j + 1] = aux // 9

            }

        }

    }

}

ordenar(arrayCuentas)

console.log( arrayCuentas )


// 2 > 1

// "hola" > "chau"

// {} > {} // ESTO NOOOOO

// {}.saldo > {}.saldo -DelSiguiente


// 3 x 3

let matrix = [
    [3, 2, 5],
    [1, 5, 4],
    [3, 9, 1],
]
// CREAR UN ARREGLO CON TODOS LOS ELEMENTOS DE LA FILA 2 Y RETORNARLo
const recorrerFila = (matrix) =>{

    let nuevoArreglo = [] // 3 - 9 - 1

    for (let i = 0; i < matrix[2].length; i++) {

        nuevoArreglo.push( matrix[2][i] )
        
    }

    return nuevoArreglo

}



let arrFila2 = recorrerFila(matrix)
console.log(arrFila2)


// cambiar todos los elementos de la fila 2 por un string 
// que diga hola

let matrix2 = [
    [3, 2, 5],
    [1, 5, 4],
    [3, 2, 1],
]

// CAMBIAR TODOS LOS ELEMENTOS DE LA FILA 2 por CEROS
const recorrerFila2 = (matrix) =>{


    for (let i = 0; i < matrix[2].length; i++) {

        
        if( matrix[2][i] > 0){

            matrix[2][i] = matrix[2][i] * ( -1 )
        }
        
        
        
    }


}

recorrerFila2(matrix2)

console.table(matrix2)




