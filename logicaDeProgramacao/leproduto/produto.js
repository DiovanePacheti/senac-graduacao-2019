function calcular() {
  
  var inPedido = document.getElementById("inPedido");
  var pedido = inPedido.value;

  var numPedidos = pedido.split(",");
  var itens = numPedidos.length;


  var outLista = document.getElementById("outLista");
  outLista.textContent = "Nº Itens : " + numPedidos.join("\n");	

  var outQtdItens = document.getElementById("outQtdItens");
  outQtdItens.textContent = "Nº Itens : " + itens;	

}
var btFinalizar = document.getElementById("btFinalizar");
btFinalizar.addEventListener("click", calcular);
