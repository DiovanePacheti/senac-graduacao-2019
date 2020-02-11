<?php
    // Conexão
    require_once 'db_connect.php';

    //Sessão
    session_start();

    // Botão enviar
    if(isset($_POST['btn-entrar'])){
      //$erros[] = array();
        $erros = array();//criando um array para oletar os erros
        //utilizando funcão mysqli_escape_string() que recebe a conxão e o valor enviado pelo method POST
        $login = mysqli_escape_string($connect, $_POST['login']);
        $senha = mysqli_escape_string($connect, $_POST['senha']);

        if(empty($login) or empty($senha)){//se login ou senha vazio
            $erros[] = "<li> O campo login/senha preisa ser preenchido</li>";
        }else{
            //seleione o campo login da tabela usuario onde resultado do campo login for igual ao valor da variavel $login
            $sql = "SELECT login FROM usuarios WHERE login = '$login'";
            $resultado = mysqli_query($connect, $sql);
            
            //se resultado for maior que 0
            if(mysqli_num_rows($resultado) > 0){

                //selecionando todos os campos do tabela usuarios e comparando login e senha
                $senha = MD5($senha);
                $sql = "SELECT * FROM usuarios WHERE login = '$login' AND  senha = '$senha'";
                
                $resultado = mysqli_query($connect, $sql);

                if(mysqli_num_rows($resultado) == 1){
                    /** variavel $dados recebe a função vai converter a 
                     * variavel $resultado em um array e atribuir a variavel
                     * $dados
                     */
                    $dados = mysqli_fetch_array($resultado);
                    mysqli_close($connect);
                    $_SESSION['logado'] = true; //criando uma variavel Sessao com valor true no indice logado
                    $_SESSION['id_usuario'] = $dados['id'];//e no indide id_usuario o valor do array $dados['id'] no indie id 
                    header('location: home.php');
                }else{
                    $erros[] = "<li>Ususario e senha nao renferencia </li>";
                }//fim do if (nysqli_num_rows($resultado) == 1)

            }else{// senao existir usuario pesquisado retorna o array erros[]
                $erros[] = "<li>Usuario inexistente</li>";    
            }
         
        }

    }
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Login</h1>
    <?php
        if(!empty($erros)){
            foreach($erros as $erro){
                echo $erro;
            }
        }
    ?>
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
        Login : <input type="text" name="login"><br>
        senha : <input type="password" name="senha"><br>
        <button type="submit" name="btn-entrar">Entrar</button>
    </form>
</body>
</html>