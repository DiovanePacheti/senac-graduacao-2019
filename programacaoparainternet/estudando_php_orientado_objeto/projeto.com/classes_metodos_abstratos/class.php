<?php

    /* Como a classe Banco vai ser uma classe 
    generia dos atributos e comportamentos de um
    banco podemos torna-la uma classe abstract*/ 
    abstract class Banco{
        protected $saldo;
        protected $limiteSaque;
        protected $juros;

        public function getSaldo(){
            return $this->saldo;
        }
        public function setSaldo($sa){
            $this->saldo = $sa;
        }

        /* E os metodos serao abstract obrigando a ser implementados 
        nas classe herdeiras */
        abstract protected function Sacar($sa);
        abstract protected function Depositar($de);
        
    }// fim da class Banco
    
    class Banco1 extends Banco{
        public function sacar($saque){
            $this->setSaldo($this->getSaldo() - $saque);
        }//fim do method sacar
        public function depositar($deposito){
            $this->setSaldo($this->getSaldo() + $deposito);
        }
    }//fim da class Banco1
    
    class Banco2 extends Banco{
        public function sacar($saque){
            $this->setSaldo($this->getSaldo() - $saque);
        }//fim do method sacar
        public function Depositar($deposito){
            $this->setSaldo($this->getSaldo() + $deposito);
        }
    }//fim da class Banco2
    
    $nbanco1 = new Banco1();
    echo "== Banco 1 ==<br>";
    $nbanco1->setSaldo(200);
    $usuarioSacando = 20;
    echo "Saldo : ".$nbanco1->getSaldo()."<br>";
    echo "Sacando valor : ".$usuarioSacando."<br>";
    $nbanco1->sacar($usuarioSacando);
    echo "Saldo : ".$nbanco1->getSaldo()."<br>";
    $usuarioDepositando = 50;
    $nbanco1->depositar($usuarioDepositando);
    echo "Depositando valor : ".$usuarioDepositando."<br>";
    echo "Saldo : ".$nbanco1->getSaldo()."<br>";


?>