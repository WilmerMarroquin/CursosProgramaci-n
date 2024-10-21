/*
Ejercicio 2:

Crear un programa que pida 2 numeros, nos diga cuál es el mayor, el menor o si son iguales.

Si los numero no son numeros o son 0, que no los vuelva a pedir.
*/

let numero1 = parseInt(prompt("Por favor ingrese el primer número:"));
let numero2 = parseInt(prompt("Por favor ingrese el segundo número:"));

// Validar que los numeros sean correctos
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Por favor ingrese un número mayor que 0:"));
    numero2 = parseInt(prompt("Por favor ingrese un número mayor que 0:"));
}

console.log(`El numero 1 es: ${numero1}`);
console.log(`El numero 2 es: ${numero2}`);

// Determinar el mayor y el menor
if (numero1 > numero2){
    console.log(`El número 1 es mayor que el número 2: ${numero1} > ${numero2}`);
    console.log(`El número 1: ${numero1}, es el mayor`);
    console.log(`El número 2: ${numero2}, es el menor`);
}else if(numero2 > numero1){
    console.log(`El número 2 es mayor que el número 1: ${numero2} > ${numero1}`);
    console.log(`El número 2: ${numero2}, es el mayor`);
    console.log(`El número 1: ${numero1}, es el menor`);
}else{
    console.log(`Los números ${numero1} y ${numero2} son iguales`);
}
