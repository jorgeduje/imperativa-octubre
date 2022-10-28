let nombre = "pepito"
const saludar = ()=>{
    let nombre = "algo"
    return nombre

}

let saludo = saludar()
console.log( saludo )

// CREAR UNA FUNCION QUE DETERMINE SI EL NUMERO A ES MAYOR O IGUAL QUE B
// DEVOLVER UN BOOLEANO

const determinarSiEsMayor = (numA, numB)=> numA >= numB
let esMayor = determinarSiEsMayor(1, 5)
console.log(esMayor)

let edad = 12

console.log(edad)

// edad++

// edad = edad + 1
// edad += 1

edad -= 10

console.log(edad)

// CREAR UNA FUNCION QUE SUME 2 NUMEROS
// CREAR UNA FUNCION QUE DIVIDA EL NUM A POR EL NUMERO B
// CREAR UNA FUNCION QUE DEVUELVA EL PROMEDIO DE 3 NOTAS UTILIZANDO LAS 2 ANTERIORES

console.log("-----------------")
const sumarNumeros = (a,b) => a + b

sumarNumeros(20, 30) // 50

const dividirNumeros = (a,b) => a / b

const promedioDeTres = ( nota1, nota2, nota3 )=>{

    // let suma = sumarNumeros( sumarNumeros(nota1, nota2), nota3 )
    let suma1 = sumarNumeros(nota1, nota2) // 7
    let suma2 = sumarNumeros( suma1, nota3) // 14
    return suma2 / 3
    // let sumaFinal = sumarNumeros( suma1 , nota3)

}


const resultado = promedioDeTres(3, 5, 7)
console.log( resultado )



