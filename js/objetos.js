// Objetos en JavaScript
let persona = {
    nombre: 'Pepa',
    edad: 28,
    ciudad: 'Granada'
};

const alumnos = [
    {nombre: 'Frank', edad: 18, ciudad: 'Granada'},
    {nombre: 'Antonio', edad: 20, ciudad: 'Maracena'},
    {nombre: 'Simón', edad: 23, ciudad: 'Jaén'},
    {nombre: 'María', edad: 26, ciudad: 'Almería'},
];
console.log(alumnos);

alumnos.forEach(alumno => {
    console.log(alumno.nombre + " " + alumno.edad);
});

texto.innerHTML = "Soy un párrafo"; 
document.querySelector('#texto').innerHTML = "y yo también";