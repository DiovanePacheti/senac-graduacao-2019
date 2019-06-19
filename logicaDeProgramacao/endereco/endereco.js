//var numeros = [];
function adicionar(){
    var inEndereco = document.getElementById("inEndereco");
    var endereco = inEndereco.value;

    var divisaoRuaNum = endereco.split(",", 1);
  //  var divisaoNumeroCidade = divisaoRuaNum.split("-", 1);


    var outEndereco = document.getElementById("outEndereco");
   

    outEndereco.textContent = "Rua : " + divisaoRuaNum.join("\n ");
    

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", adicionar);
