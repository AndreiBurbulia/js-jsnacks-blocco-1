
//Snack 1A

var Palla = {
    nome: "palla",
    peso: 10
}
console.log(Palla);


//Snack 1B
//Attraverso un prompy dare la posibilita all'utente di modificare il peso

//versione estesa
/*
var nuovoPeso = Number(prompt("Inserisci il nuovo peso della palla!"));
Palla.peso = nuovoPeso;
*/

//versione compressa
Palla.peso = Number(prompt("Inserisci il nuovo peso della palla!"));


console.log(Palla);