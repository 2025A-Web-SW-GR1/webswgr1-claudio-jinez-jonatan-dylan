// CALLBACKS
const fs = require('fs');
console.log("Primero");

const textoNuevo = 'Hola! ' + new Date().toString();

fs.readFile('./b.txt', 'utf-8', (errorLectura, contenidoAnterior) => {
    if (errorLectura && errorLectura.code !== 'ENOENT') {
        console.error('ERROR lectura', errorLectura);
    } else {
        const nuevoContenido = (contenidoAnterior || '') + textoNuevo;
        fs.writeFile('./b.txt', nuevoContenido, (errorEscritura) => {
            if (errorEscritura) {
                console.error('ERROR escritura');
            } else {
                console.log('Archivo actualizado (callbacks)');
            }
        });
    }
});

console.log("Segundo");
