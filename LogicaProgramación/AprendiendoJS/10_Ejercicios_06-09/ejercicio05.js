/*
Ejercicio 5:

Muestra la suma y la media de los números introducidos, hasta que se introduzca un número negativo.
*/

let suma = 0;
let contador = 0;
let numero;

do {
    numero = parseInt(prompt("Ingresa un número positivo para continuar, o ingresa un número negativo para terminar el programa: "));

    if (isNaN(numero)){
        numero = 0;
    }

    if (numero >= 0){
        suma += numero;
        contador++;
    }else{
        console.log("Programa terminado");
    }

}while (numero >= 0);

console.log(`La suma acumulada es: ${suma}`);
console.log(`La media de los números introducidos es: ${suma / contador}`);