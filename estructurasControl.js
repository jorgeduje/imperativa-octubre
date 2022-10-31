
//ANCHOR CONDICIONALES ---> if / ternario / switch


// IF ELSE

const definiendoFlujoDeControl = ( rolDelUsuario )=>{

    // VENDEDOR / COMPRADOR / ADMINISTRADOR

    if( rolDelUsuario === "vendedor"){
        //BLOQUE DE CODIGO
        return "es un vendedor"
    }else if( rolDelUsuario ===  "comprador"){
        //BLOQUE DE CODIGO
       return "es un comprador"
    }else{
        //BLOQUE DE CODIGO
       return "es un admin"
    }

}

let rol = definiendoFlujoDeControl("vendedor")
console.log(rol)

// IF TERNARIO

const decirSiLlevaParaguas = clima => clima === "lluvioso" ? "si, llevalo" : "no, no hace falta"

let salgoConParaguas = decirSiLlevaParaguas("lluvioso")
console.log(salgoConParaguas)



const probandoSwitch = ( marcaDelAuto )=>{

    let impuesto = 2000
    let valorAuto = 0

    switch( marcaDelAuto ){
        case "volvo":
            valorAuto = 200
            break
        case "alfa romeo":
            valorAuto = 100
            break
        case "vw":
            valorAuto = 500
            break
        case "renault":
            valorAuto = 600
            break
        default:
            return "Lo siento no tengo el precio de esa marca"

    }

    let valorTotal = impuesto + valorAuto
    return valorTotal

}

let valorAuto = probandoSwitch("renault")

console.log( valorAuto )




// TODO :
/*
¿Puede subir?

 En un parque de diversiones nos piden un programa para verificar si los pasajeros de
 la montaña rusa pueden subir al juego.
 Crear una función puedeSubir() que reciba dos parámetros: altura de la persona y 
 si viene acompañada. Debe retornar un valor booleano (TRUE, FALSE) que indique si
 la persona puede subirse o no, basado en las siguientes condiciones:
 Debe medir más o igual de 1,40m y menos de 2 metros.
 Si mide menos de 1,40m hasta 1.20m, deberá venir acompañado.
 Si mide menos de 1,20m, no podrá subir ni acompañado.

*/


const puedeSubir = ( altura, vieneAcompañada )=>{

    let mensaje = ""

    if( altura >= 1.40 && altura < 2 ){
        mensaje = "Puede subir"
    }else if( altura < 1.40 && altura >= 1.20 && vieneAcompañada ){
        mensaje = "Puede subir pero acompañada"
    }else{
        mensaje = "no puede subir"
    }

    return mensaje

}

let tienePermiso = puedeSubir(2, true)
console.log(tienePermiso)