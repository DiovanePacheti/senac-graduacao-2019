var outpromocao = document.getElementById("outpromocao");
var coletor = ""//variavel que vai concatenar a string para enviar as funçoes
function botao0() {
    var btZero = document.getElementById("btZero");
    var zero = btZero.value;
    coletor += btZero.value;
    outpromocao.textContent += zero;

}

function botao1() {
    var btNove = document.getElementById("btUm");
    var nove = btNove.value;
    coletor += btNove.value;
    outpromocao.textContent += nove;

}

function botao2() {
    var btDios = document.getElementById("btDois");
    var dois = btDois.value;
    coletor += btDois.value;
    outpromocao.textContent += dois;

}

function botao3() {
    var btTres = document.getElementById("btTres");
    var tres = btTres.value;
    coletor += btTres.value;
    outpromocao.textContent += tres;

}


function botao4() {
    var btQuatro = document.getElementById("btQuatro");
    var quatro = btQuatro.value;
    coletor += btQuatro.value;
    outpromocao.textContent += quatro;

}

function  botao5() { 
    var btCinco = document.getElementById("btCinco");
    var cinco = btCinco.value;
    coletor += btCinco.value;
    outpromocao.textContent += cinco;
}	

function  botao6() { 
    var btSeis = document.getElementById("btSeis");
    var seis = btSeis.value;
    coletor += btSeis.value;
    outpromocao.textContent += seis;
}	

function  botao7() { 
    var btSete = document.getElementById("btSete");
    var sete = btSete.value;
    coletor += btSete.value;
    outpromocao.textContent += sete;
}

function  botao8() {
    var btOito = document.getElementById("btOito");
    var oito = btOito.value;
    coletor += btOito.value;
    outpromocao.textContent += oito;
}

function botao9() {
    var btNove = document.getElementById("btNove");
    var nove = btNove.value;
    coletor += btNove.value;
    outpromocao.textContent += nove;

}	

// fim das funções que capturam os valoes dos numeros

// -- Criano a função transformar Numero Binario em Decimal --

function decimal(){
    
    //capiturando o valor digitado
    var valor = coletor;
    
    //variavel que ira receber o o resultado em numero decimal
    var numeroDecimal = 0;

    //variavel que vai inverter o valor de entrada
    var valorInvertido = "";

    //invertendo valor com loop for
    for(var i = valor.length-1; i >= 0 ; i--){
        valorInvertido += valor.charAt(i);
        }
    /*vetor de potencia que ira ser somado as potencias que 
      corresponderem aos valor um da string inputada  
    */
    var potencia = [1 , 2 , 4, 8, 16, 32];

    for(var i = valor.length-1; i >= 0; i--){
            //condicional que ira verificar se deve ser somado o valor
            if(valorInvertido.charAt(i) == "1"){
                //somando os valores das potencias
                numeroDecimal += potencia[i]; 
            }    
    }
    
    // retornando o resultado 
    outpromocao.textContent = numeroDecimal + " Decimal ";

}//fim da função convertendo binario para decimal

//Criando a função decimal para binario
function binario(){
    //variavel obtendo valor digitado
    var valor = Number(coletor);
    //variavel que ira concatenar o resto da divisao do numero ate zerar
    var numeroBinario = "";

    /**
     * utilizando a estrutura repita um loop
     * do/while ate o resultado da diviso ser 
     * zero e terminar a divisao com um break
     */
    do{
        numeroBinario += valor%2
        divisao = Math.trunc(valor/2);
        novovalor = divisao
        valor = novovalor
        

        if(valor == 0){
            break;
        }

    }while(true);       
    /*variavel que vai inverter a string numeroBinario 
        para acertar a saida para o sequencia correta
    */
    var numeroBinarioAjustado ="";

    for(var i = numeroBinario.length; i>=0;i--){
        
        numeroBinarioAjustado += numeroBinario.charAt(i);
    }
     outpromocao.textContent = numeroBinarioAjustado;    
    
}//fim da função binario para 

//função converte octal para decimal
function octal(){
    
    //capiturando o valor digitado
    var valor = coletor;
    
    //variavel que ira receber o o resultado em numero decimal
    var numeroDecimal = 0;
    var potencia = [];
    //variavel que vai inverter o valor de entrada
    var valorInvertido = "";

    //vetor que ira receber os valores convertidos em 
    var vetorValorInt = [];
    //invertendo valor com loop for
    for(var i = valor.length-1; i >= 0 ; i--){
        valorInvertido += valor.charAt(i);
       
        }

    //vetor que vai receber os valores convertidos em tipo Number int
    for(var i = 0 ;i < valor.length; i++){
        vetorValorInt[i] = parseInt(valorInvertido.charAt(i));
    }   
    
    /*vetor de potencia que ira ser somado as potencias que 
      corresponderem aos valor um da string inputada  
    */
    var potencia = [1, 8, 64, 512, 4096, 32768, 262144 ];

    for(var i = 0;i < valor.length; i++){
            
                //somando os valores das potencias
                
                numeroDecimal += (potencia[i]*vetorValorInt[i]); 
                
    }
    
    // retornando o resultado 
    outpromocao.textContent = numeroDecimal;

}//fim da função convertendo binario para decimal

//Criando a função decimal para binario
function DeOctal(){
    //variavel obtendo valor digitado
    var valor = Number(coletor);
    //variavel que ira concatenar o resto da divisao do numero ate zerar
    var numeroOctal = "";

    /**
     * utilizando a estrutura repita um loop
     * do/while ate o resultado da diviso ser 
     * zero e terminar a divisao com um break
     */
    do{
        numeroOctal += valor%8
        divisao = Math.trunc(valor/8);
        novovalor = divisao
        valor = novovalor
        

        if(valor == 0){
            break;
        }

    }while(true);       
    /*variavel que vai inverter a string numeroBinario 
        para acertar a saida para o sequencia correta
    */
    var numeroOctalAjustado ="";

    for(var i = numeroOctal.length; i>=0;i--){
        
        numeroOctalAjustado += numeroOctal.charAt(i);
    }
     outpromocao.textContent = numeroOctalAjustado;    
    
}//fim da função binario para
