const name = prompt("Introduceti-va numele:");

if (name) {

    alert(`Bună, ${name}!`);

    const isFamiliar = confirm("Sunteți familiarizat cu limbajul JavaScript?");

    if (isFamiliar) {
        alert("Bună treabă!"); //
    } else {
        alert("Puteți începe să învățați chiar acum"); //
    }
} else {
    alert("Nu ați introdus un nume!");
}