let styles = ["Jazz", "Bluez"];
console.log(styles);

// Adaugam Rock-n-roll la sfarsit
styles.push("Rock-n-roll");
console.log(styles); //

// Schimbam valoare de pe locul 2 pe clasic
const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Clasic";
console.log(styles); // Jazz Clasic Bluez

// Stergem primul element si il afisam
const firstElement = styles.shift();
console.log(firstElement); // Jazz
console.log(styles); // Clasic Rocknroll

// Adaugam Rap reggi la inceput
styles.unshift("Rap", "Reggi");
console.log(styles); // Rap reggi clasic rocknroll