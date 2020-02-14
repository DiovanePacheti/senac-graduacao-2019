<?php
//sessao
session_start();

//conexão
require_once 'db_connect.php';

//Clear - xss(cross site scripting) --
function clear($input){
    $var = mysqli_escape_string($input);
}
//se houver algo setado na variavel $_POST[] no indice btn-cadastrar
if(isset($_POST['btn-cadastrar'])){
    $nome = mysqli_escape_string($connect, $_POST['nome']);
    $sobrenome = mysqli_escape_string($connect, $_POST['sobrenome']);
    $email = mysqli_escape_string($connect, $_POST['email']);
    $anonasc = mysqli_escape_string($connect, $_POST['anonasc']);

    $sql ="INSERT INTO clientes (nome, sobrenome, email, anonasc) 
    VALUES('$nome', '$sobrenome', '$email', '$anonasc')";

    //verificando se ocorreu a query 
    if(mysqli_query($connect, $sql)){
        header('Location: ../index.php');
        $_SESSION['mensagem'] = "Cadastrado com sucesso !"; 
    }else{
        header('Location: ../index.php');
        $_SESSION['mensagem'] = "erro ao cadastrado !"; 
    }
}

?>