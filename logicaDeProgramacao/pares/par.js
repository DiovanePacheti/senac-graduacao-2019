function verificaParImpar(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);
    
    var qtdPares = 0;

    var pares = "";

    var somaPares = 0;


    for(var i = 1; i < numero ; i++){

       if(i%2==0){
          pares += i + ", ";
          qtdPares++;
          somaPares += i;
       }
          
       
    }//fim do for
    outResposta.textContent = "O numero " + numero + "\nPares entre 1 e " + numero + " : " 
          + pares + "\nTem " + qtdPares + " pares " + "\nSoma dos Pares : " + somaPares;

}


var btverificar = document.getElementById("btverificar");
btverificar.addEventListener("click", verificaParImpar);
