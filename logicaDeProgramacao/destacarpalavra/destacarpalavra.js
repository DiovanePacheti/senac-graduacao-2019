function verificaParImpar(){
    

    var inPalavra = document.getElementById("inPalavra");
    var palavra = inPalavra.value;

    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    var vezes = " ";
    var cont = 0;	
    for(var i =0;i < numero; i++){
        vezes +=  "*";
    }

    vezes += palavra ;

    do{
	vezes += "*";
	cont++;    
    }while(cont < numero);	    
    outResposta.textContent = vezes ;
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", verificaParImpar);
