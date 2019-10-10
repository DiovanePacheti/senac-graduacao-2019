// criar referencia aos elementos da pagina que irao ter seu comportamento monitorado pelo javascript
var rbka = document.getElementById('rbka');
var rbfiesta = document.getElementById('rbfiesta');
var rbfocus = document.getElementById('rbfocus');

var outPreco = document.getElementById("outPreco");

var ckPintura = document.getElementById("ckPintura");
var ckAlarme = document.getElementById("ckAlarme");

//variavel global para o preco do veiculo
//que pode ser acessada em qualquer função
var preco = 45000;

var imgcarro = document.getElementById("imgcarro");

//define uma funçao pra alterar a foto 
function trocarfoto(){
    //se radio buttom(rbka) estiver selecionado(marcado)
    if(rbka.checked){
        imgcarro.src = "img/ka.png"
        preco =  45000;
    }else if( rbfiesta.checked){
        imgcarro.src = "img/fiesta.png"
        preco = 49800;
    }else{
        imgcarro.src = "img/focus.png"
        preco = 61200;
    }
    //resetando as caixas de checkbox cada vez que for trocado a foto do veiculo 
    ckPintura.checked = false;
    ckAlarme.checked = false;
    // chamando a função
    exibirPreco();
}//fim da function trocarfoto

function somarPintura(){
    if(ckPintura.checked){
        preco += 1200;
    }else{
        preco -= 1200;
    }
    exibirPreco();
}//fim da function somar pintura

function somarAlarme(){
    if(ckAlarme.checked){
        preco += 780;
    }else{
        preco -= 780;
    }
    exibirPreco();
}//fim da function alarme 

//criando ouvintes de eventos para os elementos da pagina 
//que irao ocorrer 
rbka.addEventListener('change', trocarfoto);
rbfiesta.addEventListener('change', trocarfoto);
rbfocus.addEventListener('change', trocarfoto);

ckPintura.addEventListener('change', somarPintura);
ckAlarme.addEventListener('change', somarAlarme);
function exibirPreco(){
    outPreco.textContent = preco.toLocaleString('pt-br', {style: 'currency', currency:'BRL'});
}//fim da function exibirPreco
