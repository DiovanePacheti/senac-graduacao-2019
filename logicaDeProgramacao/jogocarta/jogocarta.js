function calcularDuracao(){

    var inHoraInicial = document.getElementById("inHoraInicial");
    inHoraInicial = Number(inHoraInicial.value);

    var inHoraFinal = document.getElementById("inHoraFinal");
    inHoraFinal = Number(inHoraFinal.value);

    var outDuracao = document.getElementById("outDuracao");
    outDuracao.textContent = "saida ";

}//fim da function
var btCalcularDuracao = document.getElementById("btCalcularDuracao");
btCalcularDuracao.addEventListener("click", calcularDuracao);
