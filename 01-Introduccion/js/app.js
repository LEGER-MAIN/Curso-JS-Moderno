/*  =====================================
    === Pregunta al usuario su nombre ===
    =====================================
*/
const nombre = prompt("Cual es tu nombre?");

// Toma el nombre y lo muestra en pantalla
document.querySelector(".contenido").innerHTML = `${nombre} esta aprendiendo JavaScript Moderno`;

// Asigna el valor hacia la variable producto
const producto = 'Monitor de 24 pulgadas';

// Objeto
const obj = {
    nombre: 'Juan'
}

// Consideraciones en JavaScript con el ;

// No es obligatorio, salvo que quieras dar por implicito el final de un codigo
console.log('Hola')
console.log('Mundo')

// Dar espacios para leer mas facilmente las funciones
function hola() {
    console.log('ok')
}
