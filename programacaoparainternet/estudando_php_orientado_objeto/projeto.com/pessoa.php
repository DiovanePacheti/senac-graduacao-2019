<?php

class Pessoa{

//Atributos    
public $nome;
public $idade;

//metodo
public function falar(){
    echo $this->nome." de ".$this->idade." acabou de falar";
}//fimdo method falar


}//fim da classe pessoa  

$novaPessoa = new Pessoa(); // instanciando o objeto Pessoa

$novaPessoa->falar(); // chamando methodo 

// passando valores 
$novaPessoa->nome = "Diovane";
$novaPessoa->idade = "34";

echo $novaPessoa->nome; // imprimindo nome
