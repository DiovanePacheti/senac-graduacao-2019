function verificarAposentadoria(){

    var inContribuicao = document.getElementById("inContribuicao");
    var contribuicao = Number(inContribuicao.value);

    var inIdade = document.getElementById("inIdade");
    var idade = Number(inIdade.value);

    var outVerificar = document.getElementById("outVerificar");
    outVerificar.textContent = "saida";

}//fim da function
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarAposentadoria);
