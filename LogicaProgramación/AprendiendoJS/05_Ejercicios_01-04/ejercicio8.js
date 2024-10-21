/*
Ejercicio #8

Tengo una heladería, el cono cuesta 0.50 euro y cada bola de helado 1.8 euros.

¿Cuánto cuesta un helado con 1, 2 y 3 bolas?
*/

let costoCono = 1.8;
let costoBola = 0.50;

let valorHelado = costoBola + costoCono;
console.log("El costo de un helado con 1 bola es: " + valorHelado + " euros");

valorHelado += costoBola;
console.log("El costo de un helado con 2 bolas es: " + valorHelado + " euros");

valorHelado += costoBola;
console.log("El costo de un helado con 3 bolas es: " + valorHelado + " euros");
