<?php
    class Pessoa{
        public $idade;

        /*Quando usarmos a palavra clone o method 
        function __clone ira imprimir sua mensagem*/
        public function __clone(){
            echo " \" Clonagem de objetos \" ";
        }
         
    }//fim da classe Pessoa

    $pessoa = new Pessoa();//instanciando a class pessoa
    $pessoa->idade = 25;//atribuindo um valor a idade
    echo'echo $pessoa->idade '.$pessoa->idade;//imprime o valor da idade 25

    ////////// REFERENCIA /////////////////////////////
    //$pessoa2 faz referencia ao objeto pessoa
    $pessoa2 = $pessoa; // variavel pessoa2 recebe um objeto pessoa com valor idade 25
    $pessoa2->idade = 35; //variavel pessoa2 ira alterar o valor idade do objeto $pessoa
    
    echo "<br> -- Referencia :<br>".'$pessoa2 = $pessoa'.
    "<br>".'$pessoa2->idade = 35;'."<br>"
    .'echo $pessoa->idade '.$pessoa->idade;//imprime o valor da idade do objeto pessoa alterada pela variavel pessoa2
    
    ////////// CLONE /////////////////////////////
    $pessoa2 = clone $pessoa; // variavel pessoa2 recebe um clone do objeto pessoa com valor idade 25
    $pessoa2->idade = 35; //variavel pessoa2 não ira alterar o valor idade do objeto $pessoa
    
    echo "<br> --Clone : <br>".'$pessoa2 = clone $pessoa;'."<br>".'$pessoa2->idade = 35;';
    
  //echo "<br>".'echo $pessoa->idade '.$pessoa->idade;//imprime o valor da idade 25 - e preciso comentar o trecho que passa o valor por referencia
    echo "<br>".'echo $pessoa2->idade '.$pessoa2->idade;//imprime o valor da idade 35







?>