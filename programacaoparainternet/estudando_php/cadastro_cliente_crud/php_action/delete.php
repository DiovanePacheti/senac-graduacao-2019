<?php
//sessao
session_start();

//conexão
require_once 'db_connect.php';

//se houver algo setado na variavel $_POST[] no indice btn-cadastrar
if(isset($_POST['btn-deletar'])){
    
    $id = mysqli_escape_string($connect, $_POST['id']);

    $sql ="DELETE FROM clientes WHERE id = '$id'";

    //verificando se ocorreu a query 
    if(mysqli_query($connect, $sql)){
        header('Location: ../index.php');
        $_SESSION['mensagem'] = "Deletado com sucesso !"; 
    }else{
        header('Location: ../index.php');
        $_SESSION['mensagem'] = "Erro ao deletar !"; 
    }
}

?>