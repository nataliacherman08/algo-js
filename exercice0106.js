const readlineSync = require("readline-sync");

let x = readlineSync.question('Can you give me a number?');
let y = readlineSync.question('Can you give me another one?');

console.log(x/y);