<?php

namespace App\Model;

    class Conexao{
        private static $instance;

        //function que chama conexao
        public static function getConn(){
            if(!isset(self::$instance)){//verificando se não existir $instance
                //seta a propria $instence com dados pra conexao 
                self::$instance = new \PDO('mysql:host=localhost;dbname=pdo;charset=utf8','root','');
            }
                return self::$instance;
           
        }
    }//fim da class conexao
?>