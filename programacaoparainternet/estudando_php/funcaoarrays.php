<?php
$nomes = array("Diovane", "Bruna", "Luis");

// ====== utilizando is_array() que verifica se a variavel e um tipo array
echo is_array($nomes)."<br>";//retrona o numero 1

var_dump(is_array($nomes));//retorna um valor boolean true

if(is_array($nomes)){
    echo "<br>é um array";
}else{
    echo "não é um array";
}
echo "<br>";
// ======= utilizando in_array()

echo in_array("Bruna", $nomes);//verificando se o nome Bruna existe no array

if(in_array("carlos", $nomes)){
    echo "o nome foi encontrado";
}else{
    echo "o nome não foi encontrado<br>";
}
// ======= utilizando array_keys() gera um array com os indices de um array
$keys = array_keys($nomes);

print_r($keys);
// ==== utilizando array_values() gera um array com os valores do array passado
echo "<br>";
$values = array_values($nomes);

print_r($values);

// ==== utilizando array_marge() mesca o conteudo de depois array
$carros = array("Fusca", "Uno","Gol");
$motos = array("CG150","CBX500","Bis");

$veiculos = array_merge($carros, $motos);
echo "<br>";
foreach($veiculos as $valores){
    echo $valores."<br>";
}

print_r($veiculos);
echo "<br>";
// ============= utitlizando array_pop() remove o ultimo valor do array

$pop = array_pop($veiculos);


print_r($pop);
echo "<br>";
print_r($veiculos);

// =========== utilizando array_shift() remove primeiro elemento do array

array_shift($veiculos);
echo "<br>";
print_r($veiculos);
echo "<br>";
// =========== utilizando array_unshift() entroduz um ou mais valores no inicio do array

$frutas = array("uva","laaranja","banana");
print_r($frutas);
echo "<br>";
array_unshift($frutas, "manga", "acerola", "mamao");
print_r($frutas);
echo "<br>";

// =========== utilizando array_push() adiciona valores no fim do array
array_push($frutas, "Abacaxi","melancia");
print_r($frutas);
echo "<br>";
// =========== utilizando array_combine() mescla os dois arrays utilizando o primeiro como indice e o segundo como valores
$parentesco = array("pai", "mae", "irmao");
$pessoas = array("Diovane", "Bruna", "Luis");
$familia = array_combine($parentesco, $pessoas);
print_r($familia);
echo "<br>";

// =========== utilizando array_sum soma valores de um array
$soma = array(4,5,8,4);

echo array_sum($soma);
echo "<br>";
// =========== utilizando explode transforma uma string em um array
$data = "10/02/1989";

$dataArmazenada =  explode('/', $data);

print_r($dataArmazenada);

$nomeCompleto = "Diovane Luis Pacheti";

$nomeArmazenado = explode(" ", $nomeCompleto);
echo "<br>";
print_r($nomeArmazenado);


//================== utilizando implode trsnforma array em uma string

$retornandoNome = implode(" ", $nomeArmazenado);
echo "<br>".$retornandoNome;

?>

