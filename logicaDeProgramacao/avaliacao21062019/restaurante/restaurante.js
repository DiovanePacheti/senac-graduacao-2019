var mesas = [];
var contas = [];

var inMesa = document.getElementById("inMesa");
var inConta = document.getElementById("inConta");

function add (){

    var mesa = inMesa.value;
    var conta = Number(inConta.value);

    mesas.push(mesa);
    contas.push(conta);


    var outSaida = document.getElementById("outSaida");
    outSaida.textContent = mesas + " - " + contas + "\n";

    
    inConta.value = " ";
    inMesa.value = " ";
    inMesa.focus();
    return;
}//fim da funçao
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", add);

function taxa (){
    
    var taxa = 0.10;

    var mesasTaxadas = " ";

    var outSaidaTaxa = document.getElementById("outSaidaTaxa");

    for(var i = 0 ; i < contas.length; i++){
        mesasTaxadas += mesas[i] + " valor da mesa com taxa de 10% = " + (contas[i] + (contas[i] * taxa)) + "\n"; 
    }

    outSaidaTaxa.textContent = mesasTaxadas;



}//fim da function taxa
var btTaxa = document.getElementById("btTaxa");
btTaxa.addEventListener("click", taxa);
