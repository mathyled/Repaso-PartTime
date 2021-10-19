function amoungUs(tripulacion, impostor){
    //Esta funcion recibe como parametros 1 arreglo y un string, 
    //la tripulacion tiene un impostor!
    //Crear una funcion que devuelva un nuevo arreglo con todos
    //los colores inocentes de la tripulacion
    //Ej:  tripulacion = ["verde", "azul"]
    //     impostor = ["azul"]
    //     inocentes = ["verde"]
    //Tu codigo:

    var inocentes = []
    for(var x=0;x<tripulacion.length;x++){
      if(tripulacion[x]!==impostor){
        inocentes.push(tripulacion[x])
      }
    }
    return inocentes

}

function grupalOrIndividual(deportes, modoDeJuego){
    //Esta funcion recibe un arreglo de objetos y un string
    // cada objeto es un deporte con las propiedades 
    // nombre y modo este ultimo indicando si es un
    // deporte "grupal" o "individual" y el string puede contener
    // la palabra "grupal" o "individual" 
    //Armar una funcion que devuelva un nuevo array
    // con los nombres de los deportes que se jueguen del
    // modo pasado por parametro
    // Ej: deportes = [{nombre: "football", modo: "grupal"},{nombre: "ajedrez", modo: "individual"}]
    //     respuesta si se pasa "grupal" por parametro: ["football"]
    //     respuesta si se pasa "individual" por parametro : ["ajedrez"]
    // Tu código:

    var result = [];
    for(x=0;x<deportes.length;x++){
      if(deportes[x].modo === modoDeJuego){
        result.push(deportes[x].nombre)
      } 
    }
    return result

}

function numSeguido(numeros){
    //Esta funcion recibe como parametro un array de numeros
    // devolver true si hay 2 o mas numeros iguales seguidos
    // en caso contrario devolver falso
    // Ej: numeros = [1, 2, 3, 40, 2, 2, 0]
    // respuesta: true
    // Tu código:

    for(x=0;x<numeros.length-1;x++){
        if(numeros[x]===numeros[x+1]){
          return true
        }
      }
      return false        
}

function manejoDeArreglos(carrito){
    // Esta funcion recibe por parametro un arreglo de objetos
    // cada objeto es un producto que estamos comprando
    // con las propiedades nombre, id y precio
    // tenemos que armar un carrito de compra que devuelva el 
    // precio final teniendo en cuenta que hay una oferta que 
    // hay una promocion que deja gratis los productos de menos de 500$
    // en primera instancia devolver un nuevo arreglo que solo 
    // tenga los precios de cada objeto utilizando .map
    // luego devolver un nuevo objeto que filtre los precios que sean
    // mayores a 500 usando .filter
    // por ultimo devolver la suma de todos los resultados usando .reduce
    // Tu código:


    var precios = carrito.map(function(elemento){
        return elemento.precio
      })
      var preciosFiltrados = precios.filter(function(elemento){
        return elemento>500
      })
      var total = preciosFiltrados.reduce(function(acumulador, cadaUnoDeLosPrecios){
        return acumulador + cadaUnoDeLosPrecios
      })
      return total

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    amoungUs,
    grupalOrIndividual,
    numSeguido,
    manejoDeArreglos
 };