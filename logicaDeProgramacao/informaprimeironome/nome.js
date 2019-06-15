function nome(){
        
        var inNome = document.getElementById("inNome");
        var outPrimeiroNome = document.getElementById("outPrimeiroNome");
	var outNome = document.getElementById("outNome");

        var nome = inNome.value;

        var primeiro = nome.substr(0, nome.indexOf(" "));

        
        outPrimeiroNome.textContent = "Primeiro nome :  "
        + primeiro ;
	outNome.textContent = nome;
}
var btVerifica = document.getElementById("btVerifica");
btVerifica.addEventListener("click", nome);

