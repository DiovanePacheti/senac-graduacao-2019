function calculandoTempo(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    var horas = Math.trunc(numero/60);

    var minutos = numero%60;

    outResposta.textContent = "filme dura " + horas + " horas " + minutos + " minutos"
}
var btverificar = document.getElementById("btverificar");
btverificar.addEventListener("click", calculandoTempo);
