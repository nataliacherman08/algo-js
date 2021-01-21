const readlineSync = require("readline-sync");

let x = Number (readlineSync.question('Can you enter your shoe size?'));
let y = Number (readlineSync.question('Can you enter your birth year?'));

let a = x*2;
let b = a+5;
let c = b*50;
let d = c-y;
let e = d+1766;

console.log(e);