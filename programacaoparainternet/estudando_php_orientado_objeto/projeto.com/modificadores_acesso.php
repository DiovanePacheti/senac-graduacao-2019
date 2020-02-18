<?php
    
    /////////// PRIVATE ////////////////////
    //declarando a class
    class Veiculo{
        private $modelo; //modificador de acesso privado
        
        public function getModelo(){ 
            return $this->modelo; 
        } 
        public function setModelo($mo){
            $modelo = filter_var($mo, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            $this->modelo = $modelo;
        } 
       
    }//fim da class veiculo

         
    class Carro extends Veiculo{
        
    }// fim da class carro

    $nCarro = new Carro();
    $modelo = "Uno";
    $nCarro->setModelo($modelo);

    echo $nCarro->getModelo();
    var_dump($nCarro);     

    /*
    /////////// PROTECTED ////////////////////

    //declarando a class
    class Veiculo{
        protected $modelo; //modificador de acesso protected
        
        
    }//fim da class veiculo
    
    
    class Carro extends Veiculo{
        
        public function getModelo(){ 
            return $this->modelo; 
        } 
        public function setModelo($mo){
            $modelo = filter_var($mo, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            $this->modelo = $modelo;
        }

    }// fim da class carro

    $nCarro = new Carro();
    $modelo = "Uno";
    $nCarro->setModelo($modelo);

    echo $nCarro->getModelo();
    var_dump($nCarro);     
    */
    /*
    /////////// PUBLIC ////////////////////

    //declarando a class
    class Veiculo{
        public $modelo; //modificador de acesso public
        
        
    }//fim da class veiculo
    
    
    class Carro extends Veiculo{
        

    }// fim da class carro

    $nCarro = new Carro();
    $nCarro->modelo = "Uno";

    echo $nCarro->modelo;
    var_dump($nCarro); 
    */    
?>