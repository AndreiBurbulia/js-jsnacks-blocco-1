// crea un array vuuoto
var numeri = [];

//chiediamo per 6 volte all'utente di inseirre un numero
for (i = 0; i < 6; i++) {
    var valore = Number(prompt("Inserisci un numero"));
    if (valore % 2 == 1) {
        numeri.push(valore);
    }
}
document.getElementById("valori").innerHTML = numeri;
//se il numero e dispari lo inseriamo nell'aray