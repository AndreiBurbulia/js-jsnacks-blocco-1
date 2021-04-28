//stampa il cubo dei primi N numeri

//N e inserito dall'utente 

var numero = Number(prompt("Inserisci un numero"));

for (var i = 1; i <= numero; i++) {
    var cubo = Math.pow(i, 3);

    //con questa soluzione il risultato lo stampa
    contenutoLista = document.getElementById("numeri").innerHTML;
    document.getElementById("numeri").innerHTML = contenutoLista + "<li>" + cubo + "</li>";


    /*
    in questa maniera non mi stampa il risultato a schermo

    contenutoLista = document.getElementById("numeri").innerHTML;
    contenutoLista += "<li>" + cubo + "</li>";
    */


    console.log(cubo);
}