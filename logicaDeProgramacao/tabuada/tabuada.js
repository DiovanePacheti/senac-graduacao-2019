function calcular(){
    
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    cont = " ";
    for(var i = 0; i <= 10 ; i++){

	    var outRespostai = document.getElementById("outResposta"+i);
       
	    outRespostai.textContent += numero + (" x ") + i + (" = " ) + (i*numero);
    }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcular);
