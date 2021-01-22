let arr = [1, 2, 3, 4, 5];
var total = 0;
var count = 0;

for (i=0 ; i<arr.length ; i++) {
    total += arr[i];
    count ++;
}

console.log(total/count);