
// ANCHOR ---> MODULO 3 <Algoritmos />

// CREAR UNA FUNCION QUE RECIBA 2 NUMEROS Y DEVUELVA EL MAYOR
// SI SON IGUALES QUE DEVUELVA CUALQUIERA DE LOS 2

const determinarMayor = (num1, num2)=>{

    if(num1 > num2){
        return num1
    }else{
        return num2
    }

}



// 4, 12, 54, 8

let mayorEntre4 = determinarMayor( determinarMayor( 4, 12 ) ,  determinarMayor( 54, 8 ) )

console.log(mayorEntre4)


// MATH 

let numeros = [1, 2, 3, 10]

// let copiaNumeros = [...numeros]

// copiaNumeros.push(30)

// console.log(numeros)
// console.log(copiaNumeros)



let mayorMath = Math.min(...numeros)

console.log(mayorMath)


// FLOOR, CEIL, ROUND

// Math.floor ---> llevar un numero decimal, al suelo 3.8 --- 3
// Math.ceil --->  llevar un numero decimal, al techo 3.2 --- 4
// Math.round ---> llevar un numero decimal a su entero mas cercano 3.2 --- 3 // 3.6 --- 4

let num = 5.1
let numDos = 2.4

console.log( Math.floor(num) )
console.log( Math.ceil(num) )
console.log( Math.round(numDos) )

// MATRIZ
let arr = [ 12, 54, 22 ]

console.log( arr[2] )

let mat = [
    [11, 42, 13], // FILAS 0
    [12, 15, 11], // FILAS 1
    [65, 12, 43],  // FILAS 2
    [11, 54, 22, 41, 12],  // FILAS 3
]

// 3 x 3 --- 3 filas x 3 columnas

console.log( mat[1][2] )

mat.push([])

console.table( mat )


let persona = {
    nombre: "Pepito",
    edad: 2
}

let persona2 = {...persona}
persona2.nombre = "jose"

console.log(persona)
console.log(persona2)