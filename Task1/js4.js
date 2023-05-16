function ucFirst(str) {
    if (!str) {
        return str; //
    }
    return str[0].toUpperCase() + str.slice(1);
}
const input = "вася";
const result = ucFirst(input);
console.log(result);