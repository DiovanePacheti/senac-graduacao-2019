function letrasComuns (){

    var inFrutaUm = document.getElementById("inFrutaUm");
    var inFrutaDois = document.getElementById("inFrutaDois");

    var fruta1 = inFrutaUm.value.toLowerCase();
    var fruta2 = inFrutaDois.value.toLowerCase();
    var letrasIguais = " ";

    var tam1 = fruta1.length;
    var tam2 = fruta2.length;

    for(var i = tam1; i>0; i--){
        for(var j = 0 ; j < tam2 ; j++){
            if(fruta1.charAt(i) == fruta2.charAt(j)){
                letrasIguais += fruta1.charAt(i) + ", ";
            }
        }
    }
    var outLetras = document.getElementById("outLetras");
    outLetras.textContent = "Letras Comuns : " + letrasIguais ;

    
}//fim da funçao
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", letrasComuns);
