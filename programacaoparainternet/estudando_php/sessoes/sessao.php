<?php
session_start();

$_SESSION['cor'] = "Azul";
$_SESSION['carro'] = "fusca";

echo $_SESSION['cor'] . "<br>" .$_SESSION['carro']."<br>". session_id();

?>