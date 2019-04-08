function convertendo() {
  
    var inSerie = document.getElementById("inSerie");
    var serie = inSerie.value;

    var inDuracao = document.getElementById("inDuracao");
    var duracao = Number(inDuracao.value);

    var horaInteira = duracao / 60;

    var hora = Math.trunc(horaInteira);
    var minutos = ( duracao % 60);

    var outTempoDuracao = document.getElementById("outTempoDuracao");
    outTempoDuracao.textContent = serie + " dura : " + hora + " horas e " + minutos + " minutos";
	


}

var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", convertendo);
