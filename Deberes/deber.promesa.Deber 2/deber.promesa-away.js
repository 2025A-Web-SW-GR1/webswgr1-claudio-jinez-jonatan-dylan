// PROMESAS con async/await
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

async function actualizarArchivo() {
    try {
        const contenidoAnterior = await leerArchivoPromesa('./b.txt');
        const nuevoContenido = contenidoAnterior + textoNuevo;
        await escribirArchivoPromesa('./b.txt', nuevoContenido);
        console.log('Archivo actualizado (async/await)');
    } catch (error) {
        console.error('ERROR:', error);
    }
}

actualizarArchivo();
