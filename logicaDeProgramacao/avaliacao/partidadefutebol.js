function futebol(){

    var inTCasa = document.getElementById("inTCasa");
    var timeCasa = Number(inTCasa.value);

    var inTVisit = document.getElementById("inTVisit");
    var timeVisit = Number(inTVisit.value);

    var timeVencedorEmpate;

    if(timeCasa == timeVisit){
        timeVencedorEmpate = "Empate !";
    }else if(timeCasa > timeVisit){
        timeVencedorEmpate = "Vitoria do time da casa ! ";
    }else{
        timeVencedorEmpate = "Vitoria do time Visitante ! ";
    }

    var outVitoria = document.getElementById("outVitoria");
    outVitoria.textContent = timeVencedorEmpate; 

    var outGoleada = document.getElementById("outGoleada");

    if(((timeCasa - timeVisit) >= 3 )|| ((timeVisit - timeCasa) >= 3)){
        outGoleada.textContent = "Foi uma goleada !!"
    }


}//fim da function
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", futebol);