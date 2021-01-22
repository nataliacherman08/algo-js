const readlineSync = require("readline-sync");

let fs = require('fs');
let data = fs.readFileSync('serie.json');
let tvSerie = JSON.parse(data);

function askTvSerie (tvSerie){
tvSerie["name"] = readlineSync.question("Name of your favorite Tv Serie?");
tvSerie["year"] = readlineSync.question("What's the production year ?");
let n = Number (readlineSync.question("How many actors do you remember?"));

for(let i=1 ; i<=n ; i +=1){
    tvSerie.actors[i]= readlineSync.question("Can you give me a name?");
}
}

askTvSerie(tvSerie);
console.log(tvSerie);