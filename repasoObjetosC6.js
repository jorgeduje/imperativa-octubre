

// ANCHOR ---> Repaso de condicionales y ciclos
// ANCHOR ---> Repaso de arreglos y objetos

 let productos = [
    {
     nombre: "motorola",
     precio: 40,
     cantidad: 5,
     categoria: "telefonia",
   },
   {
     nombre: "notebook",
     precio: 80,
     cantidad: 10,
     categoria: "computacion"
   },
   {
     nombre: "zapatilla",
     precio: 20,
     cantidad: 2,
     categoria: "indumentaria"
   },
   {
     nombre: "Macbook",
     precio: 100,
     cantidad: 7,
     categoria: "computacion"
   },
   {
     nombre: "samsung",
     precio: 35,
     cantidad: 15,
     categoria: "telefonia"
   },
   {
     nombre: "monitor",
     precio: 30,
     cantidad: 5,
     categoria: "computacion"
   }
   
   
 ] 

// TODO ---> Simulacion frontend E-commerce 

/* 
1)Las personas encargadas del backend nos enviaron una lista de productos pero 
    se olvidaron de asignarles un ID unico para cada producto,
    nuestra tarea es agregarles ese ID unico a cada uno
    Requisito: debe empezar en 1 y ser secuencial 
2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
    si se venden todos los productos que tenemos en stock
3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
    X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
    especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
    multiplicar dicho precio 
*/

// LINK ---> empieza a codear aqui abajo 💪💪💪


let perro = {
    nombre: "jack",
    edad: 2
}

perro.id = 1
perro.nombre = ""

// 1)

let productos2 = []

const generadorId = ( arreglo )=>{

   for( let i = 0; i < arreglo.length; i++ ){

        arreglo[i].id = i + 1

   }

}

generadorId( productos )

console.log( productos )


const calcularTotal = ( arr )=>{

    let acumulador = 0 // 150

    for(let i = 0 ; i < arr.length; i++){

      acumulador += arr[i].precio * arr[i].cantidad

    }

    return acumulador

}

let totalPorVender = calcularTotal(productos)

console.log( totalPorVender )


const filtrar = (arr, categoria)=>{

    let arrFiltrado = []

    for (let i = 0; i < arr.length; i++) {

        if( arr[i].categoria === categoria ){

            arrFiltrado.push( arr[i] )

        }
        
    }

   if( arrFiltrado.length > 0 ){
    return arrFiltrado
   }else{
    return "lo siento no hay elementos de esa categoria"
   }

}

let filtrados = filtrar(productos, "computacion")
console.log(filtrados)



const aumentarPrecio = (arr, categoria, aumento)=>{

    for (let i = 0; i < arr.length; i++) {

        if( arr[i].categoria === categoria ){

        //    arr[i].precio *= aumento
           arr[i].precio = arr[i].precio * aumento

        }
        
    }


}

aumentarPrecio(productos, "computacion", 1.2)

console.log(productos)