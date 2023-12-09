function convertir ()
{
    var valor=parseFloat(document.getElementById("cantidad").value);
    var de=document.getElementById("de").value;
    var a=document.getElementById("a").value;
    var dolar=0.93;
    var yen=0.0064;
    var resultado=0;
    var moneda;

    //euro a dolar

if (de==1&&a==2){
    resultado=valor/dolar;
}
// euro a yen
else if (de==1&&a==3){
    resultado=valor/yen;
}
//dolar a euro
else if (de==2&&a==1){
    resultado=valor*dolar;
}
//dolar a yen
else if (de==2&&a==3){
    resultado=valor*(dolar/yen);
}
//yen a euro
else if (de==3&&a==1){
    resultado=valor*yen;
}
//yen a dolar
else if (de==3&&a==2){
    resultado=valor*(yen/dolar);
}
else{
    resultado=valor;
}
switch (a) {
    case "1":
      moneda="€";
      break;
    case "2":
        moneda="US$";
      break;
    case "3":
        moneda="¥";
      break;
    default:
        moneda="€";
      break;
  }
document.getElementById("resultado").innerHTML="Resultado:"+moneda+resultado.toFixed(2);
}