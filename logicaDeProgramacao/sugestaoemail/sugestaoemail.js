function email() {

	  

  var inNome = document.getElementById("inNome");
  var nome = inNome.value.toLowerCase();

  var dividindoNomes = nome.split(" ");

  var numDivisoes = dividindoNomes.length
  var email = " ";

  for(var i = 0; i < numDivisoes; i++){
	  email += dividindoNomes[i].charAt(0);
  }

  var outEmail = document.getElementById("outEmail");
  outEmail.textContent = "E-mail : " + email.toLowerCase() + "@senac.com.br";	

}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", email);
