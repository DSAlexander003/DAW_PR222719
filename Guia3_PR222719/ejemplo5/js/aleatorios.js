var aleatorios;
var min, max, cantidad;
var disparador, listado;

function init(){
    //Declaración del arreglo o matriz de forma literal
    //que contendrá los números aleatorios
    aleatorios = [];
    //Declaración y asignación de los límites entre
    //los cuales estarán comprendidos los números

    min = parseInt(prompt("Ingrese el limite inferior", ""));
    max = parseInt(prompt("Ingrese el limite superior", ""));

    cantidad = parseInt(prompt("Indique la cantidad de numeros aleatorios a generar", ""));
    disparador = document.getElementById("generador");
    listado = document.getElementById("listanumeros");

    if(disparador.addEventListener){
        disparador.addEventListener('click', function(evt){
            aleatorio(min, max, cantidad);
            listado.innerHTML = "Los numeros aleatorios son: " + aleatorios.toString();
        }, false);
    }
    else if(disparador.attachEvent){
        disparador.attachEvent('onlick', function(evt){
            aleatorio(min, max, cantidad);
            listado.innerHTML = "Los numeros aleatorios son: " + aleatorios.toString;
        });
    }
}

function aleatorio(minimo, maximo, cantidad){
    //Generando un numero aleatorio teniendo el cuidado
    // que esté comprendido entre los valores mínimo y máximo
    var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}