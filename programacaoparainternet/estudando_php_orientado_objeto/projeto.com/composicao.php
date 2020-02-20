<?php

//use classes\Produto;

/**Composição
     * Na composição, uma classe cria a instancia
     * de outra dentro de si própria, sendo assim quando
     * ela for destruída, a outra classe tambem será 
     */

    class Pessoa{

        public function atribuiNome($nome){
            return "O nome da pessoa é ".$nome;
        }    
    }//fim da class Pessoa  
    
    class Exibe{
        public $pesso;
        public $nome;

        function __construct($nome)
        {
            $this->pessoa = new Pessoa();
            $this->nome = $nome;
        }//fim do construtor

        public function exibeNome(){
            //a função atribuiNome retornara o texto com o nome passado no construtor
            echo $this->pessoa->atribuiNome($this->nome);
        }
    }//fim da class Exibe
    $nomeEnviar = "Diovane";
    $novaExibicao = new Exibe($nomeEnviar);
    $novaExibicao->exibeNome();