const readlineSync = require("readline-sync");

function askTvSerie (name, year, actors){
    name = readlineSync.question("Name of your favorite Serie?");
    year = readlineSync.questionInt("What's the production year ?");
    let n = readlineSync.questionInt("How many actors do you remember?");
    
    for(let i=1 ; i<=n ; i +=1){
        actors[i]= readlineSync.question("Can you give me a name?");
    }
    }
    
    askTvSerie(name, year, actors);
    console.log(name, year, actors);

function randomizeCast(tvSerie){
    let l = tvSerie.length;
    let temp;
    let index;

    while (l > 0) {
        index = Math.floor(Math.random() * l);

        l--;
    
        temp = tvSerie[l];
        tvSerie[l] = tvSerie[index];
        tvSerie[index] = temp;
    }
    return tvSerie;
} 