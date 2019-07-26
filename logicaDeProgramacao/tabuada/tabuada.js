function calcular(){
    
    var inNumero = document.getElementById("inNumero");
    
    if(inNumero)
    var numero = Number(inNumero.value);
    for(var i = 0; i <= 10 ; i++){

	    var outRespostai = document.getElementById("outResposta"+i);
       
	    outRespostai.textContent += numero + (" x ") + i + (" = " ) + (i*numero);
    }

    inNumero.value = " ";
    inNumero.focus();
    return;
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcular);
