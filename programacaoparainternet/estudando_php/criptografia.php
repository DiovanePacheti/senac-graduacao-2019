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

echo "sha1 : ".sha1($senha);

crackstation.net

?>