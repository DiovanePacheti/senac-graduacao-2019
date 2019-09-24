mysql -u root -p

DROP DATABASE IF EXISTS empregado;
CREATE DATABASE IF NOT EXISTS empregado;
USE empregado;

CREATE TABLE empregado (
    codigo Integer NOT NULL,
    nome CHAR(40) NOT NULL,
    setor CHAR(2),
    cargo CHAR(20),
    salario DECIMAL(10,2),
    PRIMARY KEY (codigo)
);

INSERT INTO empregado VALUES (1,'Cleide Campos','1','Secretária',1000);
INSERT INTO empregado VALUES (3,'Andreia Batista','6','Programadora',1500);
INSERT INTO empregado VALUES (4,'Cristiano Souza','6','Programador',1500);
INSERT INTO empregado VALUES (6,'Mario Souza','4','Analista',2200);
INSERT INTO empregado VALUES (7,'Ana Silva','4','Secretária',1000);
INSERT INTO empregado VALUES (9,'Silvia Soares','5','Supervisora',1650);
INSERT INTO empregado VALUES (10,'José da Silva','1','Programador',1500);
INSERT INTO empregado VALUES (15,'Manoel Batista','1','Projetista',2500);
INSERT INTO empregado VALUES (25,'João Silva','4','Supervisor',1650);
