var numeros  = [];    
var inNumero = document.getElementById("inNumero");

function adicionar() {
 var outNumAdd = document.getElementById("outNumAdd");
 var numero = Number(inNumero.value);

 if (numero == 0 || isNaN(numero)) {
   alert("valor invalido");
   inNumero.focus();
   return;
 }

 //Adicionando numeros no fim do vetor
 numeros.push(numero);   

 outNumAdd.textContent = "Números " + numeros.join(", ");         
 inNumero.value = "";
 inNumero.focus();
}
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionar);

// --- inicio da funçao pares ---

function pares(){
  // verificando o tamanho do vetor
 if(numeros.length == 0){
   alert("vetor vazio");
   inNumero.focus();
   return;
 }
 var outSaida = document.getElementById("outSaida"); 
 var res = "";

 for(var i =0; i < numeros.length; i++){
   if(numeros[i]%2==0){
    res += numeros[i] +", ";
   }    
 }//fim do for

 if(res == ""){
   outSaida.textContent = "Não há pares na lista";
 }else{
   outSaida.textContent = "Pares: " + res;
 } 
 } 
var btPares = document.getElementById("btPares");
btPares.addEventListener("click", pares);

// --- função impares ---

function impares(){

 // verificar o tamanho do vetor
 if(numeros.length == 0){
   alert("O vetor esta vazio !");
   inNumero.focus();
   return;
 }

 var outSaida = document.getElementById("outSaida");
 var res = " ";

 for(var i=0; i<numeros.length; i++){
   if(numeros[i]%2 != 0){
     res += numeros[i] + ", ";
   }
 }

 if (res == "") {
   outSaida.textContent = "Não há ímpares na lista";
 } else {
   outSaida.textContent = "Ímpares: " + res;
 }
}
var btImpares = document.getElementById("btImpares");
btImpares.addEventListener("click", impares);


function somar(){
 // verificar o tamanho do vetor
 if(numeros.length == 0){
   alert("O vetor esta vazio !");
   inNumero.focus();
   return;
 }

 var outSaida = document.getElementById("outSaida");
 var soma = 0;

 for(var i= 0; i< numeros.length; i++){
   soma += numeros[i];
 }

 outSaida.textContent = "Soma : " +  soma;

}
var btSomar = document.getElementById("btSomar");
btSomar.addEventListener("click", somar);




