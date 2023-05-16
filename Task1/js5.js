function extractCurrencyValue(str) {
    return +str.slice(1);
}
const str = "$120";
const value = extractCurrencyValue(str);
console.log(value);