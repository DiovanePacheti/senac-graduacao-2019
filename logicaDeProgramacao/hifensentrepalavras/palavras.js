function calcular() {
alert("oi");  
var inPalavra = document.getElementById("inPalavra");
var palavra = inPalavra.value.toUpperCase();


var soletra = " ";

for(var i = 1; i < palavra.length; i++){
   soletra += palavra.join(" - ");
}

var outHifens = document.getElementById("outHifens");
outHifens.textContent = soletra;    
var outSaida = document.getElementById("outSaida");
outSaida.textContent = "Nada de mais ainda ";

}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcular);
