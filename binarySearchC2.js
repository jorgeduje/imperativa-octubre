
// ANCHOR ALGORITMO BINARY SEARCH = BUSQUEDA BINARIA 


// LINK ----> ENCONTRAR LA POSICION DONDE SE ENCUENTRA EL NUMERO 12

 let numeros = [ 1, 3, 12, 15, 22]
// let numeros = [1, 12, 15, 16, 17]

// console.log( 0 )
// console.log( numeros.length - 1 )

// let posicionMedio = (0 + 4) / 2
// console.log( "posicionDelMedio: ", posicionMedio)

// numeros[posicionMedio] === 12 // NOOOO

// el 11 < 12 {
//  traigo el extremo izquierdo hasta la posicion del medio mas 1
// }

// el 11 > 12 {
//     traigo el extremo derecho hasta la posicion del medio menos  1

// }

// TODO : REALIZARLO DE FORMA VISUAL ---> posicion 2

// TODO : REALIZARLO CON PROGRAMACION FUNCIONAL ---> posicion 2

let indice = numeros.indexOf(12)
console.log(indice)

// TODO : REALIZARLO CON BUSQUEDA LINEAL

const encontrarIndice = ( arr, buscado )=>{


    for (let i = 0; i < arr.length; i++) {

        if( arr[i] === buscado ){
           return i
            // return arr[i]
        }

    }

}

let indiceLineal = encontrarIndice(numeros, 12)
console.log("lineal: ", indiceLineal)


// TODO : REALIZARLO CON BUSQUEDA BINARIA

// NECESITA QUE EL ARRAY ESTE ORDENADO DE FORMA ASCENDENTE

let numeros2 = [ 1, 2, 3, 5, 6, 12 ] 

const binary = (arr, buscado)=>{

    let min = 0 // 1
    let max = arr.length - 1 // 5 //  1 // 0
    let posicionMedio = undefined
    let encontrado = undefined

    while( min <= max ){

        posicionMedio = Math.floor( (min + max) / 2 ) // 2 // 0 // 1
        encontrado = arr[posicionMedio] // 16 // 11 // 14

        if( encontrado === buscado ){ 
            return posicionMedio 
        }


        if( encontrado > buscado ){ 
            
            max = posicionMedio - 1

        }else {

            min = posicionMedio + 1

        }

    }

    return "Lo siento el elemento no existe"

}

console.log(binary(numeros2, 12))