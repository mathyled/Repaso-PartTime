function amoungUs(tripulacion, impostor){
    //Esta funcion recibe como parametros 1 arreglo y un string, 
    //la tripulacion tiene un impostor!
    //Crear una funcion que devuelva un nuevo arreglo con todos
    //los colores inocentes de la tripulacion
    //Ej:  tripulacion = ["verde", "azul"]
    //     impostor = ["azul"]
    //     inocentes = ["verde"]
    //Tu codigo:

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
 
}

function numSeguido(numeros){
    //Esta funcion recibe como parametro un array de numeros
    // devolver true si hay 2 o mas numeros iguales seguidos
    // en caso contrario devolver falso
    // Ej: numeros = [1, 2, 3, 40, 2, 2, 0]
    // respuesta: true
    // Tu código:
        
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

}

function premios(aulas){
  //Una escuela va a entregar premios a las aulas que tengan abanderados
  //Esta funcion recibe un arreglo de arreglos donde cada uno de ellos tiene 
  //en la primera posicion el año del aula y en segunda posicion un objeto
  //con las propiedades division y abanderado teniendo esta ultima un valor booleano
  //devolver un nuevo arreglo con cada aula que tenga true en abanderado
  //representandola por el año y la division respectivamente
  //Ej: aulas = [
  //              [1, {division:"a", abanderado: true}],
  //              [1, {division:"b", abanderado: false}],
  //                                                       ]
  // resuesta: ["1a"]
  //Tu código:

}
  
function invertirString(string){
    //Hacer una funcion que devuelva el string que se pasa por parametro 
    // pero invertido
    //Ej: "egnellahClEobeurpAoy" => "yoAprueboElChallenge"
    //Tu código:
    
}

//-----------EXITOS EN EL CHALLENGE!!!!!!!!!!!!!!!!!!
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    amoungUs,
    grupalOrIndividual,
    numSeguido,
    manejoDeArreglos, 
    premios,
    invertirString
 };