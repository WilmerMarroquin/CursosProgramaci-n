/*
Ejercicio #7

Tenemos un circulo con un diámetro de 18 cm. Calcular el radio y el area.

Mostrar los resultados en una alerta.
*/

const pi = 3.1416;
const diámetro = 18;

let radio = diámetro / (2*pi);
let area = pi * (radio**2);

alert(`El radio del circulo es: ${radio} cm`);
alert(`El área del circulo es: ${area} cm²`);