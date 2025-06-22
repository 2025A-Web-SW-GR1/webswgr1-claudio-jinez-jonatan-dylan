// PROMESAS con .then() y .catch()
const fs = require('fs');

function leerArchivoPromesa(nombreArchivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (err, data) => {
            if (err && err.code !== 'ENOENT') {
                reject(err);
            } else {
                resolve(data || '');
            }
        });
    });
}

function escribirArchivoPromesa(nombreArchivo, nuevoContenido) {
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, nuevoContenido, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

const textoNuevo = 'Hola! ' + new Date().toString();

leerArchivoPromesa('./b.txt')
    .then((contenidoAnterior) => {
        const nuevoContenido = contenidoAnterior + textoNuevo;
        return escribirArchivoPromesa('./b.txt', nuevoContenido);
    })
    .then(() => {
        console.log('Archivo actualizado (promesas)');
    })
    .catch((error) => {
        console.error('ERROR:', error);
    });
