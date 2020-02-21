<?php

namespace App\Model;

    class ProdutoDao{

        public function create(Produto $pro){

            /*comando de inserir no banco nome 
            e descricao no lugar dos ? bindValue*/
            $sql = 'INSERT INTO produtos (nome, descricao) VALUES(?,?)';

            /*instanciando classe Conecao e 
            usando :: pro ser static class e method e 
            usa o method prepare a $sql */
            $stmt = Conexao::getConn()->prepare($sql);
            $stmt->bindValue(1, $pro->getNome());
            $stmt->bindValue(2, $pro->getDescricao());
            $stmt->execute();

        }//fim do method create

        public function read(){
            $sql = 'SELECT* FROM produtos';

            $stmt = Conexao::getConn()->prepare($sql);
            $stmt->execute();

            if($stmt->rowCount()>0){
                $resultado = $stmt->fetchAll(\PDO::FETCH_ASSOC);
                return $resultado;
            }else{
                return [];
            }
        }//fim da function read

        public function update(Produto $pro){
            $sql ='UPDATE produtos SET nome = ?, descricao = ? WHERE id = ?';

            $stmt = Conexao::getConn()->prepare($sql);
            $stmt->bindValue(1, $pro->getNome());
            $stmt->bindValue(2, $pro->getDescricao());
            $stmt->bindValue(3, $pro->getId());
            $stmt->execute();
        }//fim da function update

        public function delete($id){
            $sql = 'DELETE FROM produtos WHERE id = ?';
            $stmt = Conexao::getConn()->prepare($sql);
            $stmt->bindValue(1,$id);
            $stmt->execute();
        }//fim do method dalete
    }//fim da class ProdutoDao

?>