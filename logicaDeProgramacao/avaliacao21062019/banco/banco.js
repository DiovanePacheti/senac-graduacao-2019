var nomes = [];
var idades = [];

var inNome = document.getElementById("inNome");
var inIdade = document.getElementById("inIdade");

function add (){

    var nome = inNome.value;
    var idade = Number(inIdade.value);

    nomes.push(nome);
    idades.push(idade);


    var outChegada = document.getElementById("outChegada");


    outChegada.textContent = nomes + " - " + idades ;

    
    inNome.value = " ";
    inIdade.value = " ";
    inNome.focus();
    return;
}//fim da funçao
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", add);

function organizarFila (){
    
    var filaNormal = "Fila Normal : " + "\n-----------------------\n";
    var filaPreferencial =  "Fila Prefêrencial :  \n----------------------------\n" ;

    var outNormal = document.getElementById("outNormal");
    var outPreferencial = document.getElementById("outPreferencial");

    for(var i = 0; i < idades.length; i++){
        if(idades[i] <= 64){
            filaNormal += nomes[i] + " - " + idades[i] + " anos"+ "\n";
        }else if(idades[i] >= 65){
            filaPreferencial += nomes[i] + " - " + idades[i] + " anos"+ "\n";
        }
    }

    outNormal.textContent = filaNormal;
    outPreferencial.textContent = filaPreferencial;

}//fim da function taxa
var btFila = document.getElementById("btFila");
btFila.addEventListener("click", organizarFila);
