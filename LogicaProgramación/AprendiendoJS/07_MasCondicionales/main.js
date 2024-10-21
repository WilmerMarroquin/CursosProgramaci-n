// Condicional Switch

let miDesayuno = 1;
switch (miDesayuno){
    case 1:
        console.log("Desayuno: Cafe con leche");
        break;
    case 2:
        console.log("Desayuno: Arroz con pollo");
        break;
    case 3:
        console.log("Desayuno: Pasta con tomate");
        break;
    default:
        console.log("Desayuno: No hay opción");
}

// Condicional ternario

let nombre = "Camilo";
let edad =17;

let mayorEdad = (edad >= 18)? "es mayor de edad" : "es menor de edad"; 

console.log(`${nombre} ${mayorEdad}`);

// Diferencia entre var y let

if("hola" === "hola"){
    var curso = "Master en CSS";  // Si se define como let, no funciona fuera del bloque.
}

console.log(curso);