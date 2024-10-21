// Condicional IF
// Si A es igual a B entonces haz C, si no haz D

// Ejemplo #1

let estaLloviendo = false;

if (estaLloviendo == true){
    // Si se cumple la condición ejecuta esto:
    console.log("Está lloviendo, debo llevar mi paraguas.");
}else{
    // Si no se cumple la condición ejecuta esto:
    console.log("No está lloviendo, puedo salir sin el paraguas.");
}


// Ejemplo #2

let quieroCebolla = false;

if (quieroCebolla){
    // Si se cumple la condición ejecuta esto:
    console.log("Tu hamburguesa lleva cebolla.");
}else{
    // Si no se cumple la condición ejecuta esto:
    console.log("No quiero cebolla en la hamburguesa.");
}


// Ejemplo #3

let nombre = "Joaquin Perez";
let edad = 8;

if (edad >= 18){
    // Es mayor de edad
    console.log(`${nombre} es mayor de edad, tiene ${edad} años.`);
    if (edad >=70){
        // Es un adulto mayor
        console.log(`${nombre} es un adulto mayor, tiene ${edad} años.`);
    }else if (edad >=30){
        // Es un adulto
        console.log(`${nombre} es un adulto, tiene ${edad} años.`);
    }else if (edad >=18){
        // Es un joven
        console.log(`${nombre} es un joven, tiene ${edad} años.`);
    }
}else{
    // Es menor de edad
    console.log(`${nombre} es menor de edad, tiene ${edad} años.`);
    if (edad < 18){
        // Es un adolescente
        console.log(`${nombre} es un adolescente, tiene ${edad} años.`);
    }else if (edad < 12){
        // Es un niño
        console.log(`${nombre} es un niño, tiene ${edad} años.`);
    } else if (edad < 1){
        // Es un bebé
        console.log(`${nombre} es un bebé, tiene ${edad} años.`);
    }
}


// Ejemplo #4

let buenTiempo = false;

if (!buenTiempo){
    console.log("No podemos ir al parque, no hay buen clima")
}

// Ejemplo #5

let year = 2038;

if (year >=2000 & year <=2030){
    console.log("Estamos en la era moderna.");
}else if (year > 2030){
    console.log("Estamos en la era futurista.");
}else {
    console.log("Estamos en la era antigua.");
}

// Ejemplo #6

let equipo = "Milan";

if (equipo == "Real Madrid" || equipo == "Barcelona" || equipo == "Atletico Madrid" || equipo == " Betis"){
    console.log(`El ${equipo} pertenece a la liga española`)
}else{
    console.log(`El ${equipo} no pertenece a la liga española`)
}