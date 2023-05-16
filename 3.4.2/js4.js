function sumInputNumbers() {
    let numbers = [];

    while (true) {
        let input = prompt("Introdu cifra:");


        if (input === null || input === "" || !isFinite(input)) {
            break;
        }

        numbers.push(+input);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

let result = sumInputNumbers();
console.log(result);