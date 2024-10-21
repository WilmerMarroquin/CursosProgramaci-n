/*
Ejercicio 10:

Con base en el número ingresado, decir si es par o impar.
 */

let numero = parseInt(prompt("Por favor ingresa un número"));

if (numero % 2 === 0){
    alert(`El número ${numero} es par`);
}else{
    alert(`El número ${numero} es impar`)
}