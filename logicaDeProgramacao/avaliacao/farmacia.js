function farmacia(){
    
    var inTotal = document.getElementById("inTotal");
    var total = Number(inTotal.value);

    var parcela;

    var outParcela1 = document.getElementById("outParcela1");
    var outParcela2 = document.getElementById("outParcela2");
    var outParcela3 = document.getElementById("outParcela3");
    var outParcela4 = document.getElementById("outParcela4");
    var outParcela5 = document.getElementById("outParcela5");
    var outParcela6 = document.getElementById("outParcela6");


    if(total <= 40.00){
        outParcela1.textContent = "Pode pagar em apenas 1x de " + total.toFixed(2);
    }
    if((total > 40.00) && ((total / 2) > 20)){
        outParcela2.textContent = "Pode pagar em apenas 2x de " + (total / 2).toFixed(2);
    }
     if((total > 40.00) && ((total / 3) > 20)){
        outParcela3.textContent = "Pode pagar em apenas 3x de " + (total / 3).toFixed(2);
    }
    if((total > 40.00) && ((total / 4) > 20)){
        outParcela4.textContent = "Pode pagar em apenas 4x de " + (total / 4).toFixed(2);
    }
     if((total > 40.00) && ((total / 5) > 20)){
        outParcela5.textContent = "Pode pagar em apenas 5x de " + (total / 5).toFixed(2);
    }
    if((total > 40.00) && ((total / 6) > 20)){
        outParcela6.textContent = "Pode pagar em apenas 6x de " + (total / 6).toFixed(2);
    }

}//fim da function
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", farmacia);