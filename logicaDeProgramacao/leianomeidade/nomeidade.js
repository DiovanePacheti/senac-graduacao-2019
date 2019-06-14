 var inIdade = document.getElementById("inIdade");               var inNome = document.getElementById("inNome");

 var cont = 0;

function verificaParImpar(){
    alert("oi");
    var outSaida = document.getElementById("outSaida");	
    var outResposta = document.getElementById("outResposta");

    var idade = Number(inIdade.value);
    var nome = inNome.value;

    outSaida.textContent += "Nome do jogador = " + nome + ", Idade do jogador = " + idade + " anos " + "\n"	

    inIdade.value = " ";
    inNome.value = " ";
    inNome.focus();

    cont++;

    var soma += idade;	

    outMedia.textContent = "Media de idade : " + idade / cont; 	
}
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", verificaParImpar);
