function repete(){
    

    var inPalavra = document.getElementById("inPalavra");
    var palavra = inPalavra.value;

    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    var vezes = " ";
    for(var i =0;i < numero; i++){
	vezes += palavra + "*";
		
    } 	    
    outResposta.textContent = vezes ;
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", repete);
