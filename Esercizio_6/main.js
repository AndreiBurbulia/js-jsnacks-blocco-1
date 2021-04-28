
// chiedi un numero di 4 cifre all'utente

var lunghezza = 0;
while (lunghezza != 4) {
    var numero = prompt("Inserisci un numero da 4 cifre ");
    console.log(numero);
    lunghezza = numero.length;
}

//sommo separatamente  le 4 cifre inserite e gli communico il risultato 
var somma = 0;
for (var i = 0; i < 4; i++) {
    var a = Number(numero[i])
    somma += a;
}
console.log(somma);

