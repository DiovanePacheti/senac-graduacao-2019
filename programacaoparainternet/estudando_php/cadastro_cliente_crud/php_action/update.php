<?php
//sessao
session_start();

//conexão
require_once 'db_connect.php';

//se houver algo setado na variavel $_POST[] no indice btn-cadastrar
if(isset($_POST['btn-editar'])){
    $nome = mysqli_escape_string($connect, $_POST['nome']);
    $sobrenome = mysqli_escape_string($connect, $_POST['sobrenome']);
    $email = mysqli_escape_string($connect, $_POST['email']);
    $anonasc = mysqli_escape_string($connect, $_POST['anonasc']);
    $id = mysqli_escape_string($connect, $_POST['id']);

    $sql ="UPDATE clientes SET nome = '$nome',  sobrenome = '$sobrenome', email = '$email', anonasc = '$anonasc' WHERE id='$id'";

    //verificando se ocorreu a query 
    if(mysqli_query($connect, $sql)){
        header('Location: ../index.php');
        $_SESSION['mensagem'] = "Atualizado com sucesso !"; 
    }else{
        header('Location: ../index.php');
        $_SESSION['mensagem'] = "Erro ao atualizar !"; 
    }
}

?>