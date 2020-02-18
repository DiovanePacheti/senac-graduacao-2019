<?php
    class Pessoa{
        //declarando uma constante
        const nome = "Diovane";

        public function exibirNome(){
            echo self::nome;
        } //fim do method exibirNome

    }//fim da class Pessoa ------- //

    class Funcionario extends Pessoa{
        const nome = "Luis";

        public function exibirNome(){
            echo self::nome;// ira referenciar o valor da const da class Funionario
        }
            
    }//fim da class Funcionario --- //

    class Gerente extends Pessoa{
        const nome = "nunes";

        public function exibirNome(){
            echo parent::nome;// ira refereniar o valor da constante da class MÂE
        }
    }//fim da class Gerente

    $Funcionario = new Funcionario();
    $Funcionario->exibirNome();
    echo "<br>"; 
    $Gerente = new Gerente();
    $Gerente->exibirNome();





?>