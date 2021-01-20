const readlineSync = require("readline-sync");

function askTvSerie (){
    let name = readlineSync.question("Name of your favorite Serie?");
    let year = readlineSync.questionInt("What's the production year ?");
    let n = readlineSync.questionInt("How many actors do you remember?");
    
    for(let i=1 ; i<=n ; i +=1){
        let actors= readlineSync.question("Can you give me a name?");
    }
    }
    
    askTvSerie();
    console.log(askTvSerie());