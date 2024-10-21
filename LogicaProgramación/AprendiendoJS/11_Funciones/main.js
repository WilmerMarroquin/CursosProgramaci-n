// Funciones
/*
Una función agrupa una serie de instrucciones para poder usarlas varias veces.
Es una agrupación reutilizable de un conjunto de instrucciones.
 */

/*function saludo(nombre = "Yeimi", comida = "Torta"){
    console.log(`Hola ${nombre}`);
    console.log("Que tal estas?");
    console.log(`Quieres venir a mi casa a comer ${comida}?`);
    console.log("********************************************")

    return `Invite a ${nombre} a comer ${comida}`;
}

let mensajeFinal = saludo("Eliana", "Sopa")
alert(mensajeFinal)

saludo("Michelle", "Cafe con pan");
saludo("karen","Arroz con pollo");
saludo();
*/


// Funciones dentro de funciones

/*
function calculadora(num1,num2, mostrar = false) {
    if (mostrar === false){
        console.log(`Suma: ${num1 + num2}`);
        console.log(`Resta: ${num1 - num2}`);
        console.log(`Multiplicación: ${num1 * num2}`);
        console.log(`División: ${num1 / num2}`);
        console.log(`Resto: ${num1 % num2}`);
    }else{
        document.write(`Suma: ${num1 + num2}`);
        document.write(`Resta: ${num1 - num2}`);
        document.write(`Multiplicación: ${num1 * num2}`);
        document.write(`División: ${num1 / num2}`);
        document.write(`Resto: ${num1 % num2}`);
    }

    return true;
}

calculadora(7,9);
calculadora(7,12,true)
*/

function operaciones(num1,num2) {
    let resultados = {
        "suma": (num1 + num2),
        "resta" : (num1 - num2),
        "multiplicación": (num1 * num2),
        "division": (num1 / num2),
        "resto": (num1 % num2),
    }

    return resultados;
}

function mostrarConsola(num1,num2){
    let resultados = operaciones(num1, num2);

    console.log(`Suma: ${resultados.suma}`);
    console.log(`Resta: ${resultados.resta}`);
    console.log(`Multiplicación: ${resultados.multiplicación}`);
    console.log(`Division: ${resultados.division}`);
    console.log(`Resto: ${resultados.resto}`);

    return true;
}

function mostrarPantalla(num1, num2) {
    let resultados = operaciones(num1, num2);

    document.write("<h1>Calculadora</h1>")
    document.write(`<p>Suma: ${resultados.suma}</p>`);
    document.write(`<p>Resta: ${resultados.resta}</p>`);
    document.write(`<p>Multiplicación: ${resultados.multiplicación}</p>`);
    document.write(`<p>Division: ${resultados.division}</p>`);
    document.write(`<p>Resto: ${resultados.resto}</p>`);
    document.write("<hr>")

    return true;
}

function calculadora(num1, num2, mostrar = false){
    if (mostrar === false){
        mostrarConsola(num1,  num2);
    }else{
        mostrarPantalla(num1, num2);
    }

    return true;
}

calculadora(9,2);
calculadora(9,2,true);


// Parámetros ...REST

function misPelículas(peli1, peli2, ...resto_películas){
    console.log(peli1);
    console.log(peli2);
    console.log(resto_películas);

    return true;
}

misPelículas("Harry Potter", "El señor de los anillos", "Star Wars", "misión imposible")


// Parámetros ...Spread

let números = [1,2,3,4];
let númerosNuevos = [...números,5,6,7,8,9];

console.log(númerosNuevos);

let misPelisFav = ["Transportador", "Matar o morir"];
misPelículas(...misPelisFav, "SpiderMan", "Colombiana");