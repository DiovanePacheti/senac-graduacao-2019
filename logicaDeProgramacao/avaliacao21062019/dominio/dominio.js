function criaDominio (){

    var inNome = document.getElementById("inNome");

    var nome = inNome.value;

    var nomeDom = nome.split(" ");
    var partesDoNome = nomeDom.length;
    var nomevalido = "";

    for(var i = 0 ; i < partesDoNome ; i++){
        nomevalido += nomeDom[i].substr();

        /*for(var j = 0; partesDoNome[i].length; j++){
            nomevalido += partesDoNome[j];
        }*/
    }


    var outDominio = document.getElementById("outDominio");
    outDominio.textContent = "WWW." + nomevalido.toLowerCase() + ".com.br";

    
    inNome.value = " ";
    inNome.focus();
    return;
}//fim da funçao
var btDominio = document.getElementById("btDominio");
btDominio.addEventListener("click", criaDominio);
