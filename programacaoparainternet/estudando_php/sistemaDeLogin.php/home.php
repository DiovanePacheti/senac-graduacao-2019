<?php
//chamando Conexão
require_once 'db_connect.php';

//Sessão
session_start();


//verificação se esta logado
if(!isset($_SESSION['logado'])){
    header('location: index.php');
}


//Dados
$id = $_SESSION['id_usuario'];
$sql = "SELECT * FROM usuarios WHERE id = '$id'";
$resultado = mysqli_query($connect, $sql);
$dados = mysqli_fetch_array($resultado);
mysqli_close($connect);
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <nav>
        <ul>
            <li>Home</li>
            <li><a href="logout.php">Sair</a></li>
        </ul>
        <div id="nomeUsuario">
            <h1>Usuario : <?php echo $dados['nome'];?></h1>
        </div>
    </nav>
    <h2>Acesso Liberado !</h2>
</body>
</html>