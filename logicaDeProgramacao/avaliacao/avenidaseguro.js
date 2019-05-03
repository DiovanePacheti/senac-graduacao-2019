function calculoseguro(){

    var inAvaliacao = document.getElementById("inAvaliacao");
    var avaliacao = Number(inAvaliacao.value);

    var inAno = document.getElementById("inAno");
    var ano = Number(inAno.value);

    var anoAtual = 2019;

    var anosDescontar = anoAtual - ano ;

    var desconto = anosDescontar * 50.00;

    var seguro = avaliacao * 0.04;

    var total = seguro - desconto;

    var outSeguroDesconto = document.getElementById("outSeguroDesconto");
    outSeguroDesconto.textContent = "Seguro : " + seguro.toFixed(2) + " - Desconto : " + desconto.toFixed(2); 

    var outtotal = document.getElementById("outtotal");
    outtotal.textContent = "Total R$ : " + total.toFixed(2);

}//fim da function
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculoseguro);