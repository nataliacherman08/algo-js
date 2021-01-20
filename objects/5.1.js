const readlineSync = require("readline-sync");
let fs = require('fs');
let data = fs.readFileSync('serie.json');
let tvSerie = JSON.parse(data);

function askTvSerie (tvSerie){
tvSerie["name"] = readlineSync.question("Name of your favorite Serie?");
tvSerie["year"] = readlineSync.questionInt("What's the production year ?");
let n = readlineSync.questionInt("How many actors do you remember?");

for(let i=1 ; i<=n ; i +=1){
    tvSerie.actors[i]= readlineSync.question("Can you give me a name?");
}
}

askTvSerie(tvSerie);
console.log(tvSerie);