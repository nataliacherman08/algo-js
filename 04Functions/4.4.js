const readlineSync = require("readline-sync");
let arr = Number(readlineSync.question("How many numbers between 1 and 10 would you like to generate ?"));
let numbers = new Array;

//Function to generate random numbers
function rand10(min, max) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

//Amount of numbers generated
function multiRand(arr) {
    for (let i=0 ; i<arr; i++) {
        numbers.push(rand10());
    }
    return numbers;
}
console.log("Here are the generated numbers: "+ multiRand(arr));


//AVERAGE
let sum = 0;
function average(arr) {
    for (let i=0 ; i< numbers.length; i++){
        sum = sum + numbers[i];
        nAverage = sum/numbers.length;
    }
    return nAverage;
}
console.log('The average of this numbers is: '+ average(numbers));


//MINIMUM
function min(arr) {
    minimum = Math.min.apply(null, numbers);
        return minimum;
}
console.log('The minimum is : '+min(numbers));
    
    
//MAXIMUM
function max(arr) {
    maximum = Math.max.apply(null, numbers);
        return maximum;
}
console.log('The maximum is : '+max(numbers));