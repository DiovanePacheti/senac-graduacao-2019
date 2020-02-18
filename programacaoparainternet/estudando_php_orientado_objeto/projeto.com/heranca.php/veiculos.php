<?php

    //declarando a class
    class Veiculo{
        private $modelo;
        private $cor;
        private $ano;
        
        public function getModelo(){ 
            return $this->modelo; 
        } 
        public function setModelo($mo){
            $modelo = filter_var($mo, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            $this->modelo = $modelo;
        } 
        public function getCor(){
            return $this->cor;
        } 
        public function setCor($co){
            $cor = filter_var($co, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            $this->cor = $cor;            
        } 
        public function getAno(){
            return $this->ano;
        } 
        public function setAno($an){
            $ano = filter_var($an, FILTER_SANITIZE_NUMBER_INT);
            $this->ano = $ano;
        } 


        function andar(){
            echo " andou !";
        }//fim do method andar

        public function parar(){
            echo " parou !";
        }// fim method para
         
    }//fim da class veiculo

?>