--- Laço (loop) de 1 até N ---

create or replace procedure loop1(P_N integer)
language plpgsql as 
$$
  declare indice integer;

  begin
    for indice in 1..P_N
      loop
        raise notice '%', indice;
      end loop;
  end;
$$

-- Chamada: call loop1(10);

--- Cursor Vendedores ---

create or replace procedure ApresentarVendedores()
language plpgsql as
$$
	declare cursorvendedores cursor for
		select v.idvendedor, v.nomevendedor
		from vendedores v;

	begin 
		for registro in cursorvendedores
			loop
				raise notice '%, %', registro.idvendedor,
									 registro.nomevendedor;
			end loop;
	end;
$$

-- Chamada: call ApresentarVendedores();

---- Modelo e Faabricantes -> MostrarModelos(P_Ano) ---

create or replace procedure MostrarModelos(P_Ano integer)
language plpgsql as
$$
	declare cursorveiculos cursor for
		select f.nomefabricante, v.modelo, v.valor 
		from veiculos v, fabricantes f
		where v.idfabricante = f.idfabricante
		and v.ano = P_Ano;

	begin
		for dados in cursorveiculos
			loop
				raise notice '%, %, %', 
				dados.nomefabricante,
				dados.modelo, 
				dados.valor;
			end loop;
	end;
$$

-- Chamada: call MostrarModelos(2008);

---- Data venda, nome cliente, modelo e nome vendedor -> ExibirVendas ---
create or replace procedure ExibirVendas(P_DataI date, P_DataF date)
language plpgsql as
$$
	declare cursorvendas cursor for
		select v.datavenda, c.nomecliente, vi.modelo, ve.nomevendedor
		from vendas v, clientes c, veiculos vi, vendedores ve
		where v.idveiculo = vi.idveiculo
		and v.idcliente = c.idcliente
		and v.idvendedor = ve.idvendedor
		and (v.datavenda >= P_DataI)
		and (v.datavenda <= P_DataF);

	begin
		for vendas in cursorvendas
			loop
				raise notice '(%) - % - % - %',
					vendas.datavenda,
					vendas.nomecliente,
					vendas.modelo,
					vendas.nomevendedor;
			end loop;
	end;
$$

-- Chamada: call ExibirVendas('01/01/2012', '01/01/2013');

---- Cores e Veiculos ----

create or replace procedure ExibirCoresVeiculos()
language plpgsql as
$$
	declare cursorcor cursor for
		select c.idcor, c.descricaocor
		from cores c, veiculos v
		where c.idcor = v.idcor;
	
	declare cursorveiculos cursor(P_cor integer) for
		select v.modelo, v.valor
		from veiculos v
		where v.idcor = P_cor;

	begin
		for c in cursorcor
			loop
				raise notice '%', c.descricaocor;

				for v in cursorveiculos(c.idcor)
					loop
						raise notice ' -> % - %',
							v.modelo,
							v.valor;
					end loop;
			end loop;
	end;
$$

-- Chamada: call ExibirCoresVeiculos();

---- Ano e Modelo -> ExibirAnosModelos ----

create or replace procedure ExibirAnosModelos()
language plpgsql as
$$
	declare cursorano cursor for 
		select distinct v.ano
		from veiculos v
		order by v.ano;

	declare cursormodelo cursor(P_ano integer) for
		select distinct vi.modelo
		from veiculos vi
		where vi.ano = P_ano
		order by vi.modelo;

	begin
		for r_ano in cursorano
			loop
				raise notice '%', r_ano.ano;

				for r_modelo in cursormodelo(r_ano.ano)
					loop
						raise notice ' -> %', r_modelo.modelo;
					end loop;
			end loop;
	end;
$$

-- Chamada: call ExibirAnosModelos();

