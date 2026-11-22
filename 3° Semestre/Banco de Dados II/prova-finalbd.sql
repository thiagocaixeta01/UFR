-- A  Procedimento

-- Receba a descrição exata do computador e um total mínimo de instalações, 
-- liste o código e a quantidade de instalações das máquinas desse tipo que
-- atingirem o mínimo, com totais decrescentes e código crescente.

create or replace procedure ListarComputadoresPorInstalacoes(
    p_descricao varchar,
    p_minimo integer
)
language plpgsql as
$$
	declare
    c_comp cursor for
        select c.idcomputador,
		count(si.idsoftware) as qtd_instalacoes
        from computadores c, softwaresinstalados si
		where c.idcomputador = si.idcomputador
        and c.descricaocomputador = p_descricao
        group by c.idcomputador
        having count (si.idsoftware) >= p_minimo
        order by count (si.idsoftware) desc, c.idcomputador asc;
	
	begin
	    for r in c_comp
	    loop
	        raise notice 'Código: % - Instalações: %', 
	            r.idcomputador, r.qtd_instalacoes;
	    end loop;
	end;
$$

=====================================================================

-- B  Função

-- Retorne a média de instalações por computador do tipo informado, 
-- arredondada a duas casas. Inclua zeros no cálculo e retorne NULL se
-- o tipo não tiver computadores.

create or replace function MediaInstalacoesPorTipo(p_descricao varchar)
returns numeric(10,2)
language plpgsql as 
$$
	declare
	    v_media numeric(10,2);
	    v_existe integer;
	
	begin
	    select count(*) into v_existe
	    from computadores c
	    where c.descricaocomputador = p_descricao;
	
	    if (v_existe = 0) then
	        return null;
	    end if;
	
	    select round(avg(qtd), 2) into v_media
	    from (
	        select c.idcomputador,
	        count(si.idsoftware) as qtd
	        from computadores c, softwaresinstalados si
	        where c.idcomputador = si.idcomputador
	        and c.descricaocomputador = p_descricao
	        group by c.idcomputador
	    ) sub;
	
	    return v_media;
	end;
$$
