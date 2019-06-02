function calcularMedia(){

        var inNotaUm = document.getElementById("inNotaUm");
        var notaUm = Number(inNotaUm.value);
        var inNotaDois = document.getElementById("inNotaDois");
        var notaDois = Number(inNotaDois.value);

        var media = (notaUm + notaDois)/ 2;

	var statusCurricular;

        var outMedia = document.getElementById("outMedia");
        outMedia.textContent = "Media : " + media;


      if(media <= 5){
          statusCurricular = "Reprovado ";
      }else if(media > 5 && media < 6){
	 statusCurricular = "Recuperação ";
      }else if(media >= 6){
	  statusCurricular = "Aprovado ";
      }

	var outStatusCurricular = document.getElementById("outStatusCurricular");
	outStatusCurricular.textContent = "O aluno foi " + statusCurricular;

}
//vamos obter o ducumento que tiver o ID btMostrar
var btMostrar = document.getElementById("btCalcular");
//quando clicarmos no botao vamos chamar a funçao
btCalcular.addEventListener("click", calcularMedia);

