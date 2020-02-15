<?php
//trabalhando formatação de datas
echo date('d')."<br>"; // dia em numero
echo date('D')."<br>"; // dia em texto
echo date('m')."<br>"; // mes em numero
echo date('M')."<br>"; // mes em texto
echo date('y')."<br>"; // ano em numero
echo date('Y')."<br>";//ano com 4 digitos
echo date('d/m/Y')."<br>";//data completa 
echo date('l')."<br>";//retorna o dia por extenso
echo date('h:i:s A')."<br>"; //hora completa ate 12 hs
echo date('H:i:s ')."<br>"; //hora completa hora ate 24 hs

//local data
date_default_timezone_set('America/Sao_Paulo');

//Armazenando data no banco de dados com DATE e DATETIME
$date = date('y-m-d'); // DATE
$datetime = date('y-m-d H:i:s'); //DATETIME

echo "DATE = ".$date."<br>";
echo "DATETIME = ".$datetime."<br>";

//TIME
/** retorna a quantidade de segundo contados desde 1970 */
echo time()."<br>";

//fromatando a data com a função time();
$time = time();
echo date('d/m/y', $time). ' data formatada ' ;

//MKTIME
$data_pagamento = mktime(15,30,00,02,15,2021);
echo "<br>".date('d/m/y - h:i',$data_pagamento)."<br>";

//caso o valor da data venha do banco de dados em DATE e DATETIME
//STRTOTIME
$date = '2019-04-10'; //datas no formato string
$datetime = '2019-04-10 14:35:01';
echo $date." data no formato string <br>";
$date = strtotime($date);
echo date('d/m/y', $date)." data no formato date <br>";

?>