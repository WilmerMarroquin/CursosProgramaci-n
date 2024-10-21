// array, matrices, arreglos

let equiposFutbol = ["Real Madrid", "Barcelona", "Milan", "Manchester", "Liverpool"];

console.log(equiposFutbol);
console.log(equiposFutbol.length);

let selecciones = new Array("Brasil", "Argentina", "Alemania", "Colombia");


console.log(selecciones);
console.log(selecciones.length);

// Acceder a los elementos de un array

console.log(equiposFutbol[0]);
console.log(selecciones[2]);

// Modificar un elemento de la array

equiposFutbol[0] = "Atletico Madrid";
console.log(equiposFutbol);

selecciones[2] = "España";
console.log(selecciones);

// Práctica

let numero = parseInt(prompt("Por favor ingresa un número:"));

if (numero >= equiposFutbol.length){
    alert("El número ingresado no se encuentra en la lista de equipos.");
}else {
    alert(`El equipo número ${numero} es ${equiposFutbol[numero]}`);
}
