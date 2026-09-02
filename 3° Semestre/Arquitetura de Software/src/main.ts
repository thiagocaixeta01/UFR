import { Autor } from './autor';
import { Livro } from './livro';
import { Acervo } from './acervo';
import { titulos, publicadosDepoisDe, maisAntigo } from './relatorio';

const machado = new Autor('Machado de Assis');
const orwell = new Autor('George Orwell');

const acervo = new Acervo();
acervo.adicionar(new Livro('L001', 'Dom Casmurro', 1899, machado));
acervo.adicionar(new Livro('L002', 'Memórias Póstumas de Brás Cubas', 1881, machado));
acervo.adicionar(new Livro('L003', '1984', 1949, orwell));
acervo.adicionar(new Livro('L004', 'A Revolução dos Bichos', 1945, orwell));

console.log('--- O acervo ---');
console.log('Total de livros:', acervo.total());

console.log('');
console.log('--- Busca por código ---');
const encontrado = acervo.buscarPorCodigo('L003');
if (encontrado !== undefined) {
  console.log('Achei:', encontrado.descricao());
}

const inexistente = acervo.buscarPorCodigo('L999');
if (inexistente === undefined) {
  console.log('L999 não está no acervo');
}

console.log('');
console.log('--- Tentando cadastrar código repetido ---');
try {
  acervo.adicionar(new Livro('L001', 'Dom Casmurro (outra edição)', 1899, machado));
} catch (erro) {
  if (erro instanceof Error) {
    console.log('Recusado:', erro.message);
  }
}

console.log('');
console.log('--- Remoção ---');
acervo.remover('L004');
console.log('Total depois de remover L004:', acervo.total());

console.log('');
console.log('--- Relatórios ---');
console.log('Títulos:', titulos(acervo.listar()));
console.log('Publicados depois de 1900:', titulos(publicadosDepoisDe(acervo.listar(), 1900)));
console.log('Mais antigo:', maisAntigo(acervo.listar()).descricao());

console.log('');
console.log('--- Mexendo na lista devolvida ---');
const lista = acervo.listar();
lista.push(new Livro('L900', 'Livro que nunca foi cadastrado', 2020, orwell));
console.log('A lista que eu peguei tem:', lista.length);
console.log('O acervo continua com:', acervo.total());
