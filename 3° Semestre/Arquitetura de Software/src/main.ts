import { Acervo } from './acervo';
import { Autor } from './autor';
import { Livro } from './livro';
import { titulos, publicadosDepoisDe, maisAntigo } from './relatorio';

const machado = new Autor('Machado de Assis');
const orwell = new Autor('George Orwell');

const acervo = new Acervo();

acervo.adicionar(new Livro('L001', 'Dom Casmurro', 1899, machado));
acervo.adicionar(new Livro('L003', '1984', 1949, orwell));

// ------ O Acervo ------
console.log(`\n------ O Acervo ------`);
console.log(`Total de livros: ${acervo.total()}`);

// ------ Busca por código ------
console.log(`\n------ Busca por código ------`);

const encontrado = acervo.buscarPorCodigo('L003');

if (encontrado !== undefined) { console.log('Achei:', encontrado.descricao()); }
try { acervo.adicionar(new Livro('L001', 'Dom Casmurro (outra edição)', 1899, machado));
} catch (erro) {
    if (erro instanceof Error) { console.log('Recusado:', erro.message); }
}

const naoEncontrado = acervo.buscarPorCodigo('L999');
if (naoEncontrado === undefined) { console.log('Não achei o livro com código L999'); }

// ------ Tentando cadastrar um livro com código repetido ------
console.log(`\n------ Tentando cadastrar um livro com código repetido ------`);

try { acervo.adicionar(new Livro('L001', 'Dom Casmurro (outra edição)', 1899, machado));
} catch (erro) {
    if (erro instanceof Error) { console.log('Recusado:', erro.message); }
}

// ------ Remoção ------
console.log(`\n------ Remoção ------`);
acervo.remover('L004');
console.log(`Total de livros: ${acervo.total()}`);
const removido = acervo.buscarPorCodigo('L004');
if(removido === undefined ) {console.log('O livro com código L004 foi removido');}

// ------ Relatórios ------
console.log(`\n------ Relatórios ------`);
console.log(`Titulos: ${titulos(acervo.listar())}`);
console.log(`Mais antigo: ${maisAntigo(acervo.listar()).descricao()}`);

// ------ Mexendo na lista devolvida ------
console.log(`\n------ Mexendo na lista devolvida ------`);
const lista = acervo.listar();
lista.pop();
console.log(`A lista que eu peguei tem: ${lista.length}`);
console.log(`O acervo continua com: ${acervo.total()}`);