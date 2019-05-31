function verificaParImpar(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    	
    for(var i = 2 ; i < numero ; i++){

      if(numero%i==0){
	       
          outResposta.textContent = "O numero " + numero + " não e primo ! ";
	      break;
       }else{
          outResposta.textContent = "O numero " + numero + "é Primo!";
	       
       }
    }//fim do for
}
var btverificar = document.getElementById("btverificar");
btverificar.addEventListener("click", verificaParImpar);
