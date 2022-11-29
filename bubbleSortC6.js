
// ANCHOR ALGORITMO BUBBLE SORT

let numeros = [2, 5, 4, 1, 7] // [ 2, 4, 1, 5, 7] // [2, 1, 4, 5, 7] // [1, 2, 4, 5, 7]

// ESTO NO LO PUEDEN USAR 
// numeros.sort( (a, b)=> b - a )

// console.log(numeros)

//  aux = numeros[0] // 2
// numeros[0] = numeros[1] // 5
// numeros[1] = aux // 2
// (elemento > siguiente ){

// }

// a es mas pequeña que la z y las mayusculas son mas pequeñas que las minisculas
let palabras = [ "casa", "mama", "avion" ] // [ "casa", "hola", "mama", "Zebra"]

// ASCENDENTE ( elemento > siguiente) O DESCENDENTE (elemento < siguiente)

const ordenar = (arr, ordenamiento )=>{

    // if( ordenamiento !== "ASC" && ordenamiento !== "DESC"){

    //     return "Lo siento la instruccion no es valida"

    // }

    let aux = undefined;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if( ordenamiento === "ASC"){
                if( arr[j] > arr[j + 1] ){

                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux
    
                }
            }else if( ordenamiento === "DESC"){
                if( arr[j] < arr[j + 1] ){

                    aux = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = aux
    
                }
            }

            
            
        }
        
    }

}

ordenar(numeros, "hola")
ordenar(palabras, "hola")

console.log( numeros )
console.log( palabras )

