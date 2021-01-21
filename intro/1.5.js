const readlineSync = require("readline-sync");

let x = new Number (readlineSync.question('Can you give me a number with decimal part?'));
let y = new Number (readlineSync.question('Can you give me another one?'));

console.log(Math.trunc(x)*y);