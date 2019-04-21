function calculardesconto(){

    var inSalario = document.getElementById("inSalario");
    salario = Number(inSalario.value);

    var desconto = (salario * 0.02);

    var novoSalario = salario - desconto;

    var outDesconto = document.getElementById("outDesconto");
    outDesconto.textContent = "Desconto R$ : " + desconto.toFixed(2);

    var outSalario = document.getElementById("outSalario");
    outSalario.textContent = "Salário Final R$ : " + novoSalario.toFixed(2);

}//fim da function
var btDesconto = document.getElementById("btDesconto");
btDesconto.addEventListener("click", calculardesconto)
