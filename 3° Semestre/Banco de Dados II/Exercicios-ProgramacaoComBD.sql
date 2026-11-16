-- Exercício 1: Pesquisa por Prefixo de Cidade (Filtro Parametrizado)

-- Escreva uma procedure chamada ListarCidadesPorPrefixo(p_prefixo 
-- VARCHAR) que receba um texto de busca e utilize um cursor parametri
-- zado para selecionar todas as cidades da tabela CIDADES cujo nome 
-- (NOMECIDADE) inicie com o prefixo informado (ignorando maiúsculas/minú
-- sculas).

create or replace procedure ListarCidadesPorPrefixo(p_nome 
varchar) language plpgsql as 
$$
	declare cursorcidades cursor for 
		select c.nomecidade, c.estado
		from cidades c 
		where upper(c.nomecidade) like upper (p_nome||'%');

	begin 
		for regCidades in cursorcidades
			loop
				raise notice '% - %', regCidades.nomecidade,
									  regCidades.estado;
			end loop;
	end;
$$

-- chamada: call ListarCidadesPorPrefixo('Ro');

-----------------------------------------------------------------

-- Exercício 2: Veículos por Potência e Valor (Múltiplos Parâmetros no
-- Cursor)

-- Desenvolva a procedure ListarVeiculosPorPotenciaEValor(p_hp_min 
-- NUMERIC, p_valor_max NUMERIC) com um cursor parametrizado que receba 
-- a potência mínima (POTENCIAHP) e o valor máximo (VALOR) da tabela 
-- VEICULOS. A procedure deve percorrer o cursor e exibir o modelo, o 
-- ano, a potência e o valor dos veículos. 

create or replace procedure ListarVeiculosPorPotenciaEValor
(p_hp_min numeric, p_valor_max numeric) language plpgsql as
$$
	declare CursorVeiculos cursor for select v.modelo, v.ano,
		v.potenciahp, v.valor
		from veiculos v
		where (v.potenciahp >= p_hp_min) and (v.valor <= p_valor_max);

	begin 
		for dados in CursorVeiculos
			loop		
				raise notice '% - % - % - %', dados.modelo,
				dados.ano, dados.potenciahp, dados.valor;
			end loop;
	end;
$$

-- Chamada: call ListarVeiculosPorPotenciaEValor(190, 90000);

-----------------------------------------------------------------

-- Exercício 3: Revendas por Cidade
-- Crie uma procedure chamada ListarRevendasPorCidade(p_idcidade 
-- NUMERIC). O cursor parametrizado deve selecionar o nome da revenda 
-- (NOMEREVENDA), o nome do proprietário (NOMEPROPRIETARIO) e a cidade
-- (NOMECIDADE), filtrando pelo código da cidade recebido por parâmetro. 

create or replace procedure ListarRevendasPorCidade() 
language plpgsql as
$$

	declare CursorCidade cursor for 
		select distinct c.nomecidade, c.estado, c.idcidade
		from revendas r, cidades c
		where r.idcidade = c.idcidade
		order by c.nomecidade;

	CursorRevenda cursor(p_cidade numeric) for 
		select r.nomerevenda,
		r.nomeproprietario
		from revendas r
		where r.idcidade = p_cidade;

	begin 
		for c in CursorCidade
		loop
			raise notice '% - %', c.nomecidade, c.estado;
			for rev in CursorRevenda(c.idcidade)
			loop
				raise notice '% - %', rev.nomerevenda, 
				rev.nomeproprietario;
			end loop;
		end loop;
	end;
$$

-- Chamada: call ListarRevendasPorCidade();

-----------------------------------------------------------------

-- Exercício 4: Relatório de Fabricantes e Seus Veículos (Utilize 
-- 2 Cursores Aninhados)

-- Desenvolva a procedure RelatorioFabricantesEVeiculos(). A procedure
-- deve conter:

  -- 1. cursorFabricantes (não parametrizado): Seleciona todos os 
-- fabricantes da tabela FABRICANTES. 

  -- 2. cursorVeiculos (parametrizado): Seleciona o modelo, ano e 
-- valor dos veículos da tabela VEICULOS pertencentes ao código do
-- fabricante (IDFABRICANTE) recebido por parâmetro. 

-- A execução deve imprimir o nome do fabricante e, em subnível, os
-- veículos associados. 

create or replace procedure RelatorioFabricantesEVeiculos() 
language plpgsql as
$$

	declare CursorFabricante cursor for
		select f.idfabricante, f.nomefabricante
		from fabricantes f
		order by f.nomefabricante;

	CursorVeiculos cursor(p_idfabricante numeric) for 
		select v.modelo, v.ano, v.valor
		from veiculos v
		where v.idfabricante = p_idfabricante; 
		
	begin 
		for fab in CursorFabricante
		loop
			raise notice '% - %', fab.idfabricante,
			fab.nomefabricante;
			for ve in CursorVeiculos(fab.idfabricante)
				loop
					raise notice ' -> % - % - %', ve.modelo,
					ve.ano, ve.valor;
				end loop;
		end loop;
	end;
$$

-- Chamada: call RelatorioFabricantesEVeiculos();

-----------------------------------------------------------------

-- Exercício 5: Relatório de Revendas e Respetivas Vendas (2 Cursores Aninhados)

-- Crie a procedure RelatorioRevendasEVendas().

  -- 1. cursorRevendas (não parametrizado): Percorre todas as revendas 
  -- da tabela REVENDAS. 

  -- 2. cursorVendas (parametrizado): Recebe o IDREVENDA e lista as 
-- vendas efetuadas pela revenda (ID da venda, data da venda e nome 
-- do cliente.

-- Imprima a revenda e a lista de vendas associadas. 

create or replace procedure RelatorioRevendasEVendas() 
language plpgsql as
$$

	declare CursorRevendas cursor for
		select r.idrevenda, r.nomerevenda
		from revendas r
		order by r.nomerevenda;

	CursorVendas cursor(p_idrevenda numeric) for 
		select v.idvenda, v.datavenda, c.nomecliente
		from vendas v, clientes c
		where v.idcliente = c.idcliente
		and v.idcliente = p_idrevenda
		order by v.datavenda;
		
	begin 
		for r in CursorRevendas
		loop
			raise notice '% - %', r.idrevenda, r.nomerevenda;
			for v in CursorVendas(r.idrevenda)
			loop
				raise notice ' -> % - % - %', v.idvenda,
				v.datavenda, v.nomecliente;
			end loop;
		end loop;
	end;
$$

-- Chamada: call RelatorioRevendasEVendas();

-- Exercício 6: Relatório para Cidades, Revendas e Vendas (3 Cursores
-- Aninhados)

-- Desenvolva a procedure RelatorioHierarquicoCidadesRevendasVendas().

  -- 1. cursorCidades (nível 1, não parametrizado): Percorre todas as 
-- cidades da tabela CIDADES.

  --2. cursorRevendas (nível 2, parametrizado por IDCIDADE): Seleciona 
--as revendas localizadas na cidade atual. 

  --3. cursorVendas (nível 3, parametrizado por IDREVENDA): Seleciona 
--as vendas efetuadas por cada revenda. 

-- A saída deve imprimir uma árvore hierárquica visual com os 3 níveis
-- (Cidade -> Revendas -> Vendas).

create or replace procedure RelatorioHierarquicoCidadesRevendasVendas() 
language plpgsql as
$$

	declare CursorCidade cursor for 
		select distinct c.nomecidade, c.estado, c.idcidade
		from revendas r, cidades c
		where r.idcidade = c.idcidade
		order by c.nomecidade;

	CursorRevenda cursor(p_idcidade numeric) for 
		select r.nomerevenda,
		r.nomeproprietario, r.idrevenda
		from revendas r
		where r.idcidade = p_idcidade;

	CursorVendas cursor(p_idrevenda numeric) for 
		select v.idvenda, v.datavenda, c.nomecliente
		from vendas v, clientes c
		where v.idcliente = c.idcliente
		and v.idcliente = p_idrevenda
		order by v.datavenda;

	begin 
		for ci in CursorCidade
		loop
			raise notice '% - %', ci.nomecidade, ci.estado;
			for re in CursorRevenda(ci.idcidade)
			loop
				raise notice ' -> % - %', re.nomerevenda,
				re.nomeproprietario;
				for ve in CursorVendas(re.idrevenda)
				loop
					raise notice ' -> % - %', ve.datavenda,
					ve.nomecliente;
				end loop;
			end loop;
		end loop;
	end;
$$

-- Chamada: call RelatorioHierarquicoCidadesRevendasVendas();
