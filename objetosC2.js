
let peliculas = [ "hola", "chua", "nose"]

// peliculas[0] = peliculas[0].toUpperCase()
// peliculas[1] = peliculas[1].toUpperCase()
// peliculas[2] = peliculas[2].toUpperCase()

console.log(peliculas)

for (let i = 0; i < peliculas.length; i++) {
    
    peliculas[i] = peliculas[i].toUpperCase()
    
}

console.log(peliculas)

console.log("------")

let algo = function(){

}

// OBJETOS

    let arr = []

    // let nombrePerro = "pepito"
    // let colorPerro = "marron"
    // let edadPerro = 2

    // PARES DE CLAVE : VALOR
    // PROPIEDADES O METODOS

    // this

    let perro1 = {

        nombre: "pepito",
        color: "marron",
        edad: 2,
        esAdulto: false,
        saltar: function( x ){

            return "Estoy saltando" + x
        },
        informarDescripcion: function( ){
            return `Hola soy ${this.nombre} y tengo ${this.edad} años`
        },
        aumentarEdad: function( num ){

            this.edad += num
        }

    }
    
    console.log( perro1["color"] )
    console.log( perro1.color )

    console.log( perro1.saltar(" alto") )
    // HOLA SOY PEPITO Y TENGO 2 AÑOS
    perro1.nombre = "juancito"
    console.log( perro1.informarDescripcion() )

    console.log(perro1.edad)

    perro1.aumentarEdad(5)

    console.log( perro1.edad )

console.log("--------")
console.log("--------")
console.log("--------")

   

    

    // Agregar propiedas o modificar existentes

    let persona = {
        nombre: "maria",
        edad: 30
    }


    persona.nombre = "carmen"
    persona.apellido  = "perez" 
    persona.decirNombre = function(){
        return "hola"
    }

    
    delete persona.edad

    console.log(persona)


    let productos = [
        {
            nombre: "televisor",
            stock: 12,
            descontarStock: function( cantidad ){
                this.stock -= cantidad
            }
        }, 
        {
            nombre: "celular",
            stock: 10,
            descontarStock: function( cantidad ){
                this.stock -= cantidad
            }
        },
        {
            nombre: "tablet",
            stock: 5,
            descontarStock: function( cantidad ){
                this.stock -= cantidad
            }
        } 
    ]

    const probando = ( arr )=>{

        for(let i = 0; i < arr.length; i++ ){
            
            arr[i].descontarStock(1)

        }

    }

    probando(productos)


    for (let i = 0; i < productos.length; i++) {
        
        console.log( productos[i].stock )
        
    }