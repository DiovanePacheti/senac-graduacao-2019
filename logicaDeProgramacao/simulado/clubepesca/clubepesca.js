function pagto(){

    var inPessoa = document.getElementById("inPessoa");
    pessoa = Number(inPessoa.value);

    var inPeixes = document.getElementById("inPeixes");
    peixe = Number(inPeixes.value);
    
    var pagarPorPessoa = pessoa * 10;

    var valorPeixe = 5;

    var peixeExtra = pessoa - peixe;

    if (peixeExtra > 0){
        peixeExtra = peixeExtra * valorPeixe;
    }

    var outPagar = document.getElementById("outPagar");
    outPagar.textContent = "Pagar R$ : " + (peixeExtra + pagarPorPessoa).toFixed(2);

}//fim da function
var calcularPagto = document.getElementById("calcularPagto");
calcularPagto.addEventListener("click", pagto);
