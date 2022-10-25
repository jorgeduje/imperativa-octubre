
// ANCHOR : VARIABLES

// ANCHOR : TIPOS DE DATOS

// ANCHOR : OPERADORES


// VARIABLES
// PALABRA CLAVE / NOMBRE / EL SIGNO = / LO QUE QUIERO GUARDAR

// var

// let y const

let nombre = 'jorge'

let apellido = "Duje"

const DNI = "12314123124"

console.log(nombre)

nombre = "pepito"

console.log( nombre )

// STRING ---> CADENAS DE TEXTO
// NUMBER ---> NUMEROS 
// BOOLEANOS ---> SI O NO (TRUE / FALSE)

let edad = 30.5

edad = edad + 1
console.log(edad)

let frase = "a"

console.log(frase)

let elUsuarioEstaLogeado = false

elUsuarioEstaLogeado = true

// UNDEFINED 
// NULL
// NaN / NOT A NUMBER

let nombreUsuario = undefined

console.log( nombreUsuario )

let hayUsuariosConectados = null

let num1 = "hola"
let num2 = "chau"

let resultado = num1 + num2

console.log( resultado )

// ARITMETICOS 
// + - / * -----> %

console.log( 12 % 3 )

// DETERMINAR SI EL NUMERO DADO ES MULTIPLO DE 7 

let numeroDado = 14

let elNumeroDadoEsMultiplo = ( numeroDado % 7 ) === 0

console.log( elNumeroDadoEsMultiplo )


let num  = 15

let esPar = num % 2 === 0


// OPERADORES DE COMPARACION 

// SIEMPRE DEVUELVEN UN BOOLEANO 

12 > 15

51 < 66

66 <= 66

12 >= 1231

//LINK -
console.log("--------------------")
console.log("--------------------")
console.log("--------------------")

let x = "15"
let y = 15

// COMPARACION SIMPLE
let res = x == y
let res2 = x != y

// COMPARACION Estricta

let res3 = x === y
let res4 = x !== y

console.log(res2)
console.log(res4)

// OPERADORES LOGICOS

// AND y OR 

// AND &&
// OR ||
console.log("-----------")
let edaddd = 28
let nombreee = "pepito"

let loDejoIngresar = edaddd >= 25 && (nombreee === "pepito" || nombre === "maria") && 10 > 25

console.log("----------")
let loDejoEntrar2 = edaddd >= 50 || nombreee === "pepitos" || 10 > 100

console.log( loDejoEntrar2 )

let nom = "pepito"
let apell = "Perez"
console.log( nom + " " + apell )

let saludo = `Hola ${nom} como estas?`

console.log(saludo)

