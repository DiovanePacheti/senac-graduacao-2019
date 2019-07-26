function figurinhas(){
  
	var inValor = document.getElementById("inValor");
	var valor = Number(inValor.value);

	var qtdpacote = Math.trunc(valor / 2);
	var qtdfigurinhas = qtdpacote * 5;
        var troco = valor % 2;

	var outPacotes = document.getElementById("outPacotes");
	outPacotes.textContent = qtdpacote + " - Pacotes , " + qtdfigurinhas + " - Figurinhas" ;
        
        if(troco > 0){
		var outTroco = document.getElementById("outTroco");
		outTroco.textContent = "Troco R$ : " + troco.toFixed(2);
	}


}//fim da function
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click" , figurinhas);
