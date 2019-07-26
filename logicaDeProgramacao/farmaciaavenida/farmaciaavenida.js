/**
 * Função que vai retonar o valor de dois 
 * produtos com a promoção dos centavos zerado  
 */
function calPromocao(){

    
//recebendo o nome do medicamento
var inMedicamento = document.getElementById("inMedicamento");
var medicamento = inMedicamento.value;

//recebendo o preço do medicamento 
var inPreco = document.getElementById("inPreco");
var preco = Math.floor(Number(inPreco.value));

//Multiplicando valor do medicamento por dois
var descontoLeve2 = (preco * 2);

//variavel sai retornar para o usuario a resposta
var outpromocao = document.getElementById("outpromocao");
outpromocao.textContent = "Leve 2 " + medicamento + " na promoção por R$ " + descontoLeve2.toFixed(2);

}
var btpromocao = document.getElementById("btpromocao");
btpromocao.addEventListener("click", calPromocao);
