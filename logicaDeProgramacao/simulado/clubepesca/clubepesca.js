function pagto(){

    var inPessoa = document.getElementById("inPessoa");
    pessoa = Number(inPessoa.value);

    var inPeixes = document.getElementById("inPeixes");
    peixe = Number(inPeixes.value);
    
    var pagarPorPessoa = pessoa * 10;

    var valorPeixe = 5;

    //Utilizando o metodo Math.abs para retornar o valor positivo 
    var peixeExtra = Math.abs(pessoa - peixe);
    alert(peixeExtra);
    if (peixeExtra > 0){
        peixeExtra = peixeExtra * valorPeixe;
    }
    alert(peixeExtra);
    var outPagar = document.getElementById("outPagar");
    outPagar.textContent = "Pagar R$ : " + (peixeExtra + pagarPorPessoa).toFixed(2);

}//fim da function
var btcalcularPagto = document.getElementById("btcalcularPagto");
btcalcularPagto.addEventListener("click", pagto);
