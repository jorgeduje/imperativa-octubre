



// ANCHOR ----> FUNCIONES DECLARADAS Y EXPRESADAS

// HOISTING

// TODO FUNCIONES DECLARADAS

console.log(saludar())
function saludar (){

    // BLOQUE DE CODIGO
    return "hola"

}

// TODO FUNCIONES EXPRESADAS O ANONIMAS

// EXPRESA COMUN

let restar = function (){
    // BLOQUE DE CODIGO

}

//EXPRESA ---> ARROW FUNCTION / FUNCION FLECHA

let multiplicar = ()=>{
    // BLOQUE DE CODIGO
    let num1 = 12
    let num2 = 2
    return num1 * num2
}

let resultado = multiplicar()

// console.log(resultado)


let sumar = (num1, num2)=>{
    
    return num1 + num2
    
}
console.log( sumar(2, 3) )




// CREAR UNA FUNCION QUE ME DEVUELVA EL PROMEDIO DE 3 NOTAS

let promediar = (a, b, c)=>{

    let suma = a + b + c
    let resultado = suma / 3

    return resultado

}

let nota1 = 5
let nota2 = 10
let nota3 = 6

let alumno1 = promediar(8, 9, 10)
console.log( alumno1 )

let alumno2 = promediar(1, 2, 3)
console.log(alumno2)

let alumno3 = promediar(nota1, nota2, nota3)

console.log(alumno3)


// SCOPE ----> ALCANZE 



let nombre = "jorge"
let a = 12

const saludar2 = (  )=>{
    
    // return "hola " + nombre
    return `Hola ${nombre}`

}

console.log( saludar2() )



