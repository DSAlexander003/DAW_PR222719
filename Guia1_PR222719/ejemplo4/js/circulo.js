/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: circulo.js *
* Uso: Calcular el área de un círculo. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * */

const PI = 3.1415926535;
var radio = prompt ('Introduzca el radio del circulo: ', '');
var area;
area = PI*radio*radio;
document.write("<header><h1>El area del circulo es: " + area + "</h1><hr /><br/></header>");