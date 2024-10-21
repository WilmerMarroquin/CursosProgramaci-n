// Un bucle es una estructura de control que ejecuta un bloque de código de forma automática mientras se cumpla una condición.


// Bucle for

/* 
for (inicialización; condición; incremento){
    bloque de código a ejecutar;}
*/

// Ejemplo:

let numero = 177;

for (let contador = 0; contador <= numero; contador ++){
    // console.log(contador);
}


// Bucle while

/* 
while (condición){
    bloque de código a ejecutar;}
*/

// Ejemplo:

let year = 1995;

while ( year <= 2024){
    console.log(year);
    if (year ===2013){
        break ; 
    }
    year++;
}


// Bucle do-while

/* 
do {
    bloque de código a ejecutar;
} while (condición);
*/

// Ejemplo:

let edad = 18;

do {
    console.log(`Tu edad es ${edad}`);
    edad++;
} while (edad < 21);