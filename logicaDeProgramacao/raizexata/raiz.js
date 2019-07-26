function calcular() {
  
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    var raiz = Math.sqrt(numero);
    var raizSaida;

    if(raiz %1 != 0){
      resp = " não possui ";
      raizSaida = raiz.toFixed(4);
      
    }else{
      resp = " possui ";
      raizSaida = Math.trunc(raiz) ;

    }

    var outRaiz = document.getElementById("outRaiz");
    outRaiz.textContent = "Raiz : " + raizSaida;


    var outResposta = document.getElementById("outResposta");
    outResposta.textContent = numero + resp + "rais exata !";
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcular);
