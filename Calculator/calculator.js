//variables de las operaciones
var operarA;
var operarB;
var operacion;

function calc(){ 
    //variables de mi calculadora
	
var resultado=document.getElementById('resultado');
var siete=document.getElementById('siete');
var ocho=document.getElementById('ocho');
var nueve=document.getElementById('nueve');
var division=document.getElementById('division');
var cuatro=document.getElementById('cuatro');
var cinco=document.getElementById('cinco');
var seis=document.getElementById('seis');
var multiplicar=document.getElementById('multiplicar');
var uno=document.getElementById('uno');
var dos=document.getElementById('dos');
var tres=document.getElementById('tres');
var resta=document.getElementById('resta');
var igual=document.getElementById('igual');
var reset=document.getElementById('reset');
var cero=document.getElementById('cero');
var suma=document.getElementById('suma');



//eventos números
uno.onclick= function(e){
    resultado.textContent= resultado.textContent + "1";
}
dos.onclick= function(e){
    resultado.textContent= resultado.textContent + "2";
}
tres.onclick= function(e){
    resultado.textContent= resultado.textContent + "3";
}
cuatro.onclick= function(e){
    resultado.textContent= resultado.textContent + "4";
}
cinco.onclick= function(e){
    resultado.textContent= resultado.textContent + "5";
}
seis.onclick= function(e){
    resultado.textContent= resultado.textContent + "6";
}
siete.onclick= function(e){
    resultado.textContent= resultado.textContent + "7";
}
ocho.onclick= function(e){
    resultado.textContent= resultado.textContent + "8";
}
nueve.onclick= function(e){
    resultado.textContent= resultado.textContent + "9";
}
cero.onclick= function(e){
    resultado.textContent= resultado.textContent + "0";
}
//eventos operaciones
reset.onclick= function(e){
    resetear()
}
suma.onclick= function(e){
   operarA= resultado.textContent;
   operacion= "+";
   limpiar();
}
resta.onclick= function(e){
    operarA= resultado.textContent;
    operacion= "-";
    limpiar();
 }
 division.onclick= function(e){
    operarA= resultado.textContent;
    operacion= "/";
    limpiar();
 }
 multiplicar.onclick= function(e){
    operarA= resultado.textContent;
    operacion="*";
    limpiar();
 }
 igual.onclick= function(e){
    operarB= resultado.textContent;
    resolver();
 }
}

function limpiar() {
    resultado.textContent="";
}
function resetear() {
    resultado.textContent="";
    operarA= 0;
    operarB= 0;
    operacion="";
}
function resolver(){
    var res= 0;
    switch(operacion){
        case "+":
            res= parseFloat(operarA) + parseFloat(operarB);
            break;
        case "-":
            res= parseFloat(operarA) - parseFloat(operarB);
            break;
        case "*":
            res= parseFloat(operarA) * parseFloat(operarB);
            break;
        case "/":
                res= parseFloat(operarA) / parseFloat(operarB);
                break;
    }
    resetear ();
    resultado.textContent =res;
}