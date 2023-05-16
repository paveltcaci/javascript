const dividers = (number) => {
    if (number <= 0) {
        console.log("Introdu numar pozitiv.");
        return;
    }

    console.log(`Divizorii lui ${number}:`);

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
};
dividers(12);
dividers(17);
dividers(-5);