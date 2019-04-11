function verificarAposentadoria(){

    var inContribuicao = document.getElementById("inContribuicao");
    var contribuicao = Number(inContribuicao.value);

    var inIdade = document.getElementById("inIdade");
    var idade = Number(inIdade.value);

    var faltaIdade;
    var faltaContribuicao;
    var saida;

    if(idade >= 60 && contribuicao >= 30){

        saida = "Pode se aposentar ! ";
    }else{
        faltaIdade = 60 - idade;
	faltaContribuicao = 30 - contribuicao;

	if(faltaIdade > faltaContribuicao){
		saida = "Faltam " + faltaIdade + " anos pra aposentadoria por idade ";
	}else{
		saida = "Faltam " + faltaContribuicao + " anos de tempo de contribuição para aposentadoria";
	}

    }

    var outVerificar = document.getElementById("outVerificar");
    outVerificar.textContent = saida;

}//fim da function
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarAposentadoria);
