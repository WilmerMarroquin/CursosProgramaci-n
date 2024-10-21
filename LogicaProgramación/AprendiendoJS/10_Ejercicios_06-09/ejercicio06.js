/*
Ejercicio :

Genera un programa que te genere la tabla de multiplicar del número que te diga el usuario:

*/

let numero =parseInt(prompt("Por favor dime el número de la tabla que deseas: "));

// Validar que el número sea correcto
while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Por favor dime un número mayor que 0: "));
}

// Generar la tabla de multiplicar
console.log(`Tabla de multiplicar del número ${numero}:`);

for (let i = 1; i <=10; i++) {

    console.log(`${numero} * ${i} = ${numero * i}`);
}