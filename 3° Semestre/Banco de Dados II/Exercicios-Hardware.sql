-- 1 - Apresentar monitores e fabricantes

select m.descricaomonitor, f.nomefabricante
from monitor m, fabricantes f
where m.idfabricante=f.idfabricante

-- 2 - Apresentar memorias e fabricantes

select m.descricaomemoria, f.nomefabricante
from memorias m, fabricantes f
where m.idfabricante=f.idfabricante

-- 3 - Total de softwares iniciados com a letra W

select count(*) total 
from softwares s  
where s.nomesoftware like 'W%'

-- 4 - Apresentar memorias classificadas pela descrição

select m.descricaomemoria
from memorias m
order by m.descricaomemoria

-- 5 - Total de softwares utilizados 

select count(*) total_instalados
from softwaresinstalados si

-- 6 - Descrição do computador, descrição do tipo de memória e capacidade para computadores com 32 Gb ou mais de RAM

select c.descricaocomputador, m.descricaomemoria, c.capacidaderam 
from computadores c, memorias m
where c.idmemoria=m.idmemoria 
and c.capacidaderam >= 32

-- 7 - Listar os computadores com as respectivas capacidades de HD cujos monitores sejam de LED

select c.descricaocomputador, c.capacidadehd 
from computadores c, monitor m 
where c.idmonitor=m.idmonitor 
and m.descricaomonitor like '%LED%'

-- 8 - Descrição dos computadores e softwares instalados em computadores com menos de 16 Mb de RAM

select c.descricaocomputador, s.nomesoftware
from computadores c, softwares s, softwaresinstalados si 
where c.idcomputador=si.idcomputador
and si.idsoftware=s.idsoftware
and c.capacidaderam < 16

-- Maneira de fazer utilizando join para não ficar repetindo AND no WHERE --
select c.descricaocomputador, s.nomesoftware
from computadores c
join softwaresinstalados si on c.idcomputador = si.idcomputador
join softwares s on si.idsoftware = s.idsoftware
where c.capacidaderam < 16

-- 9 - Soma da quantidade de memória RAM instaladas nos computadores agrupados pelo fabricante (memória)

select f.nomefabricante, sum(c.capacidaderam) total_RAM
from computadores c, memorias m, fabricantes f
where c.idmemoria=m.idmemoria
and m.idfabricante=f.idfabricante
group by f.nomefabricante

-- 10 - Lista de computadores com alguma versão da plataforma Windows instalada

select distinct c.descricaocomputador
from computadores c, softwaresinstalados si, softwares s
where c.idcomputador = si.idcomputador
and si.idsoftware = s.idsoftware
and s.nomesoftware like '%Windows%'

-- 11 - Total de computadores ordenados pela descrição

select c.descricaocomputador, count(*) total_computadores
from computadores c
group by c.descricaocomputador
order by c.descricaocomputador

-- Listagem dos computadores ordenados pela descrição --

SELECT descricaocomputador
FROM computadores
ORDER BY descricaocomputador;

-- 12 - Nome do software mais instalado

select s.nomesoftware, count(*) soft_inst
from softwaresinstalados si, softwares s
where si.idsoftware = s.idsoftware
group by s.nomesoftware
order by soft_inst desc
limit 1

-- 13 - Total de computadores classificados por fabricante

select f.nomefabricante, count(*) total_computadores
from computadores c, fabricantes f
where c.idfabricante = f.idfabricante
group by f.nomefabricante

-- 14 - Descrição do computador com respectivo fabricante, fabricantes dos discos rígidos, monitores e memórias

select c.descricaocomputador, 
	fc.nomefabricante as fabricante_computador, 
	fhd.nomefabricante as fabricante_hd,
	fmon.nomefabricante as fabricante_monitor, 
	fmem.nomefabricante as fabricante_memoria
from computadores c
join fabricantes fc on c.idfabricante = fc.idfabricante
join discorigido d on c.iddiscorigido = d.iddiscorigido
	join fabricantes fhd on d.idfabricante = fhd.idfabricante
join monitor m on c.idmonitor = m.idmonitor
	join fabricantes fmon on m.idfabricante = fmon.idfabricante
join memorias me on c.idmemoria = me.idmemoria
	join fabricantes fmem on me.idfabricante = fmem.idfabricante

-- 15 - Nome do fabricante de monitor com maior ocorrência

select f.nomefabricante, count(m.idfabricante) maior_ocorrencia
from monitor m, fabricantes f
where m.idfabricante = f.idfabricante
group by f.nomefabricante
order by maior_ocorrencia desc
limit 1
