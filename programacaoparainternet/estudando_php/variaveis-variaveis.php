<?php 

    //variáveis variáveis

    //criado a variavel $bebida recebendo o valor "refrigerante"
    $bebida = "Refrigerante";
    
    /** quando criarmos uma nova variavel $$bebida com dois cifrões estamos 
     * criando uma variavel variavel que refere-se a o valor Refrigerante sendo
     * ($$bebida) == ($Refrigerante) que recebe o valor "Guaraná"
     */
    $$bebida = "Guaraná";

    echo $Refrigerante;

    $destino = "cidade";

    $$destino = "Pelotas";

    echo "<br>Destino ". $destino ." de ". $$destino;

?>