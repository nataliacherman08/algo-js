let arr = [100, 101, 102];
var total = 0;

for (e of arr) total += e;

console.log(total/arr.length);
//console.log(`The amount is ${total/arr.length}`);