function calcular(){
   
    var inModelo = document.getElementById("inModelo");
    var modelo = inModelo.value;

    var inValor = document.getElementById("inValor");
    var valor = Number(inValor.value);

    var desconto = valor * 0.20;
    var avista = valor - desconto;
    var parcela = valor / 12;

    //capitura o elemento out resposta
    var outRespostaModelo = document.getElementById("outRespostaModelo");
    outRespostaModelo.textContent = "Modelo : " + modelo;

     var outRespostaValor = document.getElementById("outRespostaValor");
    outRespostaValor.textContent = "Valor : " + valor;

     var outRespostaAvista = document.getElementById("outRespostaAvista");
        outRespostaAvista.textContent = "À vista : " + avista;

     var outRespostaDesconto = document.getElementById("outRespostaDesconto"); 
        outRespostaDesconto.textContent = "Total do desconto de 20% : " + (valor - avista).toFixed(2);

     var outRespostaParcela = document.getElementById("outRespostaParcela");      
     outRespostaParcela.textContent = "Parcela : 12 x " + parcela.toFixed(2);

}//fim da function calcular
//vamos obter o ducumento que tiver o ID btMostrar
var btCalcular = document.getElementById("btCalcular");

//quando clicarmos no botao vamos chamar a funçao
btCalcular.addEventListener("click", calcular);
