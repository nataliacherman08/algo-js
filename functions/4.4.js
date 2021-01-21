const readlineSync = require("readline-sync");
/*sumArray = sum of an array's elements
myAverage = average of an array's elements
myArray = it's the generated array*/

let arr = new Number(readlineSync.question('Can you give a number of element between 1 and 10?'));
let sumArray = 0;
let myArray = new Array;

function multiRand(arr){
    for (let i=0 ; i<arr; i++){
        temp = rand10();
        myArray.push(temp);
    }
    return myArray;
}
console.log(multiRand(arr));


function rand10(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * 10) + 1;
}



//AVERAGE
function average(arr) {
    for (let e=0 ; e < myArray.length; e++){
        sumArray = new Number(sumArray + myArray[e]);
        myAverage = sumArray/myArray.length;
    }
    return myAverage;
}
console.log(average(myArray));


//MINIMUM
    function min(arr) {
        minimum = Math.min.apply(null, myArray);
        return minimum;
    }
    console.log('The minimum is : '+min(myArray));
    
    
//MAXIMUM
    function max(arr) {
        maximum = Math.max.apply(null, myArray);
        return maximum;
    }
    console.log('The maximum is : '+max(myArray));