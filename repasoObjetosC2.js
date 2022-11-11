
/* TODO :
    A partir de un array de correos, recorrerlo para corroborar si son válidos. 
    Para ello, por el momento, debemos buscar el carácter “@” en cada elemento y 
    agregar aquellos que lo tengan al array de correos admitidos.
    En caso de no encontrar el carácter, se deberá agregar al array de correos descartados.
    Desarrollar una función que realice la verificación de cada elemento del array 
    de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos. Caso contrario, 
    agregar al arrayCorreoDescartados (vaciar el array de correos pendientes).
    Mostrar por pantalla la cantidad y los elementos de cada array.
*/

// PARA SER VALIDO DEBE CONTENER UN @
let arrayCorreosPendientes = [
    "iroman@digitalhouse.com", // si
    "loki%digitalhouse.com", // no
    "loki@digitalhouse.com", // si
    "thanosdigitalhouse.com", // no
    "thanos@digitalhouse.com", // si
];

// array de correos admitidos
let arrayCorreosAdmitidos = [
   
];

// array de correos descartados

let arrayCorreosDescartados = [
    
];



const verificadorDeCorreos = ( correos )=>{

    for(let i = 0; i < correos.length; i++ ){

        // if( correos[i].includes("@") ){
        if(correos[i].indexOf("@") !== -1){
            arrayCorreosAdmitidos.push( correos[i] )
        }else{
            arrayCorreosDescartados.push( correos[i] )
        }

    }

    arrayCorreosPendientes = []

}

verificadorDeCorreos(arrayCorreosPendientes)

console.log("pendientes: ", arrayCorreosPendientes)
console.log("admitidos: ", arrayCorreosAdmitidos)
console.log("descartados: ", arrayCorreosDescartados)










    // Ejercicio 2):
        // Vamos a simular un E-commerce
        // Para eso, necesitamos crear un arreglo que contendra los productos
        // Cada producto tendra ( nombre, descripcion, precio, cantidad, categoria)
        // Ahora, como dueño de la empresa, queremos saber cuanto dinero nos 
        // ingresaria si se venden todos los productos que tenemos en stock
        // Ademas de eso, nos dimos cuenta que nuestros productos no tienen ID
        // para ello deberemos tambien recorrer el arreglo y agregarle a cada producto 
        // un ID que empieze en 1 y que vaya incrementando
        //  incrementar en un 20% todos los productos de categoria "computacion"

    
        let productos = [
            {
             nombre: "celular",
             descripcion: "es un celular",
             precio: 30,
             cantidad: 5,
             categoria: "telefonia",
           },
           {
             nombre: "notebook",
             descripcion: "es una computadora",
             precio: 50,
             cantidad: 10,
             categoria: "computacion"
           },
           {
             nombre: "zapatilla",
             descripcion: "es una zapatilla",
             precio: 20,
             cantidad: 2,
             categoria: "indumentaria"
           },
           {
             nombre: "Macbook",
             descripcion: "es una computadora Mac",
             precio: 100,
             cantidad: 5,
             categoria: "computacion"
           },
           {
             nombre: "samsung",
             descripcion: "es una computadora Mac",
             precio: 222,
             cantidad: 5,
             categoria: "telefonia"
           },
           {
             nombre: "motorola",
             descripcion: "es una computadora Mac",
             precio: 100,
             cantidad: 5,
             categoria: "telefonia"
           },
           
     
         ] 


const calcularTotal = ( array )=>{

    let sumaTotal = 0 // 12

    for(let i = 0; i < array.length ; i++){

        sumaTotal +=  (array[i].precio * array[i].cantidad)

    }

    return sumaTotal

}

let totalVendido = calcularTotal(productos)
console.log(totalVendido)

const generadorId = (arr)=>{

   for (let i = 0; i < arr.length; i++) {

    arr[i].id = i + 1
    
   }

}

generadorId(productos)
console.log(productos)


const aumentarPrecio = (arr)=>{

    
    for (let i = 0; i < arr.length; i++) {
        
        if( arr[i].categoria === "computacion" ){

            // arr[i].precio = arr[i].precio * 1.20
            arr[i].precio *= 1.20

        }

    }

}

aumentarPrecio( productos )

console.log( productos )

const filtrar = (arr)=>{

    let arrFiltrado = [] 

    for (let i = 0; i < arr.length; i++) {

        if( arr[i].categoria === "telefonia" ){

            arrFiltrado.push( arr[i] )

        }
        
    }

    return arrFiltrado

}
console.log("------------------")
console.log("------------------")
console.log("------------------")

let arrTelefonia = filtrar(productos)

console.log(arrTelefonia)

console.log("------------")
console.log("------------")
console.log("------------")


// ESTO NO LO PUEDEN USAR
// let arrTelefonia = productos.filter( elemento => elemento.categoria === "telefonia")
// console.log(arrTelefonia)