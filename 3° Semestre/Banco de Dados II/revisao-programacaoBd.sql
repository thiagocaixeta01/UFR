-- Exercicio 1 - Cursor parametrizado simples
-- Crie a procedure ListarClientesPorEstado(p_estado VARCHAR) 
-- que recebe a sigla do estado e lista o nome e CPF de todos 
-- os clientes daquele estado (usando cursor parametrizado).

create or replace procedudre ListarClientesPorEstado(p_estado varchar)
language plpgsql as 
$$
:echo expand('%:p')
$$
