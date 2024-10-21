/*
Ejercicio 7:

Mostrar los números impares que hay entre 2 números que nos de el usuario.
 */

let numero1 = parseInt(prompt("Introduce el primer numero" ,0));
let numero2 = parseInt(prompt("Introduce el segundo numero" , 0));

// Válida que los números sean válidos
if  (isNaN(numero1) || isNaN(numero2)){
    alert("Los números introducidos no son validos");
}

if (numero1 > numero2){
    let aux = numero1;
    numero1 = numero2;
    numero2 = aux;
}

console.log(`Numero impares entre ${numero1} y ${numero2}`)
while (numero1 < numero2){
    numero1 ++

    if (numero1 % 2 !== 0){
        console.log(numero1)
    }
}