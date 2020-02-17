<?php
class Login{
    //Atributos
    public $email;
    public $senha;
    public $nome;


    //construtor
    public function __construct($email, $senha, $nome){
        $this->setEmail($email);
        $this->setSenha($senha);
        $this->setNome($nome);  
    }//fim do construct
    public function getNome(){
         return $this->nome;
    }
    public function setNome($no){
        $nome = filter_var($no, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $this->nome = $nome;
    }
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
$novoLogin = new Login("teste/\()@gmail.com", "123456", "Diovane Luis");

$novoLogin->logar();
echo "<br>";
echo "Ola ".$novoLogin->getNome();
//echo $novoLogin->getEmail();
echo "<br>";
//echo $novoLogin->getSenha();
?>