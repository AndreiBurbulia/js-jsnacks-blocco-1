//stampa il cubo dei primi N numeri

//N e inserito dall'utente 

var numero = Number(prompt("Inserisci un numero"));

for (var i = 0; i < numero; i++) {
    cubo = i * i * i;
    console.log(cubo);
}