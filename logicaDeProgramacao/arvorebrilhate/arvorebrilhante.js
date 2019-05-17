function arvBrilhante(){

    var inAltArvore = document.getElementById("inAltArvore");
    var alturaArvore = Number(inAltArvore.value);
    var vezes = " ";
    
    for(var i =0;i < alturaArvore; i++){
       for(var j = 0 ; j <= i ; j++){	    
          vezes +=  "*";

       }
        	    
       vezes += "\n";	    
    }


    outResposta.textContent = vezes ;
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", arvBrilhante);
