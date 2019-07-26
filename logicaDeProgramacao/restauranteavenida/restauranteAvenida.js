/***
 * Função que vai receber o valor do quilo e o comsmo e gramas
 * e retornar o valor ha ser pago 
 */
function calcularConta(){        
    //recebendo o valor do quilo                                                                                                                  
    var inPrecoKg = document.getElementById("inPrecoKg");
    var preco = Number(inPrecoKg.value);

    //recemendo o consumo em gramas
    var inConsumo = document.getElementById("inConsumo");
    var consumo = Number(inConsumo.value);

    //conta feita ja que o consumo esta em grama e dividir consumo por 1000
    var apagar = (consumo / 1000) * preco

    //capitura o elemento out resposta
    var outRespostaModelo = document.getElementById("outApagar");
    outRespostaModelo.textContent = "À pagar R$ : " + apagar;

     
}//fim da function calcular
//vamos obter o ducumento que tiver o ID btMostrar
var btCalcular = document.getElementById("btCalcular");

//quando clicarmos no botao vamos chamar a funçao
btCalcular.addEventListener("click", calcularConta);
