<?php

    class Animal{
        public function andar(){
            echo "O animal andou !";
        }//fim do method andar 

        public function correu(){
            echo " correu !";
        }

    }//fim da class Animal

    class Cavalo extends Animal{

        /* com o polimorfismo podemos sobrescrever os 
        metodos herdados da classe mãe para definirmos seu 
        comportamento na class filho*/
        public function andar(){

            echo "O Cavalo ";
            $this->correu();
        }
    }

    $animal = new Animal();
    $animal->Andar();
    echo "<br>";
    $novoCavalo = new Cavalo();
    $novoCavalo->andar();

?>