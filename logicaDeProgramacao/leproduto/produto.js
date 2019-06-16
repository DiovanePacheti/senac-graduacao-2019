function calcular() {
  
  var inPedido = document.getElementById("inPedido");
  var pedido = inPalavra.value.toLowerCase();

  var numPedidos = pedido.split(",");
  var itens = numPedidos.length;


  var outPedidos = document.getElementById("outPedidos");
  outPedidos.textContent = "Nº Itens : " + numPedidos.join("\n");	

}
var btFinalizar = document.getElementById("btFinalizar");
btFinalizar.addEventListener("click", calcular);
