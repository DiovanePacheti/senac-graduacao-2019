<?php

/***** Escalares********** */
//String ==========================================================
echo "<h1>String: </h1>";
$nome = "Diovane";
echo "<h3>resultado função var_dump()</h3>";
//função var_dump vai retornar algumas informações uma delas e o typo da variavel
var_dump($nome);

echo "<br><h3>retorno da função is_string validando um comando <strong>if</strong></h3>";
//validando tipo da variavel com comando is_string()
if(is_string($nome)){
    echo " <br>a variavel $nome e String<br>";
}else{
    echo "<br>a variavel não e String<br>";
}
echo "<hr>";

//int ============================================================
echo "<h1>Int: </h1>";
$anoNasc = 1986;
echo "<h3>resultado função var_dump()</h3>";
//função var_dump vai retornar algumas informações uma delas e o typo da variavel
var_dump($anoNasc);

echo "<br><h3>retorno da função is_string validando um comando <strong>if</strong></h3>";
//validando tipo da variavel com comando is_string()
if(is_int($anoNasc)){
    echo " <br>a variavel $anoNasc e int<br>";
}else{
    echo "<br>a variavel não e int<br>";
}
echo "<hr>";


//float ============================================================
echo "<h1>Float: </h1>";
$altura = 1.68;
echo "<h3>resultado função var_dump()</h3>";
//função var_dump vai retornar algumas informações uma delas e o typo da variavel
var_dump($altura);

echo "<br><h3>retorno da função is_string validando um comando <strong>if</strong></h3>";
//validando tipo da variavel com comando is_string()
if(is_float($altura)){
    echo " <br>a variavel $altura e float<br>";
}else{
    echo "<br>a variavel não e float<br>";
}
echo "<hr>";


//boolean ============================================================
echo "<h1>Boolean: </h1>";
$admin = true;
echo "<h3>resultado função var_dump()</h3>";
//função var_dump vai retornar algumas informações uma delas e o typo da variavel
var_dump($admin);

echo "<br><h3>retorno da função is_string validando um comando <strong>if</strong></h3>";
//validando tipo da variavel com comando is_string()
if(is_bool($admin)){
    echo " <br>a variavel $admin e boolean<br>";
}else{
    echo "<br>a variavel não e boolean<br>";
}
echo "<hr>";


//============== tipo de dados compostos==============================================
echo "<h1>Array: </h1>";
$carros = array("Gol","Uno","Camaro",34,1.68,true);
echo "<h3>resultado função var_dump()</h3>";
//função var_dump vai retornar algumas informações uma delas e o typo da variavel
var_dump($carros);

echo "<br><h3>retorno da função is_string validando um comando <strong>if</strong></h3>";
//validando tipo da variavel com comando is_string()
if(is_array($carros)){
    echo " <br>a variavel e um array<br>";
}else{
    echo "<br>a variavel não e array<br>";
}
echo "<hr>";


//object ============================================================
echo "<h1>Object: </h1>";
class Cliente{
    public $nome;
    public function atribuirNome($nome){
        $this->$nome = $nome;
    }
}

$cliente = new Cliente();
$cliente->atribuirNome("Luis");
echo "<h3>resultado função var_dump()</h3>";
//função var_dump vai retornar algumas informações uma delas e o typo da variavel
var_dump($cliente);

echo "<br><h3>retorno da função is_string validando um comando <strong>if</strong></h3>";
//validando tipo da variavel com comando is_string()
if(is_object($cliente)){
    echo " <br>a variavel e um Object <br>";
}else{
    echo "<br>a variavel não e Object<br>";
}
echo "<hr>";
?>
