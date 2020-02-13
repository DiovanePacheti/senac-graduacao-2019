

<?php include_once 'includes/header.php';?>

<div class="row">
    <div class="col s12 m6 push-m3 ">
       <h2>Novo clientes</h2>
       <form action="php_action/create.php" method="POST">
           <div class="input-field col s12">
                <input type="text" name="nome" id="nome">
                <label for="nome">Nome:</label>
           </div>        
           <div class="input-field col s12">
                <input type="text" name="sobrenome" id="sobrenome">
                <label for="sobrenome">Sobrenome:</label>
           </div>        
           <div class="input-field col s12">
                <input type="email" name="email" id="email">
                <label for="email">E-mail:</label>
           </div>        
           <div class="input-field col s12">
                <input type="text" name="anonasc" id="anonasc">
                <label for="anonasc">Ano nascimento:</label>
           </div>        
           <button type="submit" name="btn-cadastrar" class="btn">Enviar</button>
           <a href="index.php" class="btn green">Lista de clientes</a>
       </form>
    </div>
</div>

<?php include_once 'includes/footer.php';?>



 