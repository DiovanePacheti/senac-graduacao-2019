<?php
    /** ASSOCIAÇÃO
     * Acontece quando um objeto "utiliza" outro, porem, sem
     * que eles dependam um do outro
     */

    class Pedido{
        public $numero;
        public $cliente;
    }//fim do pedido
    
    class Cliente{
        public $nome;
        public $endereco;
    }

    //instanciando o objeto cliente 
    $cliente= new Cliente();
    $cliente->nome = "Diovane";
    $cliente->endereco = "rua nº111";

    //instanciando oobjeto pedido
    $pedido = new Pedido();
    $pedido->numero =  "0001A";
    $pedido->cliente = $cliente; //associação um pedio possui um cliente

    $dados = array(
        'numero : ' => $pedido->numero,
        'nome_cliente : ' => $pedido->cliente->nome,
        'endereco_cliente : ' => $pedido->cliente->endereco
    );
    //var_dump($dados);
    print_r($dados);

?>