
// ANCHOR : VARIABLES

// ANCHOR : TIPOS DE DATOS

// ANCHOR : OPERADORES

// VAR -----> YA NO SE USA

// LET Y CONST

// let nombre = "Jorge"

let nombre = "jorge";

let apellido = "Gonzalez";

const edad = 22;

// STRING o CADENA DE CARACTERES
// NUMBER o NUMEROS
// BOOLEANO ----> SI / NO  ( TRUE O FALSE )

let frase = 'hola mi edad es'

let cantidadMascotas = 3

let isLoggedUser = true

// OTROS DATOS
// UNDEFINED
// NULL
// NaN = NOT A NUMBER

let cantidadHermanos = undefined // TODAVIA NO FUE DEFINIDO

let hayUsuarios = null

console.log( cantidadHermanos )

let num1 = 2
let num2 = 3

let resultado = num1 * num2
// NaN
console.log( resultado )

// LINK OPERADORES ARITMETICOS

// - + / * ----- MODULO %

// PREGUNTO SI ES PAR
let esPar = (11 % 2 === 0)


// LINK OPERADORES DE COMPARACION

// SIEMPRE SIEMPRE SIEMPRE RETORNAR O DEVUELVEN EN UN BOOLEANO

10 <= 5

11 >= 2

12 == 2

let a = 2
let b = 15

console.log("----------------------")
console.log( a != b )
console.log( a !== b )
console.log( a == b )
console.log( a === b )

console.log("----------------------")

// LINK OPERADORES LOGICOS

// AND y OR ( && ---- ||)

let uno = "hola"
let dos = 15
let tres = "no se"


let verdaderoFalso = (dos <= 20 && uno === "hola" && 2 === 2)

let verdaderoFalso2 = (dos < 2 || uno === "chau" || 1 === 2)

console.log(verdaderoFalso)
console.log(verdaderoFalso2)