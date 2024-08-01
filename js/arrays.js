// 'use strict';
// //declaración de arrays
let frutas = [
    'manzana',
    'pera',
    'naranja',
    ];

// //console.log(frutas);
// console.table(frutas);

// console.log(frutas[1]);

// frutas[0] = 'sandía';
// console.table(frutas);

// frutas[3] = 'melocotón';
// console.table(frutas);

// frutas.push('fresa');
// console.table(frutas);

// console.log(frutas.length);

//bucles

/*
for(indice de inicio, condicion, incremento){
    código a ejecutar
}

*/

// for (let i = 1; i <= 20; i+=2) {
//     console.log(i); 
// }

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.forEach(fruta => {
    console.log(fruta);
});

frutas.forEach((fruta, indice, array) => {
    console.log(`${indice}: ${fruta}`);
    console.log(array);
});

// random
let aleatorio = Math.random()* 10;
aleatorio = Math.floor(aleatorio);
console.log(aleatorio);

let numeros = [34, 56, 89, 23, 12, 87, 58, 74, 332, 60];

console.log(`El número ganador es: ${numeros[aleatorio]}`);