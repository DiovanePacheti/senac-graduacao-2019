function caixa(){

    var inSaque = document.getElementById("inSaque");
    var saque = Number(inSaque.value);

    var outNotas =document.getElementById("outNotas");
    outNotas.textContent = "saida";

}//fim da function
var btSacar = document.getElementById("btSacar");
btSacar.addEventListener("click", caixa);
