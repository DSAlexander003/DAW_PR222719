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
        contenido += "<h1>Cantidad de cifras impares</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        if(numeros[i] % 2 == 0){
            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";

        contenido += "<h1>Cantidad de cifras pares</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

        contenido += "<h1>Suma de cifras impares</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

        contenido += "<h1>Suma de numeros pares</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

        contenido += "<h1>Cantidad de cifras pares</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

        contenido += "<h1>Suma de todas las cifras</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        
        contenido += "<h1>Cifra mayor</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

        contenido += "<h1>Cifra menor</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
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
window.onload = inicializar;