function sumPrevios(n) {
let sum = 0;
for (let i = n; i > 0; i--) {
    sum +=i;
}
return sum;
}
console.log(sumPrevios(4));

