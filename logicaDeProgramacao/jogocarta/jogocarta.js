function calcularDuracao(){

    var inHoraInicial = document.getElementById("inHoraInicial");
    var inHoraInicial = Number(inHoraInicial.value);

    var inHoraFinal = document.getElementById("inHoraFinal");
    var inHoraFinal = Number(inHoraFinal.value);

    var duracao;

    if(inHoraInicial < inHoraFinal){
       duracao = inHoraFinal - inHoraInicial;
    }else{
       duracao = (24+inHoraFinal) - inHoraInicial;
    }

    var outDuracao = document.getElementById("outDuracao");
    outDuracao.textContent = "Duração do jogo  " + duracao + " hora(s)";

}//fim da function
var btCalcularDuracao = document.getElementById("btCalcularDuracao");
btCalcularDuracao.addEventListener("click", calcularDuracao);
