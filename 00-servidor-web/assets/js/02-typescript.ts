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

