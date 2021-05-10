//creare un oggetto triango con base e altezza
var triangolo = {
    base: 10,
    altezza: 20
}

//calcolare perimetro e area
var area = (triangolo.base * triangolo.altezza) / 2;
console.log(area);
triangolo.area = area;


//c=sqrt(pow(a, 2)+pow(b, 2))

//opzione 1
var latoLungo = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2))
//opzione 2
var latoLungo2 = Math.sqrt((triangolo.base ** 2) + (triangolo.altezza ** 2))


console.log(latoLungo);
console.log(latoLungo2);


var perimetro = (triangolo.base + triangolo.altezza + latoLungo).toFixed(2);
console.log(perimetro);

triangolo.perimetro = perimetro;
console.log(triangolo);
