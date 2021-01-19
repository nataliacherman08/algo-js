const readlineSync = require("readline-sync");

let x = readlineSync.question('Can you give me your favourite number?');

if (x!=42) {
    console.log("Are you sure?");
    let x = readlineSync.question('Can you give me your favorite number?');
}