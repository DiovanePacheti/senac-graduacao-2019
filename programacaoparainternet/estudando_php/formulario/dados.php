<?php
// == recebendo valores das variaveis do formulario
$nome = $_POST['nome'];
//$nome = $_GET['nome'];

$email = $_POST['email'];
//$email = $_GET['email'];

echo "Nome : $nome <br>E-mail : $email <br>";

var_dump($_POST);
?>