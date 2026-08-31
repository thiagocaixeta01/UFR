CREATE TABLE PROJETOS (

&#x09;CODPROJETO	NUMBER(3) NOT NULL,

&#x09;DESCRICAO	VARCHAR(20) NOT NULL,

&#x09;PRIMARY KEY (CODPROJETO));



CREATE TABLE CATEGORIA (

&#x09;CAT	VARCHAR(10) NOT NULL,

&#x09;SAL	NUMBER(10) NOT NULL,

&#x09;PRIMARY KEY (CAT));



CREATE TABLE EMPREGADOS (

&#x09;CODEMP	NUMBER(3) NOT NULL,

&#x09;CAT	VARCHAR(10),

&#x09;NOME	VARCHAR(10) NOT NULL,

&#x09;PRIMARY KEY (CODEMP),

&#x09;FOREIGN KEY (CAT) REFERENCES CATEGORIA (CAT));



CREATE TABLE TRABALHA (

&#x09;CODPROJETO	NUMBER(3),

&#x09;CODEMP 	NUMBER(3),

&#x09;DATAINICIO	DATE NOT NULL,

&#x09;TEMPAI		NUMBER(10) NOT NULL,

&#x09;FOREIGN KEY (CODPROJETO) REFERENCES PROJETOS (CODPROJETO),

&#x09;FOREIGN KEY (CODEMP) REFERENCES EMPREGADOS (CODEMP));



INSERT INTO PROJETOS VALUES

('11', 'Front-End e Backend do site da empresa'),

('22', 'Projetos para a construção das sedes'),

('33', 'Projetos de preservação ambiental nas contruções'),

('44', 'Manutenção de máquinas');



INSERT INTO CATEGORIA VALUES

('Engenheiro Software', '2000'),

('Engenheiro Civil', '4000'),

('Engenheiro Ambiental', '6000'),

('Engenheiro Mecânico', '8000');



INSERT INTO EMPREGADOS VALUES

('1', 'Engenheiro Software', 'Maria'),

('2', 'Engenheiro Civil', 'Pedro'),

('3', 'Engenheiro Ambiental', 'João'),

('4', 'Engenheiro Mecânico', 'Thiago');



INSERT INTO TRABALHA VALUES

('11', '1', '11/11/2011', '11'),

('22', '2', '22/02/2022', '22'),

('33', '3', '03/03/2033', '33'),

('44', '4', '04/04/2044', '44');



SELECT E.NOME, P.DESCRICAO

&#x20;FROM EMPREGADOS E,

&#x20;     TRABALHA T,

&#x20;     PROJETOS P

&#x20;WHERE E.CODEMP = T.CODEMP

&#x20;AND T.CODPROJETO = P.CODPROJETO;



SELECT E.NOME, C.SAL

&#x20;FROM EMPREGADOS E,

&#x20;     CATEGORIA C

&#x20;WHERE E.CAT = C.CAT

ORDER BY E.NOME, C.SAL DESC;

