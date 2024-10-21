/*
Ejercicio 14:

El Dj no sabe que genero de música poner en la fiesta.

Pregúntale al usuario que genero de música prefiere (Pop, Rock o Rap).
Según la elección del usuario, mostrar un mensaje diferente.
*/

// Pedir al usuario su genero de música preferido

let generoMusica = prompt("Cual es tu genero de musica preferido. \n Puedes seleccionar el numero o el nombre del genero. \n 1. Pop \n 2. Rock \n 3. Rap");

// Validar la respuesta del usuario

switch (generoMusica.toLowerCase()){
    case "pop":
    case "1":
        alert("Muy bien has escogido el genero Pop, suena ´Despecha - Rosalía´");
        break;

    case "rock":
    case "2":
        alert("Muy bien has escogido el genero Rock, suena ´Afuera - caifanes´");
        break;

    case "rap":
    case "3":
        alert("Muy bien has escogido el genero Rap, suena 'Atrévete - Calle 13'");
        break;

    default:
        alert("No has seleccionado un genero de musica valido. Por favor, intentalo de nuevo.");
}