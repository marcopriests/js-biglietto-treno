//Dichiarazione variabili
let etaPasseggero, distanza, prezzoKm, prezzoTotale;

//Procedimento
prezzoKm = 0.21;
etaPasseggero = prompt("Inserisci la tua età");
distanza = prompt("Inserisci il numero di chilometri che vuoi percorrere");
prezzoTotale = distanza * prezzoKm


console.log(etaPasseggero, distanza, prezzoTotale);

if (etaPasseggero < 18) {
    prezzoTotale = prezzoTotale * 0.8;
    console.log(prezzoTotale.toFixed(2));
} else {
    console.log("niente sconto");

}
