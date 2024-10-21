/*
Ejercicio 11:

Nuestros usuarios tienen perros y desean saber qué edad de perro tienen sus mascotas.
Un año humano equivale a 7 de perro.

Crear un programa que lea el número de años que tienen los perros de cada usuario y devuelva la edad en años de perro.
*/

// Pedir al usuario el número de años que tienen los perros
let añosPerro = prompt("Por favor dime la edad de tu perro: ")

// Convertir el número de años a entero
añosPerro = parseInt(añosPerro)

// Convertir los años a años de perro
let edadPerro = añosPerro * 7

// Mostrar la edad en años de perro
alert(`Tu perro tiene ${edadPerro} años de perro`)