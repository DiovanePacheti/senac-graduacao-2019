function verificaParImpar(){

    alert("oi");

    do{	
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    var outSaida = document.getElementById("outSaida");	    

    var numero = Number(inNumero.value);
    if(numero ==0 ){
	    break;
    }	    

    var mostraNum += numero + ". ";
    outSaida.textContent = mostraNum;

    if(numero%2==0){
        outResposta.textContent = "O numero " + numero + " é Par ! ";
    }else{
        outResposta.textContent = "O numero " + numero + "é Impar !";
    }
    
    inNumero.value = " ";
    inNumero.focus();	    
	    
    }while(true);
}
var btverificar = document.getElementById("btverificar");
btverificar.addEventListener("click", verificaParImpar);

