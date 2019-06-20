function convertendo() {
   	
    var inPalavra = document.getElementById("inPalavra");
    var palavra = inPalavra.value;

    var outSaida = document.getElementById("outSaida");
    

    var invertida = " ";
    	
    for(var i = palavra.length-1; i >= 0 ; i--){
	invertida += palavra.charAt(i);
    }
    
    outSaida.textContent = palavra + " : " +  invertida.charAt(1).toUpperCase() +  invertida.substr(2).toLowerCase();

}
var btInverter = document.getElementById("btInverter");
btInverter.addEventListener("click", convertendo);
