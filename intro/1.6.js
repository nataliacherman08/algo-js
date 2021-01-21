const readlineSync = require("readline-sync");

let x = Number (readlineSync.question('Can you enter an integer?'));
let y = Number (readlineSync.question('Can you enter another one?'));

console.log(Math.trunc(x)/Math.trunc(y));