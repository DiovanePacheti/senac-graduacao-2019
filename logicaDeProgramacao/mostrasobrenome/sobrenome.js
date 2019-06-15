function nome(){
    
var inNome = document.getElementById("inNome");
var outPrimeiroNome = document.getElementById("outPrimeiroNome");
var outNOme = document.getElementById("outNome");

var nome = inNome.value;
var espaco = nome.indexOf(" ");
var sobrenome = nome.substr(nome.lastIndexOf(" "));

outNome.textContent = nome;
outSobrenome.textContent = "Sobrenome : " + sobrenome;
}
var btVerifica = document.getElementById("btVerificar");
btVerifica.addEventListener("click", nome);

