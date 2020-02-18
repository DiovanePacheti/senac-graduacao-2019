<?php
    class Login{

        public static $user;

        //  METHOD STATIC
        public static function verificaLogin(){
            //atributos static referenciamos com "self::" não "this->"
            echo "O usuário ".self::$user." está logado ! ";
        }//fim do method

        public function sairSistema(){
            echo "<br>O usuário deslogou";
        }

    }//fim da class Login

    /*para métodos e atributos estaticos 
    nao precisamos instacia a class 
    que este method pretence para utilizarmos */
    Login::$user = "admin";
    Login::verificaLogin();

//  class login instanciado 
    $login = new Login();
//    
    $login->sairSistema();




?>