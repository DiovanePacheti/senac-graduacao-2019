function verificaParImpar(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    for(var i = 0; i < numero ; i++){

       if(numero%2==0){
          outResposta.textContent = "O numero " + numero + " é Par ! ";
       }else{
          outResposta.textContent = "O numero " + numero + "é Impar !";
       }
    }//fim do for
}
var btverificar = document.getElementById("btverificar");
btverificar.addEventListener("click", verificaParImpar);
