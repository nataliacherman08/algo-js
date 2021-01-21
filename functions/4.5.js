const readlineSync = require("readline-sync");

function calcDistance(Ax, Bx, Ay, By) {
    let A = Ax - Bx;
    let B = Ay - By;
    return Math.sqrt(A * A + B * B);
}

let Ax = new Number(readlineSync.question("Give me the x of A: "));
let Bx = new Number(readlineSync.question("Give me the x of B: "));
let Ay = new Number(readlineSync.question("Give me the y of A: "));
let By = new Number(readlineSync.question("Give me the y of B: "));

console.log("Point A = [" + Ax + ","+ Ay + "], Point B = ["+ Bx +","+ By +"] => " + calcDistance(Ax, Bx, Ay, By));