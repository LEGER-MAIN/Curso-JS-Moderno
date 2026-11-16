const producto = 'Monitor de 20 pulgadas';

console.log(producto);

// Metodo para buscar y reemplazar un valor en un strim
console.log(producto.replace('pulgadas', '"'))

// Metodo para cortar
console.log(producto.slice(0,10))
// Si no le pasas el segundo valor, llegara a la posicion que le pasaste y cortara hasta el final
console.log(producto.slice(9))
// Si le pasas un valor mayor de primero, no hara nada
console.log(producto.slice(10,2))

// Alternativa a slice
console.log(producto.substring(0,10))
// Este si corta hacia atras
console.log(producto.substring(10,0))

const usuario = 'Jefferson';

console.log(usuario.substring(0,1))
console.log(usuario.charAt(0))
