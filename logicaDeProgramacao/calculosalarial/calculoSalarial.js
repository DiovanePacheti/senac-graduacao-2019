function calcular(){
  

        var inNome= document.getElementById("inNome");
        var nome = inNome.value;

        var inSalario = document.getElementById("inSalario");
        var salario = Number(inSalario.value);
        //   var media = (notaUm + notaDois)/ 2;

        //    var statusCurricular;
	
	var novoSalario = salario * 1.10;

        var outNome = document.getElementById("outNome");
        outNome.textContent = "Nome : " + nome;


        var outSalario = document.getElementById("outSalario");
        outSalario.textContent = "Reajuste salarial :" + novoSalario.toFixed() + " R$";




	/*
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;

    var inSalario = document.getElementById("inSalario");
    var salario = number(inSalario.value);

    var novoSalario = salario * 1.10;

    //capitura o elemento out resposta
    var outNome = document.getElementById("outNome");
    outNome.textContent = "ola " + nome;

    var outSalario = document.getElementById("outSalario");
    outSalario.textContent = "Novo salario R$ : " + novoSalario.toFixed(2);
	*/

} 
//vamos obter o ducumento que tiver o ID btMostrar 

var btMostrar = document.getElementById("btMostrar");

btMostrar.addEventListener("click", calcular);
