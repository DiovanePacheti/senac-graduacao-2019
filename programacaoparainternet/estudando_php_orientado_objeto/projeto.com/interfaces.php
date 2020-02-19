<?php
    interface Crud{
        public function create();
        public function read();
        public function update();
        public function delete();
        
    }// fim da class crud
    
    class Noticias implements Crud{

        public function create(){
            //lógica para criar as noticias
            echo "digite a nova noticia";
        }
        public function read(){

        }
        public function update(){

        }
        public function delete(){

        }

    }//fim da class noticias

    $nNoticias = new Noticias();
    $nNoticias->create();

?>