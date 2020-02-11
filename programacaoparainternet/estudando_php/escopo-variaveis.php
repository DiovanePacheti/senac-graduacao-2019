<?php

$nome = "Diovane";
$a = 1;
$b = 3;
$c = 8;


function exibirNome(){

    global $nome; //teve que ter seu escopo como global para exibir o conteudo quando for chamado o method
    echo $nome;
}

exibirNome();
echo "<hr>";

/////////////////////////////////////////

function exibirCidade(){
    global $cidade;
    echo $cidade = "Pelotas";

}//fim da function exibirCidade()

exibirCidade();
echo "<br>" .$cidade. "<br>";

function soma(){
    echo $GLOBALS['a']+ $GLOBALS['b'] + $GLOBALS['c'];
}
soma();

?>