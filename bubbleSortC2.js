
// ANCHOR ALGORITMO BUBBLE SORT == ORDENAMIENTO

// ASCENDENTE o DESCENDENTE


// ASC
let numeros = [ 5, 2, 6, 1, 7 ] // [ 2, 5, 1, 6, 7 ] // [2, 1, 5, 6, 7] [1, 2, 5, 6, 7]

// NO LO PUEDEN USAR 
// numeros.sort( (a, b)=> b - a)

// console.log(numeros)

// DESPUES DE EJECUTARLO 3 VECES QUEDO ORDENADO
// 4

//  clavos = "hay tornillos"
//  tornillos = "hay son clavos"

//   cajaX = "guardo los tornillos"
//   clavos = tornillos // CLAVOS
//   tornillos = cajaX // TORNILLOS


// LA a ES MAS PEQUEÑA QUE LA z 
// LAS MAYUSCULAS SON MAS PEQUEÑAS QUE LAS MINISCULAS

// let palabras = ["hola", "zebra", 1, "Casa", "Zebra", "ZEbra"] // []

const ordenar = ( arr, ordenamiento )=>{

    // ASC

    // if( ordenamiento !== "DESC" && ordenamiento !== "ASC"  ){
    //     return
    // }

    let aux = undefined

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - 1; j++) {
       
            if( ordenamiento === "ASC"){

                if( arr[j] > arr[j + 1]){
               
                    aux = arr[j]
                    arr[j] = arr[j + 1] // 2
                    arr[j + 1] = aux // 2
        
                }

            }else if( ordenamiento === "DESC"){

                if( arr[j] < arr[j + 1]){
               
                    aux = arr[j]
                    arr[j] = arr[j + 1] // 2
                    arr[j + 1] = aux // 2
        
                }
            }
            
            
        }
        
    }

}

ordenar(numeros, "ASC")
ordenar(palabras, "ASC")
console.log( numeros )
console.log( palabras )