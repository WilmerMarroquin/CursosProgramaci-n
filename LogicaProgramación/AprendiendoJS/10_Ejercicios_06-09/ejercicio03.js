/*
Ejercicio 3:

Tengo un kanguro que salta 3 metros cada vez.

Haz un programa que diga cuantos metros ha saltado el kanguro, tras 17 saltos.

*/

let distanciaSalto = 3;
let saltos = 17;
let distanciaRecorida= 0;

for (let i = 1; i <= saltos; i++) {
    distanciaRecorida += distanciaSalto;
    console.log(`El canguro ha saltado ${i} veces, y ha recorrido un total de ${distanciaRecorida} metros.`);
}