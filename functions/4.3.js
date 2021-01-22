const readlineSync = require("readline-sync");
let n = Number(readlineSync.question("How many numbers would you like to generate ?"));

function rand10(min,max) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

//console.log(rand10());

function multiRand(n) {
    for (let i=0; i < n; i++) {
        arr.push([i]);
    }
    rand10(n);
    return arr[i];
}

console.log(multiRand());