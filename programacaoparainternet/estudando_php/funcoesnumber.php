<?php
    
    //====== number_format()
    $num = 1234.56;
    $preco = number_format($num, 2,",",".");
    echo "O valor do produto é R$ $preco";
    echo "<br>";
    // ======== round() arredonda pra cima ou pra baixo 
    echo round(3.45);
    echo "<br>";
    
    // ======== ceil() arredonda pra cima
    echo ceil(4.15);
    echo "<br>";
    
    // ========= floor() arredonda pra baixo
    
    echo floor(2.89);
    echo "<br>";
    // ======== rand() gera numeros aleatorios entre os valores passado por parametro
    echo rand(1,20)


?>