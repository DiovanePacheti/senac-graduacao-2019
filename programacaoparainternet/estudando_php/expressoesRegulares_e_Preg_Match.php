<?php
/**
 * Expressões regulares
 * Define um padrão a ser usado para procurar ou 
 * substituir palavras ou grupos de palavras
 * ^ iniio da expressão, $ final da expressão - /i - case sensitive
 * // [] conjunto de caracteres
 * // {} ocorrências - ?{0,1} *{0,} +{1,}
 * // /^[a-z0-9.\-\_]+@[a-z0-9-\_]+\.(com|br|com.br|net)$/  
 * // /^[0-9{2}\/[0-9]{2}\/[0-9]{4}$/  
 */

$string = "A";

$padrao = "/^a/";// indicando que o começo da expressao começa com a
/*
$padrao = "/^[a-z]$/";// indicando que o começo da expressao começa com a z
$padrao = "/^[A-Za-z]$/";// indicando que o começo da expressao começa com AZ az
$padrao = "/^[A-Za-z0-9]$/";// indicando que o começo da expressao começa com AZ az e 0 9
$padrao = "/^[a-z0-9]$/i";// indicando que o começo da expressao começa com az  0-9 o /i iguinora case sensitive
$padrao = "/^[a-z0-9]{1,4}$/i";// entre chaves indicamos a quantidade de caracteres
$padrao = "";
*/
if(preg_match($padrao, $string)){
    echo "válido";
    echo "<br>";
    echo $string;
}else{
    echo "inválido";

}
echo "<br>";
//////////////////////////////////////

// EMAIl
$email = "emilcontato@gmail.com";
$expressaoEmail = "/^[a-z0-9.\-\_]+@[a-z0-9.\-\_]+\.(com|br|com.br)$/i"; 


//validando o email
if(preg_match($expressaoEmail, $email)){
    echo "E-mail valido !";
}else{
    echo "E-mail invalido !";
}
echo "<br>";

///////////////////////////////////////

// DATA
$data = "22/01/1992";
$expressaodata = "/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/i";

if(preg_match($expressaodata, $data)){
    echo "data valida !";
}else{
    echo "invalida !";
}






?>