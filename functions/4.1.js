const readlineSync = require("readline-sync");
let x = readlineSync.question("What is the length of your rectangle?");
let y = readlineSync.question("What is the width of your rectangle?");

function calcSurface (x,y) {
    return x*y;
}

console.log(calcSurface(x,y));

// The surface of a rectangle is calculated by multiplying the width with the length.
// I assigned a length (by asking it to the user) to x and a width to y.
// I used that values in the parameters of my function and asked to multiply them in return.
// Then, finally, I ask with my console.log to display my function.