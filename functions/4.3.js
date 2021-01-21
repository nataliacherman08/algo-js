const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('Can you give a number of element between 1 and 10?'));

function multiRand(arr){
    for (let i=0 ; i<arr; i++){
        temp = rand10();
        arr.push(temp);
    }
    return arr;
}


function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 10) + 1;
}

console.log(multiRand(n));