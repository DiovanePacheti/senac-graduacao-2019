var nomes = [];
var idades = [];

var inNome = document.getElementById("inNome");
var inIdade = document.getElementById("inIdade");

function adicionar(){

    var nome  = inNome.value;
    var idade = Number(inIdade.value);

   var outNome = document.getElementById("outNome");	
   var outIdade = document.getElementById("outIdade");

    nomes.push(nome);
    idades.push(idade);
 
    var concatena = " ";

    outNome.textContent = "Nome : " + nomes.join(" - ");
    
    outIdade.textContent = "Idade : " + idades.join("\n ");	
           
         inNome.value = " ";
	      inIdade.value = " ";
         inNumero.focus();	
    
}
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionar);

function media(){

   //var idade = Number(inIdade.value);	
   var somaMedia = 0;
   var mediaDeIdade = 0;	
   
   var outMedia = document.getElementById("outMedia");	

   for(var i = 0; i < idades.length; i++){
	somaMedia += idades[i];
	mediaDeIdade = somaMedia / idades.length;   
   }	   
   outMedia.textContent = "Meida : " + mediaDeIdade + " idade ";		

}//fim da função media
var btMedia = document.getElementById("btMedia");
btMedia.addEventListener("click", media);

//_-----------------

function maior(){
   
   var maiorIdade = idades[0];
   var posicao = 0;

   var outMaior = document.getElementById("outMaior");	

   for(var i = 0;i < idades.length; i++){
      	if(idades[i] < idades[i+1]){
	   var aux = idades[i+1];
	   if(aux > maiorIdade){
	     maiorIdade = aux;
	   }
  	}
   }
   for(var i = 0; i < idades.length; i++){
        if(maiorIdade == idades[i]){
	   posicao = i;
	}
   }
   outMaior.textContent = "maior idade é " +  nomes[posicao] + " com " + maiorIdade + " anos ";

}//fim da função maior
var btMaior = document.getElementById("btMaior");
btMaior.addEventListener("click", maior);


function filtro(){
   var outFiltro = document.getElementById("outFiltro");
   var fil = Number(prompt("Filtrar por idade maxima : "));
   var resultado = " ";
   for(var i = 0 ; i < idades.length; i++){
      if(idades[i] <= fil){
        resultado +=" " + nomes[i] + ", " +  idades[i] + " \n";
      }
   }

   outFiltro.textContent = resultado;

}
var btFiltro = document.getElementById("btFiltro");
btFiltro.addEventListener("click", filtro);

