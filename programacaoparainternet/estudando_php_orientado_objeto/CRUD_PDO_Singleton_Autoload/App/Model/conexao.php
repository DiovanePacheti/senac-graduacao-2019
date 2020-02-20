<?php
    class Conexao{
        private static $instance;

        //function que chama conexao
        public static function getConn(){
            if(!isset(self::$instance)){//verificando se não existir $instance
                //seta a propria $instence com dados pra conexao 
                self::$instance = new  PDO('mysql:host=localhost;dbname=pdo;charset=utf8','root','');
            }else{//se existir uma instancia retona 
                return self::$instance;
            }
        }
    }//fim da class conexao
?>