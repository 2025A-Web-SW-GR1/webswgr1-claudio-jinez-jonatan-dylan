console.log("Hola Typescript");
// var nombre = "algo"; // No vamos a usar var nunca
var nombres = "Dylan";
// En typescript
var nombreTS = "";
console.log(typeof nombres, "nombres");
var numeros = 1;
// En typescript
var numerosTS = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; // Decimales
console.log(typeof numeros, "numeros decimales");
var booleanos = true;
// En typescript
var boleanosTS = false;
console.log(typeof booleanos, "booleanos");
var nulos = true;
// En typescript
var nulosTS = null;
console.log(typeof null, "null");
var arreglos = [];
// En typescript
var arreglosTS = [];
console.log(typeof arreglos, "arreglos");
var objetos = 1;
// En typescript
var objetosTS = [];
console.log(typeof objetos, "object");
var undefineds = undefined;
// En typescript
var undefinedTS = undefineds;
console.log(typeof undefineds, "undefindeds");
// Truty y Falsy
var trutyfalsy;
trutyfalsy = "";
if (trutyfalsy) {
    console.log("truty");
}
else {
    console.log("falsy");
}
trutyfalsy = "a";
if (trutyfalsy) { // a
    console.log("truty");
}
else {
    console.log("falsy");
}
// Truty y Falsy
trutyfalsy = -1;
if (trutyfalsy) { // -1
    console.log("truty");
}
else {
    console.log("falsy");
}
trutyfalsy = 0;
if (trutyfalsy) { // 0
    console.log("truty");
}
else {
    console.log("falsy");
}
trutyfalsy = null;
if (trutyfalsy) { // null
    console.log("truty");
}
else {
    console.log("falsy");
}
trutyfalsy = 1;
if (trutyfalsy) { // 1
    console.log("truty");
}
else {
    console.log("falsy");
}
trutyfalsy = [];
if (trutyfalsy) { // arreglo
    console.log("truty");
}
else {
    console.log("falsy");
}
trutyfalsy = {};
if (trutyfalsy) { // {}
    console.log("truty");
}
else {
    console.log("falsy");
}
