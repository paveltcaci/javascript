const n = 5;
const numbers = Array.from({ length: n }, (_, index) => index + 1);

// 1. For
console.log("1.For");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


console.log("2.While");
let j = 0;
while (j < numbers.length) {
    console.log(numbers[j]);
    j++;
}


console.log("3. Do while");
let k = 0;
do {
    console.log(numbers[k]);
    k++;
} while (k < numbers.length);


console.log("4. For in");
for (let index in numbers) {
    console.log(numbers[index]);
}


console.log("5. For of");
for (let number of numbers) {
    console.log(number);
}


console.log("6. Foreach");
numbers.forEach((number) => {
    console.log(number);
});


console.log("7.map");
numbers.map((number) => {
    console.log(number);
});

// Metodele for loop și forEach sunt cel mai frecvent utilizate pentru a itera pe o matrice.
// Cu toate acestea, alegerea celei mai bune metode depinde de cazul specific de utilizare și de preferințele programatorului

console.log(...numbers);