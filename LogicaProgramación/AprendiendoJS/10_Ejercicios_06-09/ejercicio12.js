/*
Ejercicio 12:

Tenemos una bolsa con 37 caramelos, cada vez que te comes uno quedan menos.
Hacer la simulación con un bucle.
 */

let bolsa = 37;
let caramelosComidos = 0;

while (caramelosComidos < bolsa){
    caramelosComidos ++;
    console.log(`Te haz comido ${caramelosComidos} caramelos, tienes ${bolsa - caramelosComidos} caramelos en la bolsa.`)
}