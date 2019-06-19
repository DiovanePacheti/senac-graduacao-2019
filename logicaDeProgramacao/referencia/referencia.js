function ajustar(){
    var inAutor = document.getElementById("inAutor");
    var autor = inAutor.value;

    var ultima = autor.lastIndexOf(" ");
    
    var refere = autor.substr(ultima);
    var nomeref = autor.substr(0 , ultima);

    var outReferencia = document.getElementById("outReferencia");
   

    outReferencia.textContent = refere.toUpperCase() + ", " + nomeref;
    

}
var btAjuste = document.getElementById("btAjuste");
btAjuste.addEventListener("click", ajustar);
