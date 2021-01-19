const readlineSync = require("readline-sync");

let n = readlineSync.question('How many times do you want to display that question : Can you enter a number ?');

for(let i=1 ; i==n ; i +=1){
    let i = readlineSync.question(' Can you enter a number ?');
    console.log(n+i);
}
