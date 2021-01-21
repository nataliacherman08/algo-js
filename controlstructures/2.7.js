const readlineSync = require("readline-sync");
let n = Number(readlineSync.question("How many times do you want to display a question?"));

let sum = 0;
for (i=1; i<=n; i+=1) {
    let m = Number(readlineSync.question("Can you enter a number ?"));
    sum = sum + m
}

console.log(sum);