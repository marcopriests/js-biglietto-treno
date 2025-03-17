//Dichiarazione variabili
let etaPasseggero, distanza, prezzoKm, prezzoTotale;

//Procedimento
prezzoKm = 0.21;
etaPasseggero = prompt("Inserisci la tua età");
distanza = prompt("Inserisci il numero di chilometri che vuoi percorrere");
prezzoTotale = distanza * prezzoKm


if (etaPasseggero < 18) {
    prezzoTotale = prezzoTotale * 0.8;
    console.log("Hai meno di 18 anni, quindi il biglietto per te costa: " + prezzoTotale.toFixed(2) + "€");
} else if (etaPasseggero >= 65) {
    prezzoTotale = prezzoTotale * 0.6;
    console.log("Hai più di 65 anni, quindi il biglietto per te costa: " + prezzoTotale.toFixed(2) + "€")
} else {
    console.log("Il biglietto per te costa: " + prezzoTotale.toFixed(2) + "€");
}
