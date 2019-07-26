function repete(){
    
    
    var inPalavra = document.getElementById("inPalavra");
    var palavra = inPalavra.value;

    var inNumero = document.getElementById("inNumero");
    

    var numero = Number(inNumero.value);
    var vezes = " ";

    for(var i =0;i < numero; i++){
	vezes += palavra + "*";
    } 	    
    alert(vezes);
    var outResposta = document.getElementById("outResposta");
    outResposta.textContent = "nada"; 
    //outResposta.textContent = "Nada "+ vezes;
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", repete);
