function calcular(){
    
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    cont = " ";
   for(var i = 1 ; i < numero+1 ; i++){
	 if(numero%i==0){
          cont += i;
          if((1+i) <= numero){
            cont += ", ";
          }
         }
    }
   
        outResposta.textContent = "Divisores do " + numero + " : " + cont ;
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcular);
