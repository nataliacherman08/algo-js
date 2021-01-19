const readlineSync = require("readline-sync");

let x = readlineSync.question('Can you give me a number with decimal part?');
let y = readlineSync.question('Can you give me another one?');

console.log(Math.trunc(x)*y);