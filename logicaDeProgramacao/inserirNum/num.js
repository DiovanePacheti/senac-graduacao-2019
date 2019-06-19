var numeros = [];

var inNumero = document.getElementById("inNumero");

function adicionar(){

    var numero = Number(inNumero.value);

   var outNumero = document.getElementById("outNumero");
   

    numeros.push(numero);

    outNumero.textContent = "Numeros : " + numeros.join(", ");
    

             inNumero.value = " ";
             inNumero.focus();

}
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionar);

function soma(){
   
   //var idade = Number(inIdade.value);
   var somando = 0;


   var outSomado = document.getElementById("outSomado");

   for(var i = 0; i < numeros.length; i++){
        somando += numeros[i];
   }
   outSomado.textContent = "Somado : " + somando;;

}//fim da função media
var btSoma = document.getElementById("btSoma");
btSoma.addEventListener("click", soma);



function analisar(){
	alert("oi");
   var ordem = " ";

   var outAnalisar = document.getElementById("outAnalisar");
   for(var i = 0;i < numeros.length; i++){
        
        if(numeros[i] <= numeros[i+1]){
           ordem = " foram ";
        }
        if(numeros[i] >= numeros[i+1]){
	   ordem = " não foram ";
	}

   }

   outAnalisar.textContent = "Os valores" + ordem + "inseridos em ordem";

}//fim da função maior
var btAnalisar = document.getElementById("btAnalisar");
btAnalisar.addEventListener("click", analisar);


