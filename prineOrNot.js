let N = 12;
let flag = 0;
for (let i = 2; i < N; i++) {
    if (N % i == 0) {
        flag = 1;
        break;
    }
}
if (flag != 0) {
    console.log("PrimeNumber");
}
else {
    console.log("NotPrimeNumber");
}