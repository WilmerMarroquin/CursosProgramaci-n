/*
Ejercicio #10

Juan = 20 dolares
pepe = 30 dolares
manolo = 60 dolares

Cuantos dolares hay entre los 3?
Es cierto que Juan tiene menos que pepe?
*/

let juan = 20;
let pepe = 30;
let manolo = 60;

let total = juan + pepe + manolo;
let juan_pepe = juan < pepe;

console.log("Total de dolares entre los 3 :", total , " Dolares");
console.log(`Juan tiene menos que pepe : ${juan_pepe}`);