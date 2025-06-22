console.log("Hola Typescript");
// var nombre = "algo"; // No vamos a usar var nunca

let nombres = "Dylan";
// En typescript
let nombreTS: string = "";
console.log(typeof nombres, "nombres");

let numeros = 1;
// En typescript
let numerosTS: number = 1;
console.log(typeof numeros, "numeros");

numeros = 1.1; // Decimales
console.log(typeof numeros, "numeros decimales")

let booleanos = true;
// En typescript
let boleanosTS: boolean = false;
console.log(typeof booleanos, "booleanos");

let nulos = true;
// En typescript
let nulosTS: null = null;
console.log(typeof null, "null");

let arreglos = [];
// En typescript
let arreglosTS: number[] = [];
console.log(typeof arreglos, "arreglos");

let objetos = 1;
// En typescript
let objetosTS: object = [];
console.log(typeof objetos, "object");

let undefineds = undefined;
// En typescript
let undefinedTS: undefined = undefineds;
console.log(typeof undefineds, "undefindeds");


// Truty y Falsy
let trutyfalsy: any;
trutyfalsy = "";
if(trutyfalsy) {
    console.log("truty");
}else{
    console.log("falsy");
}

trutyfalsy = "a";
if(trutyfalsy) { // a
    console.log("truty");
}else{
    console.log("falsy");
}

// Truty y Falsy
trutyfalsy = -1;
if(trutyfalsy) { // -1
    console.log("truty");
}else{
    console.log("falsy");
}

trutyfalsy = 0;
if(trutyfalsy) { // 0
    console.log("truty");
}else{
    console.log("falsy");
}

trutyfalsy = null;
if(trutyfalsy) { // null
    console.log("truty");
}else{
    console.log("falsy");
}

trutyfalsy = 1;
if(trutyfalsy) { // 1
    console.log("truty");
}else{
    console.log("falsy");
}

trutyfalsy = [];
if(trutyfalsy) { // arreglo
    console.log("truty");
}else{
    console.log("falsy");
}

trutyfalsy = {};
if(trutyfalsy) { // {}
    console.log("truty");
}else{
    console.log("falsy");
}

const dylan:any = {
    "nombre" : "Dylan",
    'apellido' : 'Claudio',
    edad: 32,
    hijos : 1,
    casado: true,
    zapatos: undefined,
    // Un objeto dentro de otro objeto.
    ropa: {
        color: "plomo",
        talla: 40,
    },
    mascotas: ['Cache', 'Peque', 'Pandi'],
}

// Imprimir el objeto
console.log(dylan);

// Acceder a las propiedades
dylan.apellido
dylan["nombre "]

//  Modificar objetos de dentro del objeto
dylan.nombre = "Sergio";
dylan["nombre"] = "Marco";
// No se puede cambiar al objeto
// dylan = {}; ERROR

// Crear atributos siempre que el objeto sea any.
dylan.sueldo = 1.2;
dylan["gastos"] = 0.9;

// Eliminar propiedades
dylan.nombre = undefined;
delete dylan.nombre;


// Variables por valor o por referencia
// Variable por valor: primitivas(number, string, boolean)
let edaddylan = 24;
let edadjonatan = edaddylan; // CLONANDO EL PRIMITVO
console.log(edaddylan); // 24
console.log(edadjonatan); // 24
edaddylan + 1;
console.log(edaddylan); // 25
console.log(edadjonatan); // 24

// Variables por referecia
// Objeto JSON {} o ARREGLO []
let notas = {
    total: 10,
};

let notas2dobim = notas; // Referencia
notas2dobim.total = notas.total + 1;
console.log(notas); // 11
console.log(notas2dobim); // 11
// mismo objeto pero con diferentes nombres de variables.

// Como clonar objetos
let notasClonadas1 = Object.assign({}, notas);
// Clonar arreglos
let arregloAcopiar = [1,2,3];
let arregloClonado = Object.assign([], arregloAcopiar);

notasClonadas1.total = notasClonadas1.total + 1;
console.log(notas); // 11
console.log(notas2dobim); // 11
console.log(notasClonadas1); // 12

// Arreglos
const arregloEjemplo = [1,2,3,4,5];
// Iterar arreglos
// for of (obtenemos el valor)
for (let valorArreglo of arregloEjemplo){
    console.log('valor:', valorArreglo);
}

// for in (obtenemos el indice)
for (let indiceArreglo of arregloEjemplo){
    console.log('indice:', indiceArreglo);
    console.log('valor:', arregloEjemplo[indiceArreglo]);
}

// Añadir al final un arreglo
arregloEjemplo.push(6); // [1,2,3,4,5,6]

// Eliminar el utlimo elemento
arregloEjemplo.pop(); // [1,2,3,4,5]

// Añadir al principio del arreglo
arregloEjemplo.unshift(0); // [0,1,2,3,4,5]

// Eliminar y agregar elementos
// splice - donde empezar
// splice - numero de elementos a eliminar
// splice - elementos a añadir

arregloEjemplo.splice(
    0, // empezamos en el indice 0
    3, // queremos eliminar 3 elemento
    3,4,5  // agrego el 4
);

// Eliminados [0,1,2]
// Arreglo final [3,4,5,3,4,5]

// Operadores
// 1. FIND
// 2. FINDINDEX
// 3. foreach
// 4. map
// 5. filter
// 6. some
// 7. every
// 8. reduce

// Funciones
function soloNumeros (a,b,c){
    return a-b+c;
}

function soloNumerosTs (a:number, b:number,c:number): number{
    return a-b+c;
}

function soloImprimir (texto:string): void{
    console.log(texto);
}

function soloImprimir2 (texto:string): undefined{
    console.log(texto);
}

// Funciones nombradas
function nombreDeMiFuncion(){}
// Funciones anonimas
const funcionSinNombre = function (){};

nombreDeMiFuncion();
funcionSinNombre();

// Normalmente las funciones sin nombre se utilizan en un arreglo.
[].forEach(function(){});

// Fat Arrow Functions
const funcionFatArrow = (a:number, b:number): number => { 
    return a+b 
};

const funcionFatArrowSinParametros = () => {
    console.log('SinParametros');
};

const funcionFatArrowOmitirReturn = (a, b) => a + b;
const funcionFatArrowConUnSoloParametro = a => a * a; // Sin parentesis

// Parametros infinitos
function sumarNumeros(...todoslosNumeros:number[]):number {
    let total = 0;
    for (let valorNumero of todoslosNumeros){
        total = total + valorNumero;
    }
    return total;
}

sumarNumeros(1,2,3,4,5,6,7,8,9);

// Cuales vamos a usar mas? Usaremos mas las FatArrow functions que las anonimas.

// DESTRUCTURACION
// Destructuracion de objetos

const dylanDestructuración = {
    nombre: "dylan",
};

const rgbDestructuración = {
    nombre: "Dylan",
    apellido: "Claudio",
};

// Merge de las dos variables orden importa
const dylanrgbDest = {
    ...dylanDestructuración,
    ...rgbDestructuración,
}

// Resultado: {nombre: "Dylan", apellido: "Claudio"}

const overrideDest = {
    ...rgbDestructuración
    ...dylanDestructuración,
    nombre: "Vicente",
}

// Destructuración de arreglos
const arregloDesc1 = [1,2,3];
const arregloDesc2 = [4,5,6];

const arreglo12Desc = [
    ...arregloDesc1,
    ...arregloDesc2
]
// resultado [4,5,6,1,2,3]

const arreglo21Desc = [
    ...arregloDesc2,
    ...arregloDesc1,
] // resultado [1,2,3,4,5,6]

// La destructuración es una forma de clonación
const objetoaCopiar = {a:1};
const objetoCopiado = {...objetoaCopiar};
