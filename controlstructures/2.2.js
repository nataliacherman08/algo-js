const readlineSync = require("readline-sync");

let x = readlineSync.question('Can you give a minimal number?');
let y = readlineSync.question('Can you give a maximal number?');
let z = readlineSync.question('Can you give a current number?');

if ((z > x) && (z < y)) {
    console.log("The current number is between min and max.");
} else if ( x > y) { 
    console.log("ERROR. The min is supposed to be smaller than the max.");
  } else {
    console.log("ERROR. The current number is supposed to be between the min and the max.");
  }