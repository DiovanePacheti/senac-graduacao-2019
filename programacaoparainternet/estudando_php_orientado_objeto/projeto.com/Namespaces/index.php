<?php
    //teremos dois arquivos com o mesmo nome
    require 'classes/produto.php';
    require 'models/produto.php';

    /* inserimos o namespace que queremos instancia a class 
    colocando entre duas barras invertidas \classes\ */
    $novoProduto = new \classes\Produto();
    $novoProduto->mostrarDetalhes();
    echo "<br>";
    
    $novoProduto = new \models\Produto();
    $novoProduto->mostrarDetalhes();
    echo "<br>";
    
    use classes\Produto;
    $novoProduto = new Produto();
    $novoProduto->mostrarDetalhes();
    echo "<br>";
    
    // vamos instaniar o produto da pasta models atraves do nome produtoMercado
    use models\Produto as produtoMercado;
    $novoProduto = new produtoMercado();
    $novoProduto->mostrarDetalhes();
    






?>