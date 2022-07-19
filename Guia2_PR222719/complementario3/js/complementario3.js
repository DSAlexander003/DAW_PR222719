function inicializar(){
    var numeros = Array();
    var i, max, temp, contenido="", tdelement;

    do{
        max = prompt("Cuántos números va a ingresar (valor entero):", "");
        //Verificar que se ingrese un dato numérico
        if(isNaN(max)){
            alert("El valor digitado no es numérico.");
            continue;
        }
        //Verificar que el valor ingresado sea mayor o igual que 2
         if(max < 2){
            alert("El arreglo debe ser de dimensión 2 o superior");
    }
    }while(isNaN(max) || max < 2);
    for(i=0; i<max; i++){
        numeros[i] = parseInt(prompt("Numero " + (parseInt(i) + 1)," "));
    }

    var datos = document.getElementById('nums');
    with(document){
        contenido += "<h1>Cantidad de cifras</h1>\n"
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

        for(i=0; i<max; i++){
            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        for(i=0; i<max-1; i++){
            for(j=i+1; j<max; j++){
                if(numeros[i]>numeros[j]){
                    temp = numeros[j];
                    numeros[j] = numeros[i];
                    numeros[i] = temp;
                }
            }
        } 
    }
    datos.innerHTML = contenido;
    //Capturando los elemento con clase Off
    tdelement = document.getElementsByClassName('Off');
    alert(tdelement.length);
    for(var i=0; i<tdelement.length; i++){
        tdelement[i].onmouseover = function(){
        this.className = 'On';
    }
        tdelement[i].onmouseout = function(){
        this.className = 'Off';
    }
  }
}

function init() {
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Forma ascendente</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Descendente</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";
    //Preparando el manejo del evento click sobre los enlaces del menú
    var opciones = document.getElementsByTagName('a');
    //Recorrer todos los elementos de enlace (elementos a)
    //y asignar el manejador del evento click
    for(var j=0; j<opciones.length; j++){
        switch(j){
            case 0:
                opciones[i].onclick = function(){
                    with(document){
                        
                    }
                }
        }
    }
}
window.onload = inicializar;