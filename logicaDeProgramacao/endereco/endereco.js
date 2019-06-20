//var numeros = [];
function adicionar(){
    var inEndereco = document.getElementById("inEndereco");
    var endereco = inEndereco.value;

    var outRua = document.getElementById("outRua");
    var outNumero = document.getElementById("outNumero");
    var outCidade = document.getElementById("outCidade");

    if(endereco == " "){
	alert("Endereço não informado !");
	inEndereco.focus();
	return;    
    }

    var virgula = endereco.indexOf(",");
    var traco = endereco.lastIndexOf("-");	

    if(virgula == -1 || traco == -1){
	alert("Informe os dados no formato indicado (Eua, Número - Cidade)");
	inEndereco.focus();
	return;    
    }	    

    var rua = endereco.substr(0, virgula);
    var numero = endereco.substr(virgula+1, traco - (virgula+1));
    var cidade = endereco.substr(traco+1);

    outRua.textContent = "Rua : " + rua;
    outNumero.textContent = "Número : " + numero;
    outCidade.textContent = "Cidade : " + cidade;
    

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", adicionar);
