<?php
// criando função

function exibirNome($nome){
    echo "Bem Vindo $nome !";
}

exibirNome("Diovane");

echo "<br><hr>";

function calcularMedia($nomeAluno, $nota1,$nota2,$nota3,$nota4){
    $media = ($nota1+$nota2+$nota3+$nota4)/4;

    if($media >= 7){
        echo "aluno $nomeAluno aprovado com a media $media";
    }else{
        echo "aluno $nomeAluno reprovado media $media";
    }
}

calcularMedia("diovane",4,6,3,7);
echo "<br>";
calcularMedia("Luis",9,6,9,7);

?>