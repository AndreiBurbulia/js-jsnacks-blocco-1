//stampo due parole in successione
var parola_1 = prompt("Inserisci una parola!");
document.getElementById("parola_1").innerHTML = parola_1;

var parola_2 = prompt("Inserisci un'altra parola!");
document.getElementById("parola_2").innerHTML = parola_2;



//Versione lunga del codice 
/*
//vado a controllare la lunghezza delle parole
var lunghezza_1 = parola_1.length;
var lunghezza_2 = ;


//stampo la parola piu corta e poi quella piu lunga
if (lunghezza_1 > lunghezza_2) {
    document.getElementById("risultato").innerHTML = parola_1 + " " + parola_2;
} else if (lunghezza_2 > lunghezza_1) {
    document.getElementById("risultato").innerHTML = parola_2 + " " + parola_1;
} else {
    document.getElementById("risultato").innerHTML = "Sono lunghe uguali!";
}
*/



//versione corta del codice

if (parola_1.length > parola_2.length) {
    document.getElementById("risultato").innerHTML = parola_1 + " " + parola_2;
} else if (parola_2.length > parola_1.length) {
    document.getElementById("risultato").innerHTML = parola_2 + " " + parola_1;
} else {
    document.getElementById("risultato").innerHTML = "Sono lunghe uguali!";
}