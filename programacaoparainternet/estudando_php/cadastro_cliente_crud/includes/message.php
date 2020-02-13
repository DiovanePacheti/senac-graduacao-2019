<?php
//sessao
session_start();
if(isset($_SESSION['mensagem'])){
?>    

<script>
    //criando um alerta para a mensagem se o cliente for cadastrado
    window.onload = function(){
        M.toast({html: '<?php echo $_SESSION['mensagem'];?>'});
    }
</script>
<?php
}
session_unset();
?>
