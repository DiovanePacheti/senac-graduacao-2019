// criar uma referencia aos elementos da pagina
var outFrutas = document.getElementById("outFrutas");
 
var inBanana = document.getElementById("inBanana");
var inMorango = document.getElementById("inMorango");
var inLaranja = document.getElementById("inLaranja");
var inMaca = document.getElementById("inMaca");
var inUva = document.getElementById("inUva");
 
var divJogo = document.getElementById('divJogo');
 
var btVerificar = document.getElementById('btVerificar');
 
var num = 0;
 
function adicionaFruta(fruta){
    //criar um elemento na pagina
    var novaImagem = document.createElement('img');
    novaImagem.src = "../../img/jogoDasFrutas" + fruta + ".png";
    novaImagem.textAlt = 'Imagem de ' + fruta;
    novaImagem.className = "img-" + fruta;
 
    num++; //num = num + 1
    var idImg = "img" + num;
    novaImagem.id = idImg;
  //  novaImagem.id = "img" + num;// adicionando um elemento 
 
    novaImagem.onclick = function() {
        removerFruta('img' + num) 
    } 
 
    //indica que o elemento criado e filho de divJogo
    divJogo.appendChild(novaImagem);
 
    if(num == 1){
        btVerificar.className = "btn btn-primary btn-lg px-4 mr-3 d-inline float-right"
    }
 
}//fim a function
 
inBanana.addEventListener('click', function(){ adicionaFruta('Banana') }) //chamando a função que adicionaFruta() 
inMorango.addEventListener('click', function(){ adicionaFruta('Morango') }) //chamando a função que adicionaFruta() 
inLaranja.addEventListener('click', function(){ adicionaFruta('Laranja') }) //chamando a função que adicionaFruta() 
inMaca.addEventListener('click', function(){ adicionaFruta('Maca') }) //chamando a função que adicionaFruta() 
inUva.addEventListener('click', function(){ adicionaFruta('Uva') }) //chamando a função que adicionaFruta() 
 
//funçao que remove frutas
function removerFruta(idFruta){
    var retirar = document.getElementById(idFruta);
    divJogo.removeChild(retirar);
}
 
//criando variaveis globais 
var numBananas 
var numMorango 
var numLaranja 
var numMaca 
var numUva 
 
function sorteiaFrutas(){
 
    //gera um valor aleatorio entre 1 e 5 para cada fruta
    numBananas = Math.ceil(Math.random() * 5);
    numMorango = Math.ceil(Math.random() * 5);
    numLaranja = Math.ceil(Math.random() * 5);
    numMaca = Math.ceil(Math.random() * 5);
    numUva = Math.ceil(Math.random() * 5);
 
    outFrutas.textContent = numBananas + " Banana(s) :: " + 
    numMorango + " Morango(s) :: " + numLaranja + " Laranja(s) :: " +
    numMaca + " Macã(s) :: " + numUva + " Uva(s)"
}//fim da function sorteiaFrutas
//evento q2ue ocorre quado a pagina e carregada
window.addEventListener('load', sorteiaFrutas);

