function verificaParImpar(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if(numero%2==0){
        outResposta.textContent = "O numero " + numero + " é Par ! ";
    }else{
        outResposta.textContent = "O numero " + numero + " é Impar !";
    }
}
var btverificar = document.getElementById("btverificar");
btverificar.addEventListener("click", verificaParImpar);
