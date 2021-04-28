//stampa il cubo dei primi N numeri

//N e inserito dall'utente 

var numero = Number(prompt("Inserisci un numero"));

for (var i = 1; i <= numero; i++) {
    cubo = Math.pow(i, 3);
    console.log(cubo);
}