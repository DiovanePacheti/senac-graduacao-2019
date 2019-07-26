function caixa(){

    var inSaque = document.getElementById("inSaque");
    var saque = Number(inSaque.value);

    if(saque%10 != 0){
        alert("Valor indisponivel de sacar !")
        inSaque.value =  " ";
        inSaque.focus();
        return;
    }

    /**
     *  calculando quantidade de notas
     */

    /**metodo floor vai pegar a divisao do 
    valor por 100 e arredondar pra baixo o valor*/ 
    var qtd100 = Math.floor(saque / 100);

    //O resto da divisao do valor do saque por 100
    var resto = saque%100;

    var qtd50 = Math.floor(resto/50);

    resto = resto%50;
    
    var qtd10 = Math.floor(resto/10);

    var outNotas =document.getElementById("outNotas");

    if(qtd100 > 0){
          outNotas.textContent += "Notas de 100 R$ : " + qtd100;
    }
    if(qtd50 > 0){
          outNotas.textContent += "\nNotas de 50 R$ : " + qtd50;
    }
    if(qtd10 > 0){
          outNotas.textContent += "\nNotas de 10 R$ : " + qtd10;
    }
  
}//fim da function
var btSacar = document.getElementById("btSacar");
btSacar.addEventListener("click", caixa);
