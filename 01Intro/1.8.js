const readlineSync = require("readline-sync");

let question1 = readlineSync.question("What is your favourite animal?");
console.log("There are 2 questions left.");
let question2 = readlineSync.question("What is your favourite fruit?");
console.log("There is 1 question left.");
let question3 = readlineSync.question("What is your favourite band?");

console.log("That's a story of a/an "+question1+ " which likes "+question2+" and enjoys listening "+question3+". Well, it's not that funny at first sight, but have you already seen an animal which enjoys listening music? Well of course, you did.");