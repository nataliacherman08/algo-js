const readlineSync = require("readline-sync");

let n = readlineSync.questionInt('How many times do you want to display that question : Can you enter a number ?');
 
let somme = 0;

for(let i=1 ; i<=n ; i +=1){
    let m = readlineSync.questionInt(' Can you enter a number ?');
    somme = somme + m;
}
console.log(somme);