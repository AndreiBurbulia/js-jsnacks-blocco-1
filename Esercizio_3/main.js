
//Chiedo il nome al cliente
var nomeUtente = prompt("Inserisci il tuo nome!")

//Lista degli invitati
var listaUtenti = ["marco", "luigi", "franco", "pierluigi", "fabio", "andrei", "michele", "francesca", "valeria", "vittoria", "pina", "mirco",];


//controllo se il nome dell'utente e presente nella lista
var controllo = listaUtenti.includes(nomeUtente.toLowerCase());


//controllo e communico al cliente l'esito
if (controllo) {
    document.getElementById("risultato").innerHTML = "Sei nella lista! Benvenuto";
} else {
    document.getElementById("risultato").innerHTML = "Mi dispiace ma non sei nella lista!";
}