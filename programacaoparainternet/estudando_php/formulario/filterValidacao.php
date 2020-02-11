<?php
/**
 * validaçoes Funções                Sanitização
 * (filter_input - filter_var)       FILTER_SANITIZE_SPECIAL_CHARS   
 * FILTER_VALIDATE_INT               FILTER_SANITIZE_INT   
 * FILTER_VALIDATE_EMAIL             FILTER_SANITIZE_EMAIL
 * FILTER_VALIDATE_FLOAT             FILTER_SANITIZE_URL   
 * FILTER_VALIDATE_IP
 * FILTER_VALIDATE_URL
 */
echo "====================== Tela filter validacao ======================";
/*
*********************** FILTER_SANITIZE_ *****************************
variavel $nomeVariavel recebe função filter_input(TIPODEINPUT, 'nomedocampo' FILTROQUEVERIFICATIPO) 

Sanitize = limpa valor da variavel pra receber somente o que é do tipo da variavel
$email = filter_input(INPUT_POST,'email',FILTER_SANITIZE_EMAIL);
$peso = filter_input(INPUT_POST,'peso',FILTER_SANITIZE_NUMBER_FLOAT);
$ip = filter_input(INPUT_POST,'ip',FILTER_SANITIZE_);
$url = filter_input(INPUT_POST,'url',FILTER_SANITIZE_URL);
$idade = filter_input(INPUT_POST, 'idade',FILTER_SANITIZE_NUMBER_INT);
$nome = filter_input(INPUT_POST,'nome',FILTER_SANITIZE_SPECIAL_CHARS);


$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$peso = filter_input(INPUT_POST, 'peso', FILTER_VALIDATE_FLOAT)
$ip = filter_input(INPUT_POST, 'ip', FILTER_VALIDATE_IP);
$url = filter_input(INPUT_POST, 'url', FILTER_VALIDATE_URL)){
$idade = filter_input(INPUT_POST,'idade', FILTER_VALIDATE_INT);
$nome = filter_input(INPUT_POST, 'nome', FILTER_VALIDATE_);
    
    **/
//$email = $_POST['email']; //atribuindo o valor recuperado
//$peso = $_POST['peso']; //atribuindo o valor recuperado
//$ip = $_POST['ip']; //atribuindo o valor recuperado
//$url = $_POST['url']; //atribuindo o valor recuperado
//$idade = $_POST['idade']; //atribuindo o valor recuperado
//$nome = $_POST['nome']; //atribuindo o valor recuperado
    



if(isset($_POST['enviar-formulario'])){
    $erros = array();

    $idade = filter_input(INPUT_POST, 'idade', FILTER_SANITIZE_NUMBER_INT);
    if(!filter_var($idade,FILTER_VALIDATE_INT)):
        $erros[] = "erro idade";
    endif;

    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)):
        $erros[] = "erro email";
    endif;

    $url = filter_input(INPUT_POST, 'url', FILTER_SANITIZE_URL);
    if(!filter_var($url,FILTER_VALIDATE_URL)):
        $erros[] = "erro url";
    endif;

    if(!empty($erros)){// se não estiver vazio o array $erros
        foreach($erros as $erro){//percora o array $erros
            echo "<li>$erro</li>";
        }//fim do foreach
    }else{//fim do if empty
        echo "cadastrado com sucesso !";
    }    

}//fim do if(isset($_POST['enviar-formulario']))

?>