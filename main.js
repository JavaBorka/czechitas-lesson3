// tady je místo pro náš program

let vstup = document.querySelector(".vstup");
const jmeno = prompt("Zadej svoje jméno a přijímení");
const rokNar = Number (prompt ("Zadej svůj rok narození"));
let vek = 2023-rokNar;
vstup.innerHTML = jmeno + " " + vek;