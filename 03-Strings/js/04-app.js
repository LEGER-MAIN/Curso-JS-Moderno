const producto = '      Monitor de 20 pulgadas   ';

console.log(producto)
console.log(producto.length)

// Eliminar espacio en blanco del inicio...
console.log(producto.trimStart())

// Eliminar espacio en blanco al final
console.log(producto.trimEnd())

// Eliminar espacio al inicio y al final
console.log(producto.trimStart().trimEnd())
console.log(producto.trim())
