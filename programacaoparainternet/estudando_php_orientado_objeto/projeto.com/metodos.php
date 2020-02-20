<?php
    class Pessoa{
        private $dados = array();

        public function __set($nome, $valor){
            $this->dados[$nome] =$valor;
        }//fim do method 

        public function __get($nome){
            return $this->dados[$nome];
        }//fim da function __get

        public function __tostring(){
            return "tentei imprimir !";
            
        }//fim do toString()

        public function __invoke(){
            return "<br>Objeto como função ";
        }
    }//fim da class Pessoa

    $novaPessoa = new Pessoa();
    $novaPessoa->nome = "Diovane";//setando no method __set($nome, $valor){}
    $novaPessoa->idade = 34;
    $novaPessoa->sexo = "M";
    echo $novaPessoa; //chama o metodo tostring e trnas o status da class
    echo $novaPessoa(); // retorna a class como função
/*
    echo $novaPessoa->nome."<br>"; //utiliza o method __get($nome){}
    echo $novaPessoa->idade."<br>";
    echo $novaPessoa->sexo."<br>";
*/
  
?>