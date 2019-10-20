var inBauru = document.getElementById('inBauru');
var inTorrada = document.getElementById('inTorrada');
var inCachorroQuente = document.getElementById('inCachorroQuente');

var outTotal = document.getElementById("outTotal");

var ckBatataFrita = document.getElementById("ckBatataFrita");
var ckOvo = document.getElementById("ckOvo");

//define uma funçao pra alterar a foto 
function lanchePrincipal(){
    //se radio buttom(rbka) estiver selecionado(marcado)
    if(inBauru.checked){
        i.className = "fas fa-hamburger";
        preco =  45000;
    }else if( inCachorroQuente.checked){
        i.className = "fas fa-hotdog";
        preco = 49800;
    }else{
        i.className = "fas fa-hamburger";
        preco = 61200;
    }
    //resetando as caixas de checkbox cada vez que for trocado a foto do veiculo 
    ckPintura.checked = false;
    ckAlarme.checked = false;
    // chamando a função
    exibirPreco();
}//fim da function trocarfoto


//criando ouvintes de eventos para os elementos da pagina 
//que irao ocorrer 
inBauru.addEventListener('change', lanchePrincipal);
inTorrada.addEventListener('change', lanchePrincipal);
inCachorroQuente.addEventListener('change', lanchePrincipal);

//ckPintura.addEventListener('change', somarPintura);
//ckAlarme.addEventListener('change', somarAlarme);
