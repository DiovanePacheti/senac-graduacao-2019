<?php
    /** Ocorrência anormal que afeta o funcionamento da aplicação
     *  Exception é a classe base para todas Exceptions
     *  message, code, file, line
     */
    class NewLetter{
        public function cadastrarEmail($email){
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                //lançando exception
                throw new Exception("Este email é inválido ", 1);
                
            }else{
                echo "Email cadastrado com sucesso !";
            }//fim do bloco da condicional que testa se o email e valido 
        }//fim function
    }

    $newsletter = new NewLetter();

try{//tente executar a function
    $newsletter->cadastrarEmail("contato@");
} catch(Exception $e){//captura as exception
    echo "Mensagem : ".$e->getMessage()."<br>";//imprime a mensagem se for gerado erros
    echo "Código : ".$e->getCode()."<br>";//imprime o codigo
    echo "Linha : ".$e->getline()."<br>";//imprime linha
    echo "Arquivo : ".$e->getfile()."<br>";//imprime o arquivo
}


?>