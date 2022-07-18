function init(){
    const pies = 3.280839895;
    const pulgadas = 39.3700787402;
    const yardas = 1.0936;
    var metros = prompt('Ingrese la cantidad (metros): ', '');
    var operaciones = document.getElementById('factores');
    var resultado = document.getElementById('resultado');

    var contenido = "<header></header>\n";
    contenido += "\t<h1>Conversor de unidades</h1>"
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pies</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "</nav>\n";

    operaciones.innerHTML = contenido;
    var medidas = document.getElementsByTagName('a');
    for(var i=0; i<medidas.length; i++){
        switch(i){
            case 0:
                medidas[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">"  + metros + " * " + pies + " = " + (parseFloat(metros) * parseFloat(pies))/1 + "</p>\n";
                }
                break;
            case 1:
                medidas[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + metros + " * " + pulgadas + " = " + (parseFloat(metros) * parseFloat(pulgadas))/1 + "</p>\n";
                }
                break;
            case 2:
                medidas[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + metros + " * " + yardas + " = " + (parseFloat(metros) * parseFloat(yardas))/1 + "</p>\n";
                }
                break;
        }
    }
}
window.onload = init;