

// ANCHOR ---> ULTIMO REPASO, VAMOS QUE SE PUEDE 💪💪💪


// TODO ---> Completa el siguiente objeto con el metodo promediar
// El mismo debera calcular el promedio en base a la propiedad NOTAS

let estudiante = {
    nombre: "Carmen",
    notas: [8, 6, 10],
    promediar: function(){

        let sumatoria = 0
        
        for(let i = 0; i < this.notas.length; i++){
            
            sumatoria += this.notas[i]
            
        }
        
        let promedio = sumatoria / this.notas.length
        return promedio
        
    }
}

let promedioAlumno =  estudiante.promediar()
console.log( promedioAlumno )

// console.log( estudiante."nombre" )
// console.log( estudiante["nombre"] )

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

const encontrar = ( arr )=>{


    for(let i = 0; i < arr.length; i++){

        if( arr[i].ganoTicket === true && arr[i].edad >= 18 ){

            return arr[i]

        }

    }

    return "No hubo ningun participante que cumpla dichas condiciones!!"

}

let encontrado = encontrar(participantes)
console.log(encontrado)

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


const sociosCapos = ( arr )=>{

    let arrFiltrado = []

        for(let i = 0; i < arr.length; i++){
            
            if( arr[i].cantidadAcciones >= 1500 && arr[i].añoDeEntrada < 2022 ){
            
                arrFiltrado.push( arr[i] )

            }

        }

        return arrFiltrado


}

let sociosFiltrados =  sociosCapos(socios)
console.log(sociosFiltrados)


// CREAR UNA FUNCION QUE RECIBA 2 NUMEROS POR PARAMETROS 
// VERIFICAR QUE SEAN PÄRES y RETORNE LA MULTIPLICACION

const multiplicar = (a, b) => {
    if( a % 2 === 0 && b % 2 === 0){
        return a * b
    }
}


const mostrarPropiedad = (obj, prop)=>{
    console.log(obj[prop])
}
mostrarPropiedad(estudiante, "nombre")


