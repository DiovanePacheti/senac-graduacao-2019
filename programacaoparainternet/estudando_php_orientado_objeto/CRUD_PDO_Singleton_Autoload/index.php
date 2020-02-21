<?php
    require_once 'vendor/autoload.php';

    $produto= new \App\Model\Produto();//instanciando a classe produto
    $produto->setId(3);
    $produto->setNome('Notebook HP');
    $produto->setDescricao('i7, 8gb');

    //var_dump($produto);

    $produtoDao = new \App\Model\ProdutoDao();
   // $produtoDao->create($produto);    
   // $produtoDao->update($produto);    
    $produtoDao->delete(4);// retorna um array
    $produtoDao->read();// retorna um array
    
    foreach($produtoDao->read() as $produto){
        echo $produto['nome']."<br>".$produto['descricao']."<hr>";
    }





?>