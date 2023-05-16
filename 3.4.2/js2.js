
const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

// Afișăm cifrele <5
const printNumbersLessThanFive = (arr) => {
    console.log("Cifrele mai mici ca 5");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            console.log(arr[i]);
        }
    }
};

// Max min
const findMinMaxPositions = (arr) => {
    let min = arr[0];
    let max = arr[0];
    let minPositions = [];
    let maxPositions = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minPositions = [i];
        } else if (arr[i] === min) {
            minPositions.push(i);
        }

        if (arr[i] > max) {
            max = arr[i];
            maxPositions = [i];
        } else if (arr[i] === max) {
            maxPositions.push(i);
        }
    }

    console.log("Max:", minPositions);
    console.log("Min:", maxPositions);
};

// Sortăm descrescător
const sortDescending = (arr) => {
    const sortedArray = arr.slice().sort((a, b) => b - a);
    console.log("Matricea sortată descrescător:", sortedArray);
};

// Afișăm elementele > valoarea medie
const printElementsGreaterThanAverage = (arr) => {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    const average = sum / arr.length;

    console.log("Afișăm elementele > valoarea medie");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            console.log(arr[i]);
        }
    }
};

// Использование функций
printNumbersLessThanFive(numbers);
findMinMaxPositions(numbers);
sortDescending(numbers);
printElementsGreaterThanAverage(numbers);
