const readlineSync = require("readline-sync");
let n = Number(readlineSync.question("How many numbers between 1 and 10 would you like to generate ?"));
let arr = new Array;

//Function to generate random numbers
function rand10(min, max) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

//Amount of numbers generated
function multiRand(n) {
    for (let i=0 ; i<n; i++) {
        arr.push(rand10());
    }
    return arr;
}
console.log("Here are the generated numbers: "+ multiRand(n));


//AVERAGE
let sum = 0;
function average(arr) {
    for (let i=0 ; i<arr.length; i++){
        sum = sum + arr[i];
        nAverage = sum/arr.length;
    }
    return nAverage;
}
console.log('The average of this numbers is: '+ average(arr));


//MINIMUM
function min(arr) {
    minimum = Math.min.apply(null, arr);
        return minimum;
}
console.log('The minimum is : '+min(arr));
    
    
//MAXIMUM
function max(arr) {
    maximum = Math.max.apply(null, arr);
        return maximum;
}
console.log('The maximum is : '+max(arr));