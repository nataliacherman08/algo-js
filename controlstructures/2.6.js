const readlineSync = require("readline-sync");

let x = readlineSync.question('Can you enter a number between 1 and 7?');

if (x==1) {
    console.log('Monday');
} else if (x==2) {
    console.log('Tuesday');
} else if (x==3) {
    console.log('Wednesday');
} else if (x==4) {
    console.log('Thursday');
} else if (x==5) {
    console.log('Friday');
} else if (x==6) {
    console.log('Saturday');
} else if (x==7) {
    console.log('Sunday');
} else {
    console.log('OOPS, ERROR.')
}