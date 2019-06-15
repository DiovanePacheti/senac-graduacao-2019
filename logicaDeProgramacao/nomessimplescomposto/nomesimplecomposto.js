function nome(){
        
	var inNome = document.getElementById("inNome");
        var outSaida = document.getElementById("outSaida");

	var nome = inNome.value;

	var simplecomposto;

	/** o metodo indexOf() e usado para pesquisa pelo
	 * espaço (-1 indica que não foi encontrado)*/
		if(nome.indexOf(" ") == -1){
			simplecomposto = "Simple";
		}else{	
            simplecomposto = "Composto";
		}
		

	outSaida.textContent = "Vocẽ digitou um nome " 
	+ simplecomposto;
}
var btVerifica = document.getElementById("btVerificar");
btVerifica.addEventListener("click", nome);
