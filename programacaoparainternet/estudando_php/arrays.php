<?php

$carros = array(2=>"BMW",0=>"Hilux",1=>"Veloster");
echo $carros[1]."<br>";
$carros[] = "Amarok";
print_r($carros); 
echo "<br>";
$motos = array();
$motos[] = "Yamara";
$motos[2] = "Honda";

print_r($motos);

echo "<h3>Retornando o tamanho do array motos com a função count() </h3>";
$totalDeMotos = count($motos);

echo $totalDeMotos."<br>";

// foreach
foreach($carros as $valor){
    echo $valor."<br>";
}

/////////////////////////////////////////
//====== Arrays Associativos ==========//
echo "====== Arrays Associativos ==========<br>";

//um array e asssociativo quando suas chaves ou indice sao do tipo String
$pessoa = array("nome"=>"Diovane","anoNasc"=>1986,"altura"=>1.68);
$pessoa["sobreNome"] = "Luis";


print_r($pessoa); //imrimindo todo array
echo "<br>".$pessoa["nome"]."<br>";//imprimindo o indice nome

foreach($pessoa as $indice => $valor){
    echo $indice." : ". $valor. "<br>";
}

//////////////////////////////
// Arraysmultidimensionais //

$times = array(
    "cariocas"=> array("viceCampeao"=>"vasco", "campeao"=>"flamengo", "terceiro"=>"Botafogo"),
    "paulistas"=> array("palmeiras","santos","são Paulo","corinthians"),
    "gauchos"=> array("grêmio", "Internacional")
);

//imprimindo primeiro gremio
echo $times["gauchos"][0]."<br>";

foreach($times["cariocas"] as $indice => $valor){
    echo $indice. " : ".$valor."<br>";
}


?>