//vetor de Objeto que vai armazenar os jogadores 
var jogador = [];

/**
 * Esta função vai adicionar os jogadores por nome 
 * e idade e mostrar a média de idades do time 
 */
function verificaParImpar(){
    
    var inIdade = document.getElementById("inIdade");               
    var inNome = document.getElementById("inNome");

    var outSaida = document.getElementById("outSaida");	
    var outMedia = document.getElementById("outMedia");

    var idade = Number(inIdade.value);
    var nome = inNome.value;

    /** 
    adicionando os valores capturados ao vetor em cada 
    atributo deste vetor um atributo nome e outro idade
    */
    jogador.push({nome: nome, idade: idade});

    //limpando a saida para adicionar mais um jogador na saida 
    outSaida.textContent = "";

    for(var i = 0 ; i<jogador.length;i++){
    
        //concatenando a saida
        outSaida.textContent += "Nome do " + (i+1)+ "º jogador = " + jogador[i].nome + "\nIdade do jogador = " + jogador[i].idade + " anos " + "\n"	
    
    }

    inIdade.value = " ";
    inNome.value = " ";
    inNome.focus();

    

    var idadesSomadas = 0 ;
    
    for(var i = 0; i < jogador.length; i++){
        idadesSomadas += jogador[i].idade;
    }
    

    outMedia.textContent =  "Media de idade : " + idadesSomadas / jogador.length; 	
}
var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", verificaParImpar);
