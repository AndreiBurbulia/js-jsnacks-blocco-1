//Il software deve chiedere per 10 volte all’utente di inserire un numero.
var numeri = [];
var somma = 0;

for (i = 0; i < 10; i++) {
    var valore = Number(prompt("Inserisci un numero"));
    numeri.push(valore)
    somma = numeri[i] + somma;
}

//Il programma stampa la somma di tutti i numeri inseriti

document.getElementById("somma").innerHTML = somma;

