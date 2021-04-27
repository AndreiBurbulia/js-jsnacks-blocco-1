// crea un array vuuoto
var numeri = [];

//chiediamo per 6 volte all'utente di inseirre un numero
for (i = 0; i < 6; i++) {
    var valore = Number(prompt("Inserisci un numero"));
    numero = valore % 2;
    console.log(numero);
    if (numero == 1) {
        numeri.push(valore);
    }
    console.log(numeri);
}
//se il numero e dispari lo inseriamo nell'aray