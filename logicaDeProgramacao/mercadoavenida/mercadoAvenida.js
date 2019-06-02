function calculandoProdutoMercado(){

    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
   

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var valorTotalComDescontoNaTerceiraUnidade = (preco * 2) + (preco - (preco * 0.50) );

    var outSaidaResultadoProduto = document.getElementById("outSaidaResultadoProduto");
    outSaidaResultadoProduto.textContent = "Promoção " + produto;

    var outSaidaResultadoPreco = document.getElementById("outSaidaResultadoPreco");
    outSaidaResultadoPreco.textContent = "Leve 3 por apens " + valorTotalComDescontoNaTerceiraUnidade.toFixed(2) + " R$";


}//fim da function calculando produto mercado

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculandoProdutoMercado);
