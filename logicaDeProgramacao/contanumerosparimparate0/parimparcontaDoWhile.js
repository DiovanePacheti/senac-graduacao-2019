function verificaParImpar(){

    alert("oi");

    do{	
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    if(numero ==0 ){
	    break;
    }	    
    if(numero%2==0){
        outResposta.textContent = "O numero " + numero + " é Par ! ";
    }else{
        outResposta.textContent = "O numero " + numero + "é Impar !";
    }
    }while(true);
}
var btverificar = document.getElementById("btverificar");
btverificar.addEventListener("click", verificaParImpar);

