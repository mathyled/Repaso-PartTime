/* eslint-disable no-undef */
const {
    amoungUs,
    grupalOrIndividual,
    numSeguido,
    manejoDeArreglos,
    premios,
} = require('../repaso');

describe('amoungUs(tripulacion, impostor)', function() {
    it('Deberia devolver un arreglo con la tripulacion sin el impostor', function() {
      expect(amoungUs(["verde", "azul", "amarillo", "rojo", "marron"], "rojo")).toEqual(["verde", "azul", "amarillo", "marron"]);
      expect(amoungUs(["verde", "azul"], "azul")).toEqual(["verde"]);
    });
  });

  describe('grupalOrIndividual(deportes, modoDeJuego)', function() {
    it('Deberia devolver un arreglo con los deportes del modo ya sea grupal o individual', function() {
      expect(grupalOrIndividual([{nombre: "football", modo: "grupal"}, {nombre: "volleyball", modo: "grupal"}, {nombre: "ajedrez", modo: "individual"}, {nombre: "rugby", modo: "grupal"}, {nombre: "esgrima", modo: "individual"}], "individual")).toEqual(["ajedrez", "esgrima"]);
      expect(grupalOrIndividual([{nombre: "football", modo: "grupal"}, {nombre: "volleyball", modo: "grupal"}, {nombre: "ajedrez", modo: "individual"}, {nombre: "rugby", modo: "grupal"}, {nombre: "esgrima", modo: "individual"}], "grupal")).toEqual(["football", "volleyball", "rugby"]);
    });
  });
  
  describe('numSeguido(numeros)', function() {
    it('Deberia devolver "true" si hay 2 numeros iguales seguidos y "false" si no', function() {
      expect(numSeguido([1, 2, 2, 20, 4, 3])).toEqual(true);
      expect(numSeguido([1, 2, 3, 4, 5, 6])).toEqual(false);
    });
  });

  describe('manejoDeArreglos(carrito)', function() {
    it('Deberias devolver el resultado filtrado por .map y .filter y reducido con .reduce', function() {
      expect(manejoDeArreglos([{nombre: "libro", precio: 1500, id: 1},{nombre: "planta", precio: 3000, id: 2},{nombre: "maceta", precio: 300, id: 3}])).toEqual(4500);
    });
  });

  describe('premios(aulas)', function() {
    it('Deberias devolver un arreglo con las aulas con abanderados', function() {
      expect(premios([[1, {division:"a", abanderado: true}],[1, {division:"b", abanderado: false}], [2, {division:"a", abanderado: false}], [2, {division:"b", abanderado: true}]])).toEqual(["1a", "2b"]);
    });
  });