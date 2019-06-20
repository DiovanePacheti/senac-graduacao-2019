function calcular() {

var inPalavra = document.getElementById("inPalavra");
var palavra = inPalavra.value.toUpperCase();


var soletra = palavra.charAt(0);

for(var i = 1; i < palavra.length; i++){
   soletra += " - " +  palavra.charAt(i)  ;
}

var outHifens = document.getElementById("outHifens");
outHifens.textContent = "Você informou : " +  soletra;    
var outSaida = document.getElementById("outSaida");
outSaida.textContent = "Palavra : " + palavra.charAt(0) +  palavra.substr(1).toLowerCase();

}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcular);
