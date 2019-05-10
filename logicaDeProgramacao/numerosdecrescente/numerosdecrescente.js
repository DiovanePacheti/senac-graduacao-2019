function calcular(){
    
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    cont = " ";
    for(var i = numero ; 0  < i-1 ; i--){
       if(i%2==0){
          cont += i;
          if((i) > 3){
              cont += ", ";
	  }
       }
    }//fim do for
   
        outResposta.textContent =" Pares entre " + numero + " e 1 : " + cont ;
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcular);
