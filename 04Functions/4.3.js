const readlineSync = require("readline-sync");
let n = Number(readlineSync.question("How many numbers between 1 and 10 would you like to generate ?"));

function rand10(min,max) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function multiRand(n) {
    let arr = [];
    for (let i=0 ; i<n; i++) {
        arr.push(rand10());
    }
    return arr;
}

console.log("Here are the generated numbers: "+ multiRand(n));

/**I created an array in which I add the random generated numbers with help of the function rand10().

In this programm, I have to generate the amount of times the user wants to generate those numbers.
That amount is determined by my question. I attribuate to this amount the value n.
n will serve me to create a loop inside my function multiRand().
This loop will determine the amount of time the numbers will be generated.**/