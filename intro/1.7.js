const readlineSync = require("readline-sync");

let x = readlineSync.question('Can you give me your shoe size?');
let y = readlineSync.question('Can you give me your birth year?');

let a = x*2;
let b = a+5;
let c = b*50;
let d = c-y;
let e = d+1766;

console.log(e);