<?php

$numero = 10;

if($numero == 10):
    echo "e igual a 10";
endif;

// ========================

if($numero > 11):
    echo "e maior que 11";
else:
    echo "e menor que 11";
endif;

// ========================

if($numero > 10):
    echo "numero é maior que 10";
elseif($numero < 10):
    echo " numero é menor que 10";
elseif($numero != 10):
    echo "numero é difirente de 10";
else:
    echo "numero é igual a 10";    
endif;

// ====== operador ternario ====
$media = 7;
echo ($media >= 7)? "Aprovado!":"Reprovado!";
echo "<br>";
$cor = "Azul";

switch($cor):
    case "Vermelha":
        echo "cor escolhida vermelha";
    break;
    case "Azul":
    case "azul":
        echo "cor escolhida Azul";
    break;
    default:
        echo "cor nao existe !";
endswitch;        

?>