const readlineSync = require('readline-sync');

let n = Number(readlineSync.question("What's your favourite number?"));

while (n!=42){
    let n = Number(readlineSync.question("Are you sure? What's your favourite number?"));
    if (n===42){
        break;
}
}