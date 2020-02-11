<?php
//======= comando strtoupper() deixa os caracteres em caixa alta
$nome = "Diovane Luis";

echo strtoupper($nome);

//======= comando strtolower() 

echo "<br>";
echo strtolower($nome);

// ====== comando substr() subescreve uma string apartir de um caracter selecionado

echo "<br>";
echo substr($nome, 8);
echo "<br>";
echo substr($nome, 0,8);

// ======= comando str_pad() complementa um numero de caracter passado por paramento adicionado espaços em branco ou caracter passado por parametro

echo "<br>";
$objeto = array("mouse","teclado","monitor");

$novoObjeto = array();
$novoObjeto[0] = str_pad($objeto[0],15);
echo "<br>";
$novoObjeto[1] = str_pad($objeto[1],12,"-",STR_PAD_LEFT);
echo "<br>";
$novoObjeto[2] = str_pad($objeto[2],13,"-",STR_PAD_RIGHT);
echo "<br>";
$novoObjeto[3] = str_pad($objeto[2],13,"-",STR_PAD_BOTH);
print_r($novoObjeto);

// ======== comando str_repeat() - repete uma palavra passada por parametro e por um numero de vezes tambem passado por parametro
echo "<br><h5>comando str_repeat()</h5> - repete uma palavra passada por parametro e por um numero de vezes tambem passado por parametro";
$string = str_repeat("Sucesso", 4); 
echo "<h4>Comando str_repeat() : </h4><br>";
echo $string;

// ======== comando strlen() retorna o comprimento da string 
echo "<h4>Comando strlen() : </h4><br>";

echo strlen($string);

// ======== comando str_replace() substitui uma palavra em um texto
echo "<br>";
$texto = "Um texto para testar a função";
$novoTexto = str_replace("função","str_replace()",$texto);

echo $novoTexto;

// ======== comando strpos() retorna a posição da palavra em um texto
echo "<br>";
echo strpos($texto, "para");
//echo substr($texto,9,4); coletando a palavra "para"



?>