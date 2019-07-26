var clubes = [];
var inClube = document.getElementById("inClube");

function adicionar(){

    var clube = inClube.value;

    if(clube == " " ){
        alert("adicione um clube");
        inClube.value = " ";
        inClube.focus();
        return;
    }

    clubes.push(clube);

    var outClubes = document.getElementById("outClubes");
    outClubes.textContent = clubes.join(" \n ");


    inClube.value = " ";
    inClube.focus();
    return;

    
}//fim da função
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", adicionar);

var outTabela = document.getElementById("outTabela");

function montarTabela(){
    outTabela.textContent = " ";
    if(clubes.length % 2 != 0){
        alert("Não e possivel criar uma tabela com " + clubes.length + " clubes");
        adicionar();
    }else{
	outTabela.textContent += "----------- tabela -----------\n";
        for(var i = 0; i < (clubes.length/2); i++){
            outTabela.textContent += clubes[i] + " x " + clubes[clubes.length-(i+1)] + "\n"
        }
    }

}//fim da função
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela);
