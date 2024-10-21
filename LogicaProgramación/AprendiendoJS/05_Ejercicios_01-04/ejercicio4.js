/*
Ejercicio #4

Tenemos una jirafa en el zoo que pesa 1120 kilos.

Si le damos de comer 141 kilos de hojas, cuanto pesa ahora?
*/

let pesoJirafa = 1120;
let pesoHoja = 141;

let pesoTotal = pesoJirafa + pesoHoja;

pesoJirafa += pesoHoja;

console.log(`La jirafa pesa ahora ${pesoJirafa} kilos`);
console.log(`El peso de la jirafa después de comer es ${pesoJirafa} kilos`);