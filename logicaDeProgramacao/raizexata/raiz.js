function calcular() {
  
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    var raiz = Math.sqrt(numero);

    var outRaiz = document.getElementById("outRaiz");
    outRaiz.textContent = "Raiz : " + raiz.toFixed(4);

    if(raiz %1 != 0){
      resp = " não possui ";
    }else{
      resp = " possui ";
    }

    var outResposta = document.getElementById("outResposta");
    outResposta.textContent = numero + resp + "rais exata !";
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcular);
