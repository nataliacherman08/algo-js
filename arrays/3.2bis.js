const arr = [100, 101, 102];
let total = 0;
for (e of arr) total += e;
console.log(`The amount is ${total/arr.length}`);