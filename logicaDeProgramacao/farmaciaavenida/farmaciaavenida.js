function calPromocao(){

var inMedicamento = document.getElementById("inMedicamento");
var medicamento = inMedicamento.value;

var inPreco = document.getElementById("inPreco");
var preco = Math.floor(Number(inPreco.value));

var descontoLeve2 = (preco * 2);
var outpromocao = document.getElementById("outpromocao");
outpromocao.textContent = "Leve 2 " + medicamento + " na promoção por R$ " + descontoLeve2.toFixed(2);

}
var btpromocao = document.getElementById("btpromocao");
btpromocao.addEventListener("click", calPromocao);
