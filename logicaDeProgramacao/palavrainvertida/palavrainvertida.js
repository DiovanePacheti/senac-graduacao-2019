function convertendo() {
   alert("oi");
    var inPalavra = document.getElementById("inPalavra");
    var palavra = inPalavra.value;

    var outSaida = document.getElementById("outSaida");
    outSaida.textContent = palavra + reverse(palavra);
	


}

var btInverter = document.getElementById("btInverter");
btInverter.addEventListener("click", convertendo);
