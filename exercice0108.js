const readlineSync = require("readline-sync");

let count = 3;
let question1 = readlineSync.question("What is your favourite animal?");
console.log("There are "+--count+" questions left");

let question2 = readlineSync.question("What is your favourite fruit?");
console.log("There is "+--count+" questions left");

let question3 = readlineSync.question("What is your favourite band?");

console.log("It's the story of an "+question1+ " which likes "+question2+" and enjoy listening "+question3+". Well, it's not that funny at first sight, but have you already seen an animal which enjoys listening music? Well of course, you did.");