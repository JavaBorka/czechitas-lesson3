// tady je místo pro náš program

// DÚ1: 1. Vytvoř program, který se zeptá uživatele ("vstup"), na jeho Jméno, Příjmení a rok narození. Na výstupu vypiš jeho Jméno Příjmení a Věk. 

let vstup = document.querySelector(".vstup");
const jmeno = prompt("Zadej svoje jméno a přijímení");
const rokNar = Number (prompt ("Zadej svůj rok narození"));
let vek = 2023-rokNar;
vstup.innerHTML = jmeno + " " + vek;

// DÚ2: Přidej do programu "vstup" uživatele s jeho oblíbenou barvou ("anglicky") s tím, že celý výpis s úkolu č.1. obarvíš danou barvou, ze vstupu uživatele.

const barva = prompt("Když máš rád modrou barvu, tak zadej blue");
vstup.style.color = barva;