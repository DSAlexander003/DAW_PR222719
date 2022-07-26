window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
    }

x = "0";
xi = 1;
ni = 0;
comaDecimal = 0;
op = "no"; 

function operar(nums){
    if(x=="0" || xi==1){
        pantalla.innerHTML = nums;
        x += nums;
    }
    else{
        pantalla.innerHTML+=nums;
        x += nums;
    }
    xi = 0;
}

function numero(nums) { 
    if (x=="0" || xi==1  ) { 
       pantalla.innerHTML=nums;
       x=nums; //guardar número
       if (nums==".") { 
          pantalla.innerHTML="0."; 
          x=nums; 
          comaDecimal=1; 
          }
      }
      else { 
          if (nums=="." && comaDecimal==0) { 
              pantalla.innerHTML+=nums;
              x+=nums;
              comaDecimal=1; 
          }
          else if (nums=="." && comaDecimal==1) {} 
          else {
              pantalla.innerHTML+=nums;
              x+=nums
          }
       }
       xi=0 
    }

function operar(operador){
    ni = x
    op = operador; 
    xi = 1; 
}

function igualar() {
    if (op=="no") { 
       pantalla.innerHTML=x;	
    }
    else {
       sl=ni+op+x; 
       sol=eval(sl) 
       pantalla.innerHTML=sol 
       x=sol; 
       op="no"; 
       xi=1; 
     }
}

function raiz(){
    x =Math.sqrt(x)
    pantalla.innerHTML = x;
    op="no";
    xi=1;
}

function porcentaje(){
    x = x/100
    pantalla.innerHTML=x;
    igualar()
    xi = 1
}

function opuesto(){
    x2 = Number(x);
    x2 =- x2;
    x = String(x2);
    pantalla.innerHTML;
}

function inversa(){
    x2 = Number(x);
    x2 = (1/x2);
    x = String(x2);
    pantalla.innerHTML = x;
    xi=1;
}

function retro(){
    cifra = x.length;
    r=x.substr(cifras-1,cifras) 
    x=x.substr(0,cifras-1) 
    if (x=="") {x="0";} 
    if (br==".") {coma=0;} 
    pantalla.innerHTML=x;          
}

function borradoParcial(){
    pantalla.innerHTML=0;
    x = 0;
    comaDecimal = 0; 
}

function borradoTotal(){
    pantalla.innerHTML = 0;
    x="0";
    comaDecimal = 0;
    ni = 0;
    op="no"
}