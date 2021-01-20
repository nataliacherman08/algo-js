const readlineSync = require("readline-sync");
let length = readlineSync.questionInt('Can you enter the length of a rectangle?');
let width = readlineSync.questionInt('Can you enter the width of a rectangle?');

function calcSurface(length,width) {
    return length*width;
}

console.log(calcSurface(length,width));