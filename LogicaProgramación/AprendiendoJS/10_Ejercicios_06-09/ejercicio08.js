/*
Ejercicio 8:

Tenemos una colección de números del 1 al 17.
Haz un programa para que el usuario adivine el número.
 */

const numero = 7;

let intento;

while (intento !== numero){
    intento=parseInt(prompt("Adivina el numero del 1 al 17"));
    if (intento === numero){
        alert(`Muy bien haz adivinado, el numero era ${numero}`);
    }else{
        alert("Sigue intentándolo");
    }
}