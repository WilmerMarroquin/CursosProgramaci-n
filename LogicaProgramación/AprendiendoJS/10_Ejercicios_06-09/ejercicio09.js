/*
Ejercicio 9:

Muestra todos los números divisores de un número ingresado por el usuario.
 */

let numero = parseInt(prompt("Por favor ingresa un numero: "))

console.log(`Divisores de ${numero}`)

for (let i= 0; i <= numero; i++){
    if (numero % i ===0){
        console.log(i)
    }
}