<?php

use classes\Produto;

/**Agregação
     * Na agregação, uma classe precisa
     * da outra para executar sua ação,
     * ou seja, uma classe utiliza a outra
     * como parte de si própria 
     */

     class Produtos{
        private $nome;
        private $valor;

        function __construct($nome, $valor)
        {
            $this->setNome($nome); 
            $this->setValor($valor); 
        }

        public function getNome(){ return $this->nome; }
        public function setNome($nome){ $this->nome = $nome; }
        public function getvalor(){ return $this->valor; }
        public function setValor($valor){ $this->valor = $valor; }
        
        
    }// fim da class produtos

     class Carrinho{
        public $produtos; // atributo vai ser um array que receber um produto
        
        //adiciona um produto do tipo objeto Produto
        public function adiciona(Produtos $produto){
            $this->produtos[] = $produto;
        }// fim function adiciona

        public function exibe(){
            echo "========== Produtos =========<br>";
            foreach($this->produtos as $produto){
                echo $produto->getNome()." : ";
                echo $produto->getValor().'<br>';
            }//fim do foreach
        }//fim da function exibe
     }//fim da class carrinho

     $novoProduto = new Produtos("coca-cola","4,50");
     $novoProduto1 = new Produtos("fanta","2,99");

     $carrinho = new Carrinho();
     
     
     $carrinho->adiciona($novoProduto);
     $carrinho->adiciona($novoProduto1);
     
     $carrinho->exibe();

     //print_r($novoProduto);
?>