<?php
//a variavel arquivo recebe o caminho de um arquivo a ser manipulado
$arquivo = 'arquivo.txt';
//conteudo
$conteudo = "proximo conteudo de teste\r\n";
//tamanho do arquivo
$tamanhoArquivo = filesize($arquivo);
//fopen()
/* criamos uma variavel que vai receber o retorno da função fopen() que recebe 
por parametro o nome do arquivo e a forma como vai ser aberto o arquivo para leitura
escrita*/
$arquivoAberto = fopen($arquivo, 'a');

/**
 * ‘r’ Abre somente para leitura; coloca o ponteiro do arquivo no começo do arquivo.
 * ‘r+’ Abre para leitura e escrita; coloca o ponteiro do arquivo no começo do arquivo.
 * ‘w’ Abre somente para escrita; coloca o ponteiro do arquivo no começo do arquivo e reduz o comprimento do arquivo para zero. Se o arquivo não existir, tenta criá-lo.
 * ‘w+’ Abre para leitura e escrita; coloca o ponteiro do arquivo no começo do arquivo e reduz o comprimento do arquivo para zero. Se o arquivo não existir, tenta criá-lo.
 * ‘a’ Abre somente para escrita; coloca o ponteiro do arquivo no final do arquivo. Se o arquivo não existir, tenta criá-lo.
 * ‘a+’ Abre para leitura e escrita; coloca o ponteiro do arquivo no final do arquivo. Se o arquivo não existir, tenta criá-lo.
 * ‘x’ Cria e abre o arquivo somente para escrita; coloca o ponteiro no começo do arquivo. Se o arquivo já existir, a chamada a fopen() falhará, retornando FALSE e gerando um erro de nível E_WARNING. Se o arquivo não existir, tenta criá-lo.
 * ‘x+’ Cria e abre o arquivo para leitura e escrita; coloca o ponteiro no começo do arquivo. Se o arquivo já existir, a chamada a fopen() falhará, retornando FALSE e gerando um erro de nível E_WARNING. Se o arquivo não existir, tenta criá-lo.
 */


//escrevendo no arquivo
fwrite($arquivoAberto, $conteudo);

//fechando arquivo
fclose($arquivoAberto);
//arquivo aberto para leitura
$arquivoAberto = fopen($arquivo, 'r');

/**Lendo arquivo */
//utilizando um loop para ler linha por linha
while(!feof($arquivoAberto)){//enquanto não for final do arquivo
    $linha = fgets($arquivoAberto, $tamanhoArquivo);//variavel linha recebe a funçao fgets que recebe por parametro o arquivo e o tamnaho do arquivo
    echo $linha.'<br>';
}
?>