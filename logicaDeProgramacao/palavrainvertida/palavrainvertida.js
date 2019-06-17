function convertendo() {
   alert("oi");
	
    var inPalavra = document.getElementById("inPalavra");
    var palavra = inPalavra.value;

    var outSaida = document.getElementById("outSaida");
    

    var palavra = inPalavra.value;
    
    var inverte = " er ";

    	
    for(var i = palavra.lenght-1; i >= 0 ; i--){
	inverte += palavra.charAt(i);
    }
    
    outSaida.textContent = " : " +  inverte.substr(0);

}
var btInverter = document.getElementById("btInverter");
btInverter.addEventListener("click", convertendo);
