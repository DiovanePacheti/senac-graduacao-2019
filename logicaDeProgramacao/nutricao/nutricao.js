function calcularImc() {
  
    var inNome = document.getElementById("inNome");
    var nome = inNome.value;

    var inSexo = document.getElementById("inSexo");
    var sexo = inSexo.value;

    var inAltura = document.getElementById("inAltura");
    var altura = Number(inAltura.value)/100;

    var peso = 0;

    if(sexo == "f" || sexo =="F"){
	peso = 21;
    }else if(sexo == "m" || sexo == "M"){
        peso = 22;
    }
    altura *= 100;
    var pesoIdeal = peso * (altura * altura);

    var outSaida = document.getElementById("outSaida");
    outSaida.textContent = nome + " seu peso ideal é " + pesoIdeal.toFixed(3) + "kg";

}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularImc);
