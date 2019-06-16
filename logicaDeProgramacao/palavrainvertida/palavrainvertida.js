function convertendo() {
   alert("oi");
    var inPalavra = document.getElementById("inPalavra");
    var palavra = inPalavra.value;

    var outSaida = document.getElementById("outSaida");
    outSaida.textContent = palavra + reverse(palavra);

    var palavra = inPalavra.value;
    
    var inverte = " ";

    var inverte += palavra.charAt(0).toUpperCase();
	
    for(var i = palavra.lenght-1; i > 1 ; i--){
	inverte += palavra.charAt(i).toLowerCase();
    }
    
    outSaida.textContent = " : " + inverte;

}
var btInverter = document.getElementById("btInverter");
btInverter.addEventListener("click", convertendo);
