function calcular() {
  
var inPalavra = document.getElementById("inPalavra");
var palavra = inPalavra.value.toLowerCase();

var inLetra = document.getElementById("inLetra");
var letra = inLetra.value.toLowerCase();

var outSaida = document.getElementById("outSaida");

var cont = 0;

for(var i = 0; i < palavra.length;i++){
    if(palavra.charAt(i) == letra){
        cont++;
    }
}
outSaida.textContent = "A letra ( " + letra + " ) aparece " + cont + " veze(s) ";
}
var btconta = document.getElementById("btconta");
btconta.addEventListener("click", calcular);
