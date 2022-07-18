/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: triangulo.js *
* Uso: Calcular el área de un triángulo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
var base = prompt('Introduzca la base del triangulo es: ', '');
var altura = prompt('Introduzca la altura del triangulo: ','');
var area;

area = (base*altura)/2;
document.write("<header><h1>El área del Triángulo es: " + area + "</h1><hr /><br/></header>");