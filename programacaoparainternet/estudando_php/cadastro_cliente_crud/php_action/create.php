<?php
//sessao
session_start();

//conexão
require_once 'db_connect.php';

//Clear - xss(cross site scripting) --
function clear($input){
    global $connect;
    //protegendo sql injection
    $var = mysqli_escape_string($connect, $input);
    
    //xss
    $var = htmlspecialchars($var);

    return $var;
}
//se houver algo setado na variavel $_POST[] no indice btn-cadastrar
if(isset($_POST['btn-cadastrar'])){
    $nome = clear($_POST['nome']);
    $sobrenome = clear($_POST['sobrenome']);
    $email = clear($_POST['email']);
    $anonasc = clear($_POST['anonasc']);

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