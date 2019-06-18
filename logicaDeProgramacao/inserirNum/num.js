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
var btSomar = document.getElementById("btSomar");
btSomar.addEventListener("click", soma);

//_-----------------
/*

function maior(){
   alert("oi");
   var maiorIdade = idades[0];
   var posicao = 0;

   var outMaior = document.getElementById("outMaior");
   for(var i = 0;i < idades.length; i++){
        posicao = i;
        if(idades[i] < idades[i+1]){
           maiorIdade = idades[i+1];
           posicao = (i+1);
        }
   }

   outMaior.textContent = "maior idade é " nomes[posicao] + " com " + maiorIdade + " anos ";

}//fim da função maior
var btMaior = document.getElementById("btMaior");
btMaior.addEventListener("click", maior);

//----------------------


function filtro(){
   var outFiltro = document.getElementById("outFiltro");
   var fil = Number(prompt("Filtrar por idade maxima : "));
   var resultado = " ";
   for(var i = 0 ; i < idades.length; i++){
      if(idades[i] <= fil){
        resultado += " " + nomes[i] + ", " +  idades[i] + " \n";
      }
   }

   outFiltro.textContent = resultado;

}
var btFiltro = document.getElementById("btFiltro");
btFiltro.addEventListener("click", filtro);*/
