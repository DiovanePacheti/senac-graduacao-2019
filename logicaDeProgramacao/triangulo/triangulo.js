function verificaTriangulo(){

    var inLadoA = document.getElementById("inLadoA");
    var ladoA = Number(inLadoA.value);

    var inLadoB = document.getElementById("inLadoB");
    var ladoB = Number(inLadoB.value);

    var inLadoC = document.getElementById("inLadoC");
    var ladoC = Number(inLadoC.value);

    var resp = " ";
    var ladoMaior;
    var valorLado =0;
    var somaLados;
    var ladosIguais;
    var triangulo;

    if((ladoA > (ladoB + ladoC)) || (ladoB > (ladoA + ladoC)) || (ladoC > (ladoA + ladoB)) ){
        
           if(ladoA > (ladoB + ladoC)){
              ladoMaior = " Lado A = ";
              valorLado = ladoA;
	      somaLados = " Lado C = " + ladoC + " + Lado B = " + ladoB + " é = " + (ladoC+ladoB); 
           }else if(ladoB > (ladoA + ladoC)){
              ladoMaior = " Lado B = ";
	      valorLado = ladoB;
              somaLados = " Lado A = " + ladoA + " + Lado C = " + ladoC + " é = " + (ladoA + ladoC);
           }else if (ladoC > (ladoA + ladoB)){
              ladoMaior = " Lado C = ";
              valorLado = ladoC;
	      somaLados = " Lado A = " + ladoA + " + Lado B = " + ladoB + " é = " + (ladoA+ladoB);
           }
           resp = "Os lados não podem formar um triângulo porque a soma do " + somaLados + " e menor que o valor do " + ladoMaior + valorLado;
	
    }else if((ladoA == ladoB) || ( ladoA == ladoC) || (ladoB == ladoC)){//estrutura condicional que verifica se dois lados são iguais
	
        triangulo = " Isósceles";
	    
	if(ladoA == ladoB && ladoB == ladoC){//verifica se alem de dois lados iguais existe mais um 
	    triangulo = " Equilátero";
            ladosIguais = " lado A = " + ladoA + " lado B = " + ladoB + " lado C = " +  ladoC;
        }else  if(ladoA == ladoB){
            ladosIguais = " lado A = " + ladoA + " e lado B = " + ladoB ;
	}else if(ladoA == ladoC){
	    ladosIguais = " lado A = " + ladoA + " e lado C = " + ladoC ;
	}else if(ladoB == ladoC){
	    ladosIguais = " lado B = " + ladoB + " e lado C = " + ladoC ;
	}

        resp = " Os lados" + ladosIguais + " são iguais formando um triângulo" + triangulo;

    }else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){             
	    triangulo = "Escaleno";                                                                                                             
	    resp = " O lado A = " + ladoA + "  lado B = " + ladoB + " lado C = " + ladoC + " são lados diferentes formando um triângulo " + triangulo;
    }
    var outTriangulo = document.getElementById("outTriangulo");
    outTriangulo.textContent = resp ;
    

}// fim da function
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificaTriangulo);
