//creare un oggetto triango con base e altezza
var triangolo = {
    base: 10,
    altezza: 20
}

//calcolare perimetro e area
var area = (triangolo.base * triangolo.altezza) / 2;
console.log(area);


//c=sqrt(pow(a, 2)+pow(b, 2))


var latoLungo = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2))

console.log(latoLungo);

var perimetro = triangolo.base + triangolo.altezza + latoLungo;
console.log(perimetro.toFixed(2));