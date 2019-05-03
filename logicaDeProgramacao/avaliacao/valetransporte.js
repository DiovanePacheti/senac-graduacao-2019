function calcular(){

    var inValor = document.getElementById("inValor");
    var valor = Number(inValor.value);

    var qtdPassagem = valor / 3;

    var troco = valor%3;

    var outqtdPass = document.getElementById("outqtdPass");
    outqtdPass.textContent = "N° VAles : " + Math.trunc(qtdPassagem); 

    var outtroco = document.getElementById("outtroco");
    outtroco.textContent = "Troco R$ : " + troco.toFixed(2);
}//fim da function
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcular);