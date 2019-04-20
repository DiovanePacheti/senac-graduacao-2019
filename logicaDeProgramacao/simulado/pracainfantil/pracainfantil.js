function calculardesconto(){

    var inSalario = document.getElementById("inSalario");
    salario = Number(inSalario.value);

    var desconto = salario * 0.2;

    var novoSalario = salario - (salario * 0.20);

    var outDesconto = document.getElementById("outDesconto");
    outDesconto.textContent = "Desconto R$ : " + desconto;

    var outSalario = document.getElementById("outSalario");
    outSalario.textContent = "Salário Final R$ : " + novoSalario;

}//fim da function
var btDesconto = document.getElementById("btDesconto");
btDesconto.addEventListener("click", calculardesconto)
