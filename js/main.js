/* 
JAVASCRIPT
*/

// chiedo all'utente quanti chilometri vuole percorrere
const kmDaPercorrere = parseInt(prompt('Inserire il numero di chilometri che si vogliono percorrere:'));
console.log(kmDaPercorrere);

// chiedo all'utente l'età del passeggero
const anniPasseggero = parseInt(prompt('Inserire gli anni di età del passeggero'));
console.log(anniPasseggero);

// definisco la tariffa per ogni chilometro
const prezzoAlKm = 0.21;
console.log(prezzoAlKm);

// definisco il prezzo del biglietto odinario
let tariffa = kmDaPercorrere * prezzoAlKm;
console.log(tariffa);

// definisco la variabile per l'eventuale sconto applicato 
let prezzoBiglietto;

// funzione per il calcolo dello sconto sul prezzo del biglietto in base all'età
if (anniPasseggero < 18) {
    prezzoBiglietto = (tariffa - ((tariffa * 20) / 100)).toFixed(2);
    document.getElementById('tariffa').innerHTML = 'Hai diritto alla tariffa junior che prevede uno sconto del 20%!';
    document.getElementById('prezzo').innerHTML = prezzoBiglietto + '€';
    console.log(prezzoBiglietto);
} else if (anniPasseggero > 65) {
    prezzoBiglietto = (tariffa - ((tariffa * 40) / 100)).toFixed(2);
    document.getElementById('tariffa').innerHTML = 'Hai diritto alla tariffa senior che prevede uno sconto del 40%!';
    document.getElementById('prezzo').innerHTML = prezzoBiglietto + '€';
    console.log(prezzoBiglietto);
} else {
    prezzoBiglietto = tariffa.toFixed(2);
    document.getElementById('tariffa').innerHTML = 'Hai diritto alla tariffa base che non prevede sconti!';
    document.getElementById('prezzo').innerHTML = prezzoBiglietto + '€';
    console.log(prezzoBiglietto);
}

