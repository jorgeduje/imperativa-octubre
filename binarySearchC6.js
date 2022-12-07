
// ANCHOR ALGORITMO BINARY SEARCH = BUSQUEDA BINARIA 

// LINK ----> ENCONTRAR LA POSICION DONDE SE ENCUENTRA EL NUMERO 12

let numeros = [ 1, 3, 12, 15, 22 ]

// TODO : REALIZARLO DE FORMA VISUAL ---> posicion 2

// TODO : REALIZARLO CON PROGRAMACION FUNCIONAL ---> posicion 2

let indice = numeros.indexOf(12)
console.log("con indexOf", indice)

// TODO : REALIZARLO CON BUSQUEDA LINEAL

const busquedaLineal = (arr, buscado)=>{

    for (let i = 0; i < arr.length; i++) {

        if( arr[i] === buscado ){

            return i

        }
        
    }


}

let resultadoLineal = busquedaLineal(numeros, 12)
console.log("lineal: ", resultadoLineal)


// TODO : REALIZARLO CON BUSQUEDA BINARIA


// min ---> 0
// max ---> array.length - 1 ---> 5
// posicionMedio == undefined ---> Math.floor((min + max) / 2) ---> 2.5
// encontrado == undefined ---> array[posicionMedio]

let numeros2 = [ 1, 3, 6, 12, 22 ] // 1

const binarySearch = (arr, buscado)=>{

    let min = 0 // 0 
    let max = arr.length - 1 // 4 // 1
    let posicionMedio = undefined
    let encontrado = undefined

    while( min <= max ){

        posicionMedio = Math.floor( (min + max) / 2 ) // 2 // 0
        encontrado = arr[posicionMedio]  // 6 // 1 

        if( encontrado === buscado ){ // 1 === 1
            return posicionMedio 
        }

        if( encontrado > buscado){ // 6 > 1 

            max = posicionMedio - 1

        }else{
            // CUANDO ENCONTRADO < BUSCADO
            min = posicionMedio + 1
        }
    }



}

binarySearch(numeros2, 12)




// NECESITA QUE EL ARRAY ESTE ORDENADO DE FORMA ASCENDENTE

