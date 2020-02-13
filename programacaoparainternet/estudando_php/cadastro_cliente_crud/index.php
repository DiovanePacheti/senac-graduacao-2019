<?php

//conexão
include_once 'php_action/db_connect.php';
//Header
include_once 'includes/header.php';
//mesagem de alerta se ocorreu cadastro 
include_once 'includes/message.php';
?>

 <div class="row">
     <div class="col s12 m6 push-m3 ">
        <h2>Clientes</h2>
        <table class="striped">
            <thead>
                <th>Nome:</th>
                <th>Sobrenome:</th>
                <th>Email:</th>
                <th>Idade:</th>
            </thead>
            <tbody>
                <?php
                    $sql = "SELECT * FROM clientes";
                    $resultado = mysqli_query($connect, $sql);
                    while($dados = mysqli_fetch_array($resultado)){

                  // corpo da tabela --
                ?>
                <tr>
                    <td><?php echo $dados['nome'];?></td>
                    <td><?php echo $dados['sobrenome'];?></td>
                    <td><?php echo $dados['email'];?></td>
                    <td><?php echo $dados['anonasc'];?></td>
                    <td><a href="editar.php?id=<?php echo $dados['id'];?>" class="btn-floating orange"><i class="material-icons">edit</i></a></td>
                    <td><a href="" class="btn-floating red"><i class="material-icons">delete</i></a></td>
                </tr>
                <?php
                    //fim do while  
                    }
                ?>        
            </tbody>
        </table>
        <br>
        <a href="adicionar.php" class="btn">Adicionar cliente</a>
     </div>
 </div>

<?php include_once 'includes/footer.php';?>



  