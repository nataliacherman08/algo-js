const readlineSync = require("readline-sync");
let a = readlineSync.question("Can you enter a number that you will consider as your minimum?");
let b = readlineSync.question("Can you enter a number that you will consider as your maximum?");
let c = readlineSync.question("Can you enter a current number?");

if ((c<b) && (c>a)) {
  console.log("The current number is between the minimum and the maximum.");
} else if (a>b) {
  console.log("Error. The minimum is greater than the maximum.");
} else {

}