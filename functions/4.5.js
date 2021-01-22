const readlineSync = require("readline-sync");
let x1 = Number(readlineSync.question("Enter the x position of A: "));
let y1 = Number(readlineSync.question("Enter the y position of A: "));
let x2 = Number(readlineSync.question("Enter the x position of B: "));
let y2 = Number(readlineSync.question("Enter the y position of B: "));

function calcDistance(x1, y1, x2, y2) {
    let i = x2 - x1;
    let e = y2 - y1;
    return Math.sqrt(Math.pow(i,2)+ Math.pow(e,2));
}

console.log("Point A = [" + x1 + ","+ y1 + "], Point B = ["+ x2+","+ y2+"] => " + calcDistance(x1, y1, x2, y2));

//For calculating the distance between the point A and the point B, I needed their positions on the Cartesian plane.
//The formula for calculating the distance is the square root of the (x2-x1)exponent 2 + (y2-y1)exponent 2.
//To translate into code: Math.sqrt(Math.pow(x2-x1,2)+ Math.pow(y2-y1,2)).
//The Math.pow() function returns the base to the exponent power. Syntax: Math.pow(base, exponent)
//The Math.sqrt() function returns the square root of a number. Syntax: Math.sqrt(x)