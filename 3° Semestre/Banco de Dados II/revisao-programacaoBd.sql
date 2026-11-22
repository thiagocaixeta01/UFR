-- Exercicio 1 - Cursor parametrizado simples
-- Crie a procedure ListarClientesPorEstado(p_estado VARCHAR) 
-- que recebe a sigla do estado e lista o nome e CPF de todos 
-- os clientes daquele estado (usando cursor parametrizado).

create or replace procedure ListarClientesPorEstado(p_estado varchar)
language plpgsql as 
$$
	declare c_estado cursor(p_est varchar) for
	    select c.estado, cl.nomecliente, cl.cpf
	    from clientes cl, cidades c
	    where cl.idcidade = c.idcidade
		  and upper (c.estado) = upper (p_est);

	begin
		for r_estado in c_estado(p_estado)
		loop
			raise notice '% -> % - %', r_estado.estado,
			r_estado.nomecliente, r_estado.cpf;
		end loop;
	end;
$$

====================================================================

-- Exercicio 2 - Dois parâmetros
-- Crie ListarVeiculosPorAnoEValor(p_ano_min NUMERIC, p_valor_min NUMERIC) 
-- que mostre modelo, ano e valor dos veículos com ano ≥ p_ano_min e 
-- valor ≥ p_valor_min.

create or replace procedure ListarVeiculosPorAnoEValor
(p_ano_min numeric, p_valor_min numeric)
language plpgsql as 
$$
	declare c_veiculo cursor for 
		select v.modelo, v.ano, v.valor
		from veiculos v
		where (v.ano) >= p_ano_min
		and (v.valor) >= p_valor_min
		order by v.valor;
	
	begin
		for r_ve in c_veiculo
		loop
			raise notice '% - % - %', r_ve.modelo, r_ve.ano,
			r_ve.valor;
		end loop;
	end;
$$

====================================================================

-- Exercicio 3 - Cursor aninhado (2 níveis)
-- Crie RelatorioCoresEVeiculos().
  -- Cursor 1: todas as cores
  -- Cursor 2 (parametrizado): veículos daquela cor
  -- Mostre a cor e, embaixo, os modelos dessa cor.


create or replace procedure RelatorioCoresEVeiculos()
language plpgsql as 
$$
	declare c_cor cursor for 
		select c.idcor, c.descricaocor
		from cores c
		order by c.descricaocor;

	c_ve cursor(p_cor integer) for
		select v.modelo
		from veiculos v
		where v.idcor = p_cor;
	
	begin
		for r_cor in c_cor
		loop
			raise notice '%', r_cor.descricaocor;
			for r_ve in c_ve(r_cor.idcor)
			loop
				raise notice '-> %', r_ve.modelo;
			end loop;
		end loop;
	end;
$$

====================================================================

-- Exercicio 4 - Cursor aninhado(2 níveis)
  -- Crie RelatorioVendedoresEVendas().
  -- Cursor 1: todos os vendedores
  -- Cursor 2 (parametrizado): vendas de cada vendedor (idvenda, data, 
  -- nome do cliente)

create or replace procedure RelatorioVendedoresEVendas()
language plpgsql as 
$$
	declare c_vendedor cursor for 
		select distinct ve.idvendedor, ve.nomevendedor
		from vendedores ve, vendas v
		where v.idvendedor = ve.idvendedor
    order by ve.nomevendedor;
		
		c_venda cursor(p_vendedor integer) for
			select v.idvenda, v.datavenda, c.nomecliente
			from vendas v, clientes c
			where v.idcliente = c.idcliente
			and v.idvendedor = p_vendedor
      order by v.datavenda;
			
	begin
		for r_vend in c_vendedor
		loop
			raise notice '%', r_vend.nomevendedor;
			for r_venda in c_venda(r_vend.idvendedor)
			loop
				raise notice ' -> % - % - %', r_venda.idvenda,
				r_venda.datavenda, r_venda.nomecliente;
			end loop;
		end loop;
	end;
$$

====================================================================

-- Exercicio 5 - Três níveis 
-- Crie RelatorioFabricantesVeiculosVendas().
  -- Nível 1: Fabricantes
  -- Nível 2: Veículos do fabricante
  -- Nível 3: Vendas daquele veículo (data e nome do cliente)

create or replace procedure 
RelatorioFabricantesVeiculosVendas() language plpgsql as
$$
	declare c_fab cursor for
		select f.idfabricante, f.nomefabricante
		from fabricantes f
	  order by f.nomefabricante;
		
	c_vi cursor(p_idfab integer) for
		select v.idveiculo, v.modelo
		from veiculos v
		where v.idfabricante = p_idfab
    order by modelo;

	c_vendavi cursor(p_idveiculo integer) for
		select v.datavenda, c.nomecliente 
		from vendas v, clientes c
		where v.idcliente = c.idcliente
		and v.idveiculo = p_idveiculo
    order by datavenda;
		
	begin
		for r_fab in c_fab
		loop
			raise notice '%', r_fab.nomefabricante;
			for r_vi in c_vi(r_fab.idfabricante)
			loop
				raise notice ' => %', r_vi.modelo;
				for r_vendavi in c_vendavi(r_vi.idveiculo)
				loop
					raise notice '  -> % - %', 
					r_vendavi.nomecliente,
					r_vendavi.datavenda;
				end loop;
			end loop;
		end loop;
	end;
$$

====================================================================

-- Exercício 6 – Desafio
  -- Crie ListarCidadesComRevendas(p_prefixo VARCHAR) que:
  -- Recebe um prefixo de cidade
  -- Lista apenas as cidades que começam com esse prefixo e que possuem
  -- pelo menos uma revenda.  
  -- Para cada cidade, lista as revendas dela (usando cursor aninhado)

create or replace procedure 
ListarCidadesComRevendas(p_prefixo varchar) language plpgsql as
$$
	declare c_cidade cursor for
		select distinct c.idcidade, c.nomecidade
		from cidades c, revendas r
		where upper (c.nomecidade) like upper (p_prefixo || '%')
		and c.idcidade = r.idcidade;

	c_revenda cursor(p_idcidade integer) for
		select r.nomerevenda
		from revendas r
		where r.idcidade = p_idcidade
		order by r.nomerevenda;
		
	begin
		for r_ci in c_cidade
		loop
			raise notice '%', r_ci.nomecidade;
			for r_rev in c_revenda(r_ci.idcidade)
			loop
				raise notice ' -> %', r_rev.nomerevenda;
			end loop;
		end loop;
	end;
$$

====================================================================

-- Fase 2 - Revisão com exercícios que mais tenho dificuldade.

-- Exercício 1 – Cursor parametrizado simples (foco em parâmetro)
  -- Crie a procedure ListarVeiculosPorFabricante(p_idfabricante NUMERIC)
  -- que receba o código do fabricante e liste modelo, ano e valor dos 
  -- veículos daquele fabricante, usando cursor parametrizado.

create or replace procedure 
ListarVeiculosPorFabricante(p_idfabricante numeric) language plpgsql as
$$
	declare 
		c_veiculosfab cursor(p_idfab integer) for
			select f.nomefabricante, v.modelo, v.ano, v.valor
			from veiculos v, fabricantes f
			where v.idfabricante = f.idfabricante
			and (f.idfabricante) = p_idfab;
		
	begin
		for r_veiculos in c_veiculosfab(p_idfabricante)
		loop
			raise notice '% -> % - % - %', 
			r_veiculos.nomefabricante,
			r_veiculos.modelo,
			r_veiculos.ano,
			r_veiculos.valor;
		end loop;
	end;
$$

====================================================================

-- Exercício 2 – LIKE + UPPER (foco no filtro de texto)
  -- Crie a procedure ListarClientesPorPrefixoNome(p_prefixo VARCHAR)
  -- que liste o nome e CPF dos clientes cujo nome comece com o prefixo 
  -- informado (ignore maiúsculas/minúsculas). Use cursor parametrizado.

create or replace procedure 
ListarClientesPorPrefixoNome(p_prefixo varchar) 
language plpgsql as
$$
	declare 
		c_clientes cursor(pref varchar) for
			select c.nomecliente, c.cpf
			from clientes c
			where upper (c.nomecliente) like upper (pref||'%');
		
	begin
		for r in c_clientes(p_prefixo)
		loop
			raise notice '% - %', r.nomecliente, r.cpf;
		end loop;
	end;
$$

====================================================================

-- Exercício 3 – Evitar duplicação (DISTINCT)
  -- Crie a procedure ListarEstadosComClientes().
  -- O cursor deve listar apenas os estados que possuem clientes (sem 
    -- repetir o estado).
  -- Para cada estado, mostre quantos clientes ele tem (pode usar COUNT 
    -- no próprio cursor ou fazer um segundo cursor).

create or replace procedure 
ListarEstadosComClientes() 
language plpgsql as
$$
	declare 
		c_estadoqtd cursor for
			select c.estado, count(*) qtd_clientes
			from clientes cl, cidades c
			where cl.idcidade = c.idcidade
			group by c.estado
			order by qtd_clientes;
	begin
		for r in c_estadoqtd
		loop
			raise notice '% - %', r.estado, r.qtd_clientes;
		end loop;
	end;
$$

====================================================================

-- Exercício 4 – Dois níveis (erro clássico de ID)
-- Crie a procedure RelatorioFormasPagamentoEVendas().
  -- Cursor 1: todas as formas de pagamento (idformaspgt + descricaofor
    -- mapgto)
  -- Cursor 2 (parametrizado): vendas daquela forma de pagamento (idven
    -- da, data e nome do cliente)
-- Atenção: o cursor externo precisa trazer o ID.

create or replace procedure 
RelatorioFormasPagamentoEVendas() 
language plpgsql as
$$
	declare 
		c_formapgto cursor for
			select f.idformaspgto, f.descricaoformapgto
			from formaspagamento f
			order by f.descricaoformapgto;

		c_vendas cursor(p_idforma integer) for
			select v.idvenda, v.datavenda, c.nomecliente
			from vendas v, clientes c
			where v.idformaspgto = p_idforma
			and c.idcliente = v.idcliente
			order by v.idvenda;
	begin
		for r in c_formapgto
		loop
			raise notice '% - %', r.idformaspgto,
			r.descricaoformapgto;
			for r_v in c_vendas(r.idformaspgto)
			loop
				raise notice ' -> % - % - %',
				r_v.idvenda, r_v.datavenda, r_v.nomecliente;
			end loop;
		end loop;
	end;
$$

====================================================================

-- Exercício 5 – Dois níveis + DISTINCT
-- Crie a procedure RelatorioCidadesEClientes().
  -- Cursor 1: cidades que possuem pelo menos um cliente (use DISTINCT ou JOIN correto)
  -- Cursor 2 (parametrizado): clientes daquela cidade (nome e CPF)

create or replace procedure 
RelatorioCidadesEClientes() 
language plpgsql as
$$
	declare 
		c_cidade cursor for
			select distinct c.idcidade, c.nomecidade
			from clientes cl, cidades c
			where cl.idcidade = c.idcidade
			order by c.idcidade;
			
		c_clientes cursor(p_idcidade integer) for
			select c.nomecliente, c.cpf
			from clientes c
			where c.idcidade = p_idcidade;
			
	begin
		for r in c_cidade
		loop
			raise notice '%', r.nomecidade;
			for c in c_clientes(r.idcidade)
			loop
				raise notice ' -> % - %', c.nomecliente,
				c.cpf;
			end loop;
		end loop;
	end;
$$

====================================================================

-- Exercício 6 – Três níveis (treinar passagem de ID em cadeia)
-- Crie a procedure RelatorioEstadosCidadesClientes().
  -- Nível 1: Estados distintos que possuem clientes
  -- Nível 2: Cidades daquele estado
  -- Nível 3: Clientes daquela cidade

create or replace procedure 
RelatorioEstadosCidadesClientes() 
language plpgsql as
$$
	declare 
		c_estados cursor for
			select distinct c.estado
			from cidades c, clientes cl
			where c.idcidade = cl.idcidade
			order by c.estado;
			
		c_cidades cursor(p_estado varchar) for
			select c.idcidade, c.nomecidade
			from cidades c
			where c.estado = p_estado
			order by c.nomecidade;

		c_clientes cursor(p_idcidade integer) for
			select c.nomecliente
			from clientes c
			where c.idcidade = p_idcidade;
			
	begin
		for e in c_estados
		loop
			raise notice '%', e.estado;
			for ci in c_cidades(e.estado)
			loop
				raise notice ' => %', ci.nomecidade;
				for cl in c_clientes(ci.idcidade)
				loop
					raise notice '  -> %', cl.nomecliente;
				end loop;
			end loop;
		end loop;
	end;
$$

====================================================================

-- Exercício 7 – Cursor parametrizado com dois parâmetros
-- Crie a procedure ListarVendasPorPeriodo(p_data_inicio DATE,
-- p_data_fim DATE) que liste idvenda, data da venda, nome do cliente 
-- e nome do vendedor das vendas realizadas entre as duas datas 
-- (inclusive). Use cursor parametrizado.

create or replace procedure 
ListarVendasPorPeriodo(p_data_inicio date, p_data_fim date) 
language plpgsql as
$$
	declare 
		c_lista cursor(p_datai date, p_dataf date) for
			select v.idvenda, v.datavenda, c.nomecliente, ve.nomevendedor
			from vendas v, clientes c, vendedores ve
			where v.idcliente = c.idcliente
			and ve.idvendedor = v.idvendedor
			and (v.datavenda) >= p_datai
			and (v.datavenda) <= p_dataf
			order by v.datavenda;
	begin
		for r_l in c_lista(p_data_inicio, p_data_fim) 
		loop
			raise notice '% - % - % - %',
			r_l.idvenda, r_l.datavenda, 
			r_l.nomecliente, r_l.nomevendedor;
		end loop;
	end;
$$

====================================================================

-- Exercício 8 – Desafio (junta vários erros comuns)
-- Crie a procedure RelatorioFabricantesComVeiculosCaros(p_valor_min 
  -- NUMERIC).

  -- Cursor 1: fabricantes que possuem pelo menos um veículo com 
  -- valor ≥ p_valor_min
  -- Cursor 2 (parametrizado): os veículos daquele fabricante que 
  -- atendem ao valor mínimo (modelo, ano, valor)

-- Requisitos:
  -- Não pode repetir fabricante
  -- O cursor externo deve ser filtrado pelo parâmetro
  -- O cursor interno também deve respeitar o valor mínimo

create or replace procedure 
RelatorioFabricanteComVeiculosCaros(p_valor_min numeric) 
language plpgsql as
$$
	declare 
		c_fab cursor(valormin numeric) for
			select distinct f.idfabricante, f.nomefabricante
			from veiculos v, fabricantes f
			where v.idfabricante = f.idfabricante
			and v.valor >= valormin;
			
		c_veiculos cursor(p_idfab integer, valormin numeric) for
			select distinct v.modelo, v.ano, v.valor
			from veiculos v
			where v.idfabricante = p_idfab
			and v.valor >= valormin;
			
	begin
		for f in c_fab(p_valor_min)
		loop
			raise notice '%', f.nomefabricante;
			for v in c_veiculos(f.idfabricante, p_valor_min)
			loop
				raise notice ' -> % - % - %',
				v.modelo, v.ano, v.valor;
			end loop;
		end loop;
	end;
$$
