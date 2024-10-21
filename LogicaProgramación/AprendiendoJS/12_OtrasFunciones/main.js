// Funciones anónimas
// Es una función sin nombre.

const saludo = function(){
    console.log("Hola, soy una función anónima");
}

saludo();

// Funciones de callback
// Se pasan como parámetro de otra función, para que esta la ejecute.

let veces = 0;

setTimeout(function () {
    veces ++
    console.log(`Se ha ejecutado el timeout ${veces} veces`)
},1000);

// Funciones de callback avanzadas

function restame(n1, n2, mostrar, multiPorTres) {

    let resta = n1 - n2;

    mostrar(resta);
    multiPorTres(resta);

    return true;
}

restame(20, 5, function (resultado) {
    console.log(resultado);
},function (resultado) {
    console.log(resultado*3)
});

// Ambito de las variables "Scope"

// Global

let ruta = "https://www.facebook.com/wmarro7"

function mostrarRuta() {
    console.log(ruta);

    let nombre = "Wilmer Marroquin";  // local
    console.log(nombre);
}

console.log(ruta);
mostrarRuta()

if (true){
    let deporte = "Mi deporte favorito es el ciclismo" // Bloque
    console.log(deporte);
}

// console.log(deporte);

// Hoisting

coche ="Renault 4"
console.log(coche);
var coche = "Ferrari testarrosa";
console.log(coche);

// console.log(moto);
let moto = "Ducati X1";
console.log(moto);

// Funciones de flecha
// Definir función

let nuevoCurso =() =>{
    console.log("Curso de introducción a lla programación");
}

nuevoCurso();
// Utilizar en callback
setTimeout(() =>{
    console.log("Estoy usando una función de flecha =>")
},2000);