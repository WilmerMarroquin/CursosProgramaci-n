/*
Ejercicio 11:

Calculadora:
    -Pide 2 números por pantalla
    -Si se mete uno mal que se vuelva a pedir
    -Mostrar un alert con la suma, resta, multiplicación y división de las 2 cifras.
 */

let numero1;
let numero2;

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("ingresa el primer número:"));
    numero2 = parseInt(prompt("Ingresa el segundo número:"));
}

let resultado = `
Suma : ${numero1 + numero2}
Resta: ${numero1 - numero2}
Multiplicación: ${numero1 * numero2}
División: ${numero1 / numero2}
`

alert(resultado);