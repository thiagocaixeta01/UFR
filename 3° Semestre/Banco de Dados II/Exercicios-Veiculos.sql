-- 1. Apresentar todas as cidades de Mato Grosso iniciadas com a letra R.

select c.nomecidade
from cidades c 
where c.estado = 'MT'
and c.nomecidade like 'R%'

-- 2. Apresentar nomes dos clientes com CPF terminados em 00.

select c.nomecliente, c.cpf
from clientes c
where c.cpf like '%00'

-- 3. Apresentar nomes dos clientes com respectivas cidades, e veículos adquiridos.

select cl.nomecliente, c.nomecidade, ve.modelo
from clientes cl, cidades c, vendas v, veiculos ve
where cl.idcidade = c.idcidade
and cl.idcliente = v.idcliente
and v.idveiculo = ve.idveiculo

-- 4. Total de formas de pagamento utilizadas por clientes.

select f.descricaoformapgto, count(f.idformaspgto) total
from clientes c, vendas v, formaspagamento f
where c.idcliente = v.idcliente
and v.idformaspgto = f.idformaspgto
group by f.descricaoformapgto

-- 5. Total de clientes por cidades.

select ci.nomecidade, count(c.idcidade) total
from clientes c, cidades ci
where c.idcidade = ci.idcidade
group by ci.nomecidade

--  6. Total de vendas por mês e ano.

select to_char(v.datavenda, 'MM-YYYY') mesano, count(*) total
from vendas v
group by to_char(v.datavenda, 'MM-YYYY')
order by to_char(v.datavenda, 'MM-YYYY')

-- 7. Quantidade de vendedores por fabricante de veículo.

select f.nomefabricante, count(distinct ve.idvendedor) quantidade
from vendedores ve, vendas v, veiculos vi, fabricantes f
where ve.idvendedor = v.idvendedor
and v.idveiculo = vi.idveiculo
and vi.idfabricante = f.idfabricante
group by f.nomefabricante

-- 8. Descrição e total dos veículos vendidos por mês

select vi.modelo, to_char(v.datavenda, 'MM') mes, count(*) total
from vendas v, veiculos vi
where vi.idveiculo = v.idveiculo
group by vi.modelo, to_char(v.datavenda, 'MM')
order by to_char(v.datavenda, 'MM')

-- 9. Quantidade de vendas realizadas por vendedores

select ve.nomevendedor, count(v.idvenda) total
from vendas v, vendedores ve
where v.idvendedor = ve.idvendedor
group by ve.nomevendedor

-- 10. Total de veículos vendidos por cidade (cliente)

select c.nomecidade, count(v.idvenda) total
from vendas v, clientes cl, cidades c
where v.idcliente = cl.idcliente
and cl.idcidade = c.idcidade
group by c.nomecidade

-- 11. Apresentar os clientes que realizaram as maiores quantidades de compras.

select c.nomecliente, count(v.idvenda) total
from vendas v, clientes c
where v.idcliente = c.idcliente
group by c.nomecliente
order by total desc

-- 12. Apresentar nomes de clientes agrupados pelo primeiro nome.

select split_part(c.nomecliente, ' ', 1) primeironome
from clientes c
group by split_part(c.nomecliente, ' ', 1)

-- 13. Total de vendas por cidade da revenda

select c.nomecidade, count(v.idvenda) total
from cidades c, vendas v, revendas r
where c.idcidade = r.idcidade
and v.idrevenda = r.idrevenda
group by c.nomecidade

-- 14. Apresentar todos os clientes e revendas de Mato Grosso na mesma sentença

select c.nomecliente, 'Cliente' as tipo
from clientes c, cidades ci
where c.idcidade = ci.idcidade
and ci.estado like 'MT'
	union
select r.nomerevenda, 'Revenda' as tipo
from revendas r, cidades c
where r.idcidade = c.idcidade
and c.estado like 'MT'

-- 15. Total vendido por veículo

select ve.modelo, sum(ve.valor) total
from vendas v, veiculos ve
where v.idveiculo = ve.idveiculo
group by ve.modelo

-- 16. Descrição dos veículos não vendidos

--- Usando NOT IN ---
select ve.modelo
from veiculos ve
where ve.idveiculo not in (
	select v.idveiculo
	from vendas v
)
        --- OU ---

--- Usando LEFT JOIN + IS NULL ---
select ve.modelo
from veiculos ve
left join vendas v on ve.idveiculo = v.idveiculo
where v.idveiculo is null

-- 17. Lista do primeiro veículo vendido

select ve.modelo, v.datavenda 
from vendas v, veiculos ve
where v.idveiculo = ve.idveiculo
order by v.datavenda asc
limit 1

-- 18. Total de veículos classificados por fabricante

select f.nomefabricante, count(v.idfabricante) total
from veiculos v, fabricantes f
where v.idfabricante = f.idfabricante
group by f.nomefabricante

-- 19. Apresentar os nomes dos veículos mais potentes

select v.modelo, v.potenciahp
from veiculos v
order by v.potenciahp desc

-- 20. Criar uma view para apresentar as 3 cores mais utilizadas

create view top3_cores_mais_usadas as
(select c.descricaocor, count(v.idcor) total
from cores c, veiculos v
where c.idcor = v.idcor
group by c.descricaocor
having count(*) in (
	select distinct r.total from 
	(select cr.idcor, count(*) total
	from cores cr, veiculos ve
	where cr.idcor = ve.idcor
	group by cr.idcor) r
	order by r.total desc
	limit 3
	)
)

select * from top3_cores_mais_usadas

-- 21. Criar uma view para apresentar o total de revendas por estado

create view total_revendas_por_estado as
(select c.estado, count(r.idrevenda) total
from revendas r, cidades c
where r.idcidade = c.idcidade
group by c.estado
order by total desc)

select * from total_revendas_por_estado

-- 22. Apresente o CPF e nome do cliente que realizou a primeira compra

select c.nomecliente, c.cpf, ve.modelo, v.datavenda
from vendas v, veiculos ve, clientes c
where v.idveiculo = ve.idveiculo
and v.idcliente = c.idcliente
order by v.datavenda asc
limit 1

-- 23. Nomes dos 5 vendedores que realizaram mais vendas

select ve.nomevendedor, count(v.idvenda) total
from vendas v, vendedores ve
where v.idvendedor = ve.idvendedor
group by ve.nomevendedor
order by total desc limit 5

-- 24. Criar uma view para apresentar a forma de pagamento mais utilizada

create view forma_pagamento_mais_utilizada as
(select f.descricaoformapgto, count(v.idformaspgto) total
from vendas v, formaspagamento f
where v.idformaspgto = f.idformaspgto
group by f.descricaoformapgto
order by total desc limit 1)

select * from forma_pagamento_mais_utilizada

-- 25. Valor vendido anualmente

select 
	to_char(v.datavenda, 'YYYY') as ano, 
	sum(ve.valor) valor_anual
from vendas v, veiculos ve
where v.idveiculo = ve.idveiculo
group by to_char(v.datavenda, 'YYYY')
order by ano

-- 26. Criar uma view para total de veículos vendidos por estado

--- Total de VENDAS por estado ---
create view total_veiculos_vendidos_por_estado as
(select c.estado, count(v.idvenda) total
from vendas v, clientes cl, cidades c
where v.idcliente = cl.idcliente
and cl.idcidade = c.idcidade
group by c.estado
order by total desc)

select * from total_veiculos_vendidos_por_estado

--- Total de REVENDAS por estado ---
create view total_veiculos_revendidos_por_estado as
(select c.estado, count(r.idrevenda) total
from vendas v, revendas r, cidades c
where v.idrevenda = r.idrevenda
and r.idcidade = c.idcidade
group by c.estado
order by total desc)

select * from total_veiculos_revendidos_por_estado

-- 27. Média de vendas mensais por veículos

select ve.modelo, 
	to_char(v.datavenda, 'MM') as mes, 
	round(avg(ve.valor), 2) as media 
from vendas v, veiculos ve
where v.idveiculo = ve.idveiculo
group by ve.modelo, to_char(v.datavenda, 'MM')
order by ve.modelo, mes

-- 28. Listar todos os modelos de veículos fabricados a partir de 2010,
-- ordenados pelo valor (do mais caro para o mais barato).

select modelo, valor
from veiculos
where ano >= 2010
order by valor desc

-- 29. Apresentar os nomes dos clientes cujo CPF termina com “00”.

select nomecliente, cpf
from clientes 
where cpf like '%00'

-- 30. Mostrar todas as cidades do estado da Bahia (BA) cujo nome 
-- começa com a letra “C”.

select nomecidade, estado
from cidades
where estado = 'BA'
and nomecidade like 'C%'

-- 31. Listar os vendedores cujo nome contém a letra “a” 
-- (maiúscula ou minúscula).

select nomevendedor
from vendedores
where nomevendedor ilike '%a%'

-- 32. Apresentar as cores cujo nome contém a palavra “blue” ou “Blue”.

select descricaocor
from cores
where descricaocor ilike '%blue%'

-- 33. Mostrar o modelo do veículo, o nome do fabricante e a cor de 
-- todos os veículos.

select v.modelo, f.nomefabricante, c.descricaocor
from veiculos v, fabricantes f, cores c
where v.idfabricante = f.idfabricante
and v.idcor = c.idcor

-- 34. Listar o nome do cliente, a cidade onde mora e o estado.

select cl.nomecliente, ci.nomecidade, ci.estado
from clientes cl, cidades ci
where cl.idcidade = ci.idcidade

-- 35. Apresentar o nome da revenda, a cidade da revenda e o nome do 
-- proprietário.

select r.nomerevenda, c.nomecidade, r.nomeproprietario
from revendas r, cidades c
where r.idcidade = c.idcidade

-- 36. Mostrar o nome do vendedor, o modelo do veículo que ele vendeu 
-- e a data da venda.

select ve.nomevendedor, vi.modelo, v.datavenda
from vendedores ve, veiculos vi, vendas v
where ve.idvendedor = v.idvendedor
and vi.idveiculo = v.idveiculo

-- 37.  Listar o nome do cliente, o modelo do veículo comprado e a
-- forma de pagamento utilizada.

select c.nomecliente, vi.modelo, f.descricaoformapgto
from clientes c, veiculos vi, formaspagamento f, vendas v
where c.idcliente = v.idcliente
and vi.idveiculo = v.idveiculo
and f.idformaspgto = v.idformaspgto

-- 38. Quantidade de veículos por fabricante.

select f.nomefabricante, count(*) qtd_veiculos
from fabricantes f, veiculos v
where f.idfabricante = v.idfabricante
group by f.nomefabricante
order by qtd_veiculos desc

-- 39. Total de vendas realizadas por cada forma de pagamento.

select f.descricaoformapgto, count(*) total
from formaspagamento f, vendas v
where f.idformaspgto = v.idformaspgto
group by f.descricaoformapgto
order by total desc

-- 40. Valor total vendido por cada revenda.

select r.nomerevenda, sum(vi.valor) total
from revendas r, vendas v, veiculos vi
where r.idrevenda = v.idrevenda
and vi.idveiculo = v.idveiculo
group by r.nomerevenda
order by total desc


-- 41. Quantidade de clientes por estado.

select ci.estado, count(c.idcliente) as total_clientes
from clientes c, cidades ci
where c.idcidade = ci.idcidade
group by ci.estado
order by total_clientes desc

-- 42. Média de potência (potenciahp) dos veículos por fabricante.

select f.nomefabricante, round(avg(v.potenciahp), 2) media
from veiculos v, fabricantes f
where v.idfabricante = f.idfabricante
group by f.nomefabricante
order by media desc

-- 43. Quantidade de vendas realizadas em cada ano
-- (usando a data da venda).

select to_char(v.datavenda, 'YYYY') as ano,
	count (v.idvenda) as qtd_vendas
from vendas v
group by to_char(v.datavenda, 'YYYY')
order by ano desc

-- 44. Valor médio dos veículos vendidos por cor.

select c.descricaocor, round(avg(vi.valor), 2) media
from vendas v, veiculos vi, cores c
where v.idveiculo = vi.idveiculo
and c.idcor = vi.idcor
group by c.descricaocor
order by media desc

-- 45. Quantidade de veículos vendidos por ano de fabricação do veículo.

select vi.ano, count(v.idveiculo) qtd_veiculos
from vendas v, veiculos vi
where v.idveiculo = vi.idveiculo
group by vi.ano
order by qtd_veiculos desc

-- 46. Fabricantes que possuem mais de 5 veículos cadastrados.

select f.nomefabricante, count(*) as qtd_veiculos
from veiculos v, fabricantes f
where v.idfabricante = f.idfabricante
group by f.nomefabricante
having count(*) > 5

-- 47. Cidades que possuem mais de 2 clientes.

select ci.nomecidade, count(*) qtd_clientes
from cidades ci, clientes cl
where ci.idcidade = cl.idcidade
group by ci.nomecidade
having count(*) > 2

-- 48. Vendedores que realizaram mais de 5 vendas.

select ve.nomevendedor, count(*) qtd_vendas
from vendas v, vendedores ve
where v.idvendedor = ve.idvendedor
group by ve.nomevendedor
having count(*) > 5

-- 49. Listar os 5 veículos mais caros (modelo + valor + ano).

select v.modelo, v.valor, v.ano
from veiculos v
order by v.valor desc
limit 5

-- 50. Mostrar o cliente que gastou o maior valor em compras
-- (nome + total gasto).

vselect c.nomecliente, sum(ve.valor) valor_gasto
from clientes c, vendas v, veiculos ve
where c.idcliente = v.idcliente
and ve.idveiculo = v.idveiculo
group by c.nomecliente
order by valor_gasto desc
limit 1

-- 51. Apresentar os modelos de veículos que nunca foram vendidos.

select modelo
from veiculos
where idveiculo not in (
	select idveiculo
	from vendas
)

-- 52. Listar as revendas que ainda não realizaram nenhuma venda.

select nomerevenda
from revendas
where idrevenda not in (
	select idrevenda
	from vendas
)
