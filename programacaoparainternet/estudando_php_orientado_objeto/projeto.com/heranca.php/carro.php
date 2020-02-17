<?php
    include_once 'veiculos.php';
    //declarando a class
    class Carro extends Veiculo{
        
    }// fim da class carro

    $nCarro = new Carro();

    $nCarro->cor = "Vermelho";

    echo $nCarro->cor;
?>