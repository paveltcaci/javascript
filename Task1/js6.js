const input = prompt("Введите число:");

if (input === null || input.trim() === "") {
    alert("Error");
} else {
    const number = Number(input);

    if (isNaN(number)) {
        alert("Error");
    } else if (number > 0) {
        alert(1);
    } else if (number < 0) {
        alert(-1);
    } else {
        alert(0);
    }
}