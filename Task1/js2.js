function sumEvenNumbers(a, b) {
    let sum = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}
const a = 1;
const b = 10;
const result = sumEvenNumbers(a, b);
console.log(`Suma cifrelor pare [${a}, ${b}]: ${result}`);