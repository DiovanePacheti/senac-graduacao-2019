<?php

$cont = 10;
while($cont >= 0):
    echo $cont--."<br>";
endwhile;
$cont++;
echo "=====================<br>";
do{
    echo $cont++."<br>";
}while($cont <= 10);    

for($contador = 0 ; $contador <= 10; $contador++){
    echo $contador."<br>";
}

$cores = array("verde","azul","amarelo");


foreach($cores as $valor){
    echo $valor.", ";
}

echo "<br>";
foreach($cores as $indice=> $valor){
    echo $indice. " = ".$valor.", ";
}


?>

