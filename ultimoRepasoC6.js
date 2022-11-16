
// function nombre (){

// }

// function(){

// }

// ()=>{

// }

// ANCHOR ---> ULTIMO REPASO, VAMOS QUE SE PUEDE 💪💪💪


// TODO ---> Completa el siguiente objeto con el metodo promediar
// El mismo debera calcular el promedio en base a la propiedad NOTAS

let estudiante = {
    nombre: "Carmen",
    notas: [8, 6, 10],
    edad: 20,
    promediar: function(){

        let sumatoria = 0

        for(let i = 0; i < this.notas.length; i++){

            sumatoria += this.notas[i]

        }

        let resultado = sumatoria / this.notas.length
        return resultado

    }
}

let promedioEstudiante =  estudiante.promediar()
console.log(promedioEstudiante)

estudiante.apellido = "perez"
estudiante.nombre = "Pepito"
estudiante.edad = 2

console.log(estudiante.edad)
// console.log( estudiante.promediar() )


// TODO ---> Encontrar el primer elemento que cumpla con la condicion de
// haber ganado un ticket y que ademas sea mayor de edad( 18 años o mas )
// deberas retornar dicho elemento

let participantes = [
    {
        nombre: "Florencia",
        edad: 22,
        ganoTicket: false
    },
    {
        nombre: "Juan Pablo",
        edad: 17,
        ganoTicket: true
    },
    {
        nombre: "Fernando",
        edad: 31,
        ganoTicket: false
    },
    {
        nombre: "Guillermina",
        edad: 27,
        ganoTicket: true
    },
    {
        nombre: "Gabriel",
        edad: 32,
        ganoTicket: true
    }

]

const recorrerParticipantes = ( arr )=>{

    let ganador = undefined

    for(let i = 0; i < arr.length; i++){
        if( arr[i].edad >= 18 && arr[i].ganoTicket === true){
            ganador = arr[i]
            break
        }
        
    }

    return ganador

}

let ganador = recorrerParticipantes(participantes)
console.log(ganador)


// TODO ---> Dado el siguiente arreglo de socios de una empresa
// se nos solicita filtrar a aquellos que tengan un total de 
// 1500 acciones o mas, pero ademas, ser parte de la empresa desde antes
// de este año( los del 2022 no cuentan)
// Devolver un arreglo con dichos socios

let socios = [
    {
        nombreCompleto: "Joel Perez",
        añoDeEntrada: 2018,
        cantidadAcciones: 3200
    },
    {
        nombreCompleto: "Juan Lopez",
        añoDeEntrada: 2022,
        cantidadAcciones: 4100
    },
    {
        nombreCompleto: "Carmen Lopettegi",
        añoDeEntrada: 2020,
        cantidadAcciones: 1900
    },
    {
        nombreCompleto: "Ernesto farias",
        añoDeEntrada: 2019,
        cantidadAcciones: 1300
    },
    {
        nombreCompleto: "Juana Gimenez",
        añoDeEntrada: 2022,
        cantidadAcciones: 1200
    },
]

const filtrarSocios = (arr)=>{

    let sociosFiltrados = []

    for(let i = 0; i < arr.length; i++){
        
        if( arr[i].añoDeEntrada < 2022 && arr[i].cantidadAcciones >= 1500 ){

            sociosFiltrados.push( arr[i].nombreCompleto )

        }
    }
    
    return sociosFiltrados

}


let sociosCapos = filtrarSocios(socios)
console.log(sociosCapos)

let num = [ 12, 54, 24, 2, 2]

const encontrarMayorMenor = (arr)=>{

    // let mayor = arr[0]
    let menor = arr[0]

    for (let i = 0; i < arr.length; i++) {
        // if( mayor < arr[i] ){
        //     mayor = arr[i]
        // }
        if( menor > arr[i] ){
            menor = arr[i]
        }
    }

    return menor

}

let menor = encontrarMayorMenor(num)
console.log(menor)

const socioMayorAcciones = (arr)=>{

    let sociosMayor = arr[0]

    for (let i = 1; i < arr.length; i++) {
        
        if( sociosMayor.cantidadAcciones < arr[i].cantidadAcciones){
            sociosMayor = arr[i]
        }

    }

    return sociosMayor


}

let socioMasAcciones = socioMayorAcciones(socios)

console.log(socioMasAcciones)