// Longitud

let nombre = " Wilmer Alirio Marroquin Lomelin"
console.log(nombre.length);

// Convertir a texto

let numero = 1995;
console.log(typeof numero);
console.log(typeof numero.toString());

// Convertir texto a mayúscula

let nombreApellido = "Wilmer Marroquin";
let nombreMayus = nombreApellido.toUpperCase();
console.log(nombreApellido);
console.log(nombreMayus);

// Convertir a minúscula

let comida = "PIZZA"
let comidaMinus = comida.toLowerCase();
console.log(comida);
console.log(comidaMinus);

// Conseguir una letra concreta

let frase = "Soy muy guay de paraguay";
console.log(frase.charAt(13));

// Comprobar si una cadena tiene dentro otra

let eslogan = "No soy el mejor programador, pero seguramente si sere al que mejor entiendas"
if (eslogan.includes("programador")){
    console.log("El eslogan contiene la palabra 'programador'");
}else {
    console.log("El eslogan no contiene la palabra 'programador'");
}

// Buscar la posición de una palabra

let mensajes = "estas aprendiendo JavaScript, como un autentico loco";

console.log(mensajes.indexOf("autentico"));
console.log(mensajes.charAt(38))

// Extraer parte de un texto

let curso = "Master en Javascript";

console.log(curso.slice(10));


// Reemplazar parte de un texto

let película = "Dos tontos muy tontos";


console.log(película);
console.log(película.replace("tontos", "guays"));  //Reemplazar 1 aparición
console.log(película.replaceAll("tontos", "guays")); // Reemplazar todas las apariciones

// Eliminar espacios en blanco

let frase2 = "   Hola, como estás?     ";

console.log(frase2);
console.log(frase2.trim());

// Separar una cadena de texto en partes

let listaCompra = "huevos, plátanos, cerveza, dulces"

let listaArray = listaCompra.split(","); // Añadir el separador en este caso la coma ","
console.log(listaArray);

// Concatenar cadenas de texto

let nombre1 = "Wilmer";
let nombre2 = "Alirio";

console.log(nombre1 + " " + nombre2);
console.log(`${nombre1} ${nombre2}`);

nombreCompleto = "".concat(nombre1," ",nombre2);
console.log(nombreCompleto);

// Comprobar si una frase comienza o acaba en una palabra especifica

let frase3 = "El cielo es azul y el mar es blanco";

console.log(frase3.startsWith("El"));
console.log(frase3.endsWith("blanco"));

// Repetir palabras

let mensajito ="Te amo mucho! \n";

console.log(mensajito.repeat(3));

// Buscar texto en una cadena

let miCadena ="Pablito clavo un clavito"
console.log(miCadena.search("clavito"));
console.log(miCadena.match("clavo"));