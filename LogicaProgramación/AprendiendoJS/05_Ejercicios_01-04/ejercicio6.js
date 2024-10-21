/*
Ejercicio #6

En la tienda de videojuegos hay una oferta, si compras un juego de 50 dolares o mas tiene un descuento del 20%.

¿Cuánto valdría el FC25, si este tiene un costo de 50 dolares?
*/

let descuento = 20;
let valorJuego = 50;

let costoDescuento = valorJuego - (valorJuego * descuento / 100);

console.log("El costo del FC25 con descuento es:", costoDescuento);