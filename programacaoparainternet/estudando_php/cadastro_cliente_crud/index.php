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

                    if(mysqli_num_rows($resultado) > 0){
                        while($dados = mysqli_fetch_array($resultado)){

                  // corpo da tabela --
                ?>
                <tr>
                    <td><?php echo $dados['nome'];?></td>
                    <td><?php echo $dados['sobrenome'];?></td>
                    <td><?php echo $dados['email'];?></td>
                    <td><?php echo $dados['anonasc'];?></td>
                    <td><a href="editar.php?id=<?php echo $dados['id'];?>" class="btn-floating orange"><i class="material-icons">edit</i></a></td>
                    <td><a href="#modal<?php echo $dados['id'];?>" class="btn-floating red modal-trigger"><i class="material-icons">delete</i></a></td>
                      <!-- Modal Structure -->
                        <div id="modal<?php echo $dados['id'];?>" class="modal">
                            <div class="modal-content">
                            <h4>Ops !</h4>
                            <p>Deseja deletar cliente</p>
                            </div>
                            <div class="modal-footer">
                            <form action="php_action/delete.php" method="POST">
                                <input type="hidden" name="id" value="<?php echo $dados['id'];?>">
                                <button type="submit" class="btn red" name="btn-deletar">Confirmar delete ! </button>
                                <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
                            </form>
                            </div>
                        </div>
                </tr>
                <?php
                        }//fim do while  
                    }else{
                ?>
                            <!--linha vazia-->
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                <?php
                    }//fim da estrutura que verifica se existe uma linha encontra do banco 
                ?>        
            </tbody>
        </table>
        <br>
        <a href="adicionar.php" class="btn">Adicionar cliente</a>
     </div>
 </div>

<?php include_once 'includes/footer.php';?>



  