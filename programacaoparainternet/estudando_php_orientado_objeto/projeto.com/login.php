<?php
class Login{
    //Atributos
    public $email;
    public $senha;

    public function getEmail(){
        return $this->email;
    }

    public function setEmail($e){
        $email = filter_var($e, FILTER_SANITIZE_EMAIL);
        $this->email = $email;
    }
    public function getSenha(){
        return $this->senha;
    }

    public function setSenha($senha){
        $this->senha = $senha;
    }

    //function logar
    public function logar(){
        if($this->email == "teste@gmail.com" and $this->senha == "123456"){
            echo "Logado com sucesso !";
        }else{    
            echo "Dados inválidos !";
        }//fim do bloco condicional se email e senha confere


    }//fim da function logar
}//fim da class Login


//ISNTANCIANDO CLASSE LOGIN
$novoLogin = new Login();

$novoLogin->setEmail("teste/\()@gmail.com");
$novoLogin->setSenha("123456");
$novoLogin->logar();
echo "<br>";
echo $novoLogin->getEmail();
echo "<br>";
echo $novoLogin->getSenha();
?>