<?php

    //inserindo o arquivo Mãe que vai extender seus atributos
    include_once 'veiculos.php';
    //declarando a class
    class Carro extends Veiculo{
        
    }// fim da class carro

    $nCarro = new Carro();
    $cor = "azul";
    $nCarro->setCor($cor);

    echo $nCarro->getCor();
    echo $nCarro->parar();
    var_dump($nCarro);
?>