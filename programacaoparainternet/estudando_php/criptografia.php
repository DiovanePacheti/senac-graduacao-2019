<?php


$senha = "123456";


/** criptografia base64 e uma criptografia de mao dupla tendo uma função pra encriptar e outra pra desenriptar */
$novaSenha = base64_encode($senha);

echo "Senha 123456";
echo "A senha que foi adicionada : ".$senha;

echo "base64 : " .$novaSenha."<br>";
echo "Sua senha é : ".base64_decode($novaSenha);

echo "<hr>";
// ja o MD5 é uma criptografia de mão unica nao oferecendo desriptografia fazemos validaçÃO fazendo uma nova criptografia e comparamos a que existe no banco
echo "MD5 : ".md5($senha)."<br>";

echo "sha1 : ".sha1($senha)."<br>";

//crackstation.net -- pagina que compara hash com um banco de hash armazenados 

//======================== password_hash() ==============================

$senhaSegura = password_hash($senha,PASSWORD_DEFAULT);//PASSWORD_DEFAULT e um algoritmo que implementa um codigo
echo 'hash gerado por password_hash($senha,PASSAWORD_DEFAULT) : '.$senhaSegura; 

$senha_db = '$2y$10$kkKhr4naDKk3IywbDUmDOOrf28ND8aFDinhYaPfAs.klpUtuHyPau';// variavel senha banco de dados $senha_db recebeu hash como se retorna-se do banco

if(password_verify($senha, $senha_db)){
    echo "<br>senha valida !";
}else{
    echo "<br>senha invalida !";
}

?>