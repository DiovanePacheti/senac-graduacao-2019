<?php   
echo "<h1>primeiro dados</h1>";
//dados a cadastrar
$nome = " "; //não precisamos tipar a variavel "String $nome = "";
(int) $anoNasc = 1986; //podemos forçar o tipo typecast
$altura = 1.68;
$anoAtual = 2020;
echo "Nome : ". $nome . "<br>Idade : ".($anoAtual - $anoNasc) . " anos<br>Altura : ". $altura;
echo "<br>";
echo "<h1>primeiro dados alterados</h1>";
//alterando os dados a cadastrar
$nome = "Luis";
$anoNasc = 1996;
$altura = 1.78;
$anoAtual = 2020;
echo "Nome : ". $nome . "<br>Idade : ".($anoAtual - $anoNasc) . " anos<br>Altura : ". $altura;



?>