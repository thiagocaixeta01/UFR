import { Livro, LivroRaro } from './livro';

function emprestarTodos(livros: Livro[], dias: number): void {
  for (const livro of livros) {
    console.log(livro.emprestar(dias));
  }
}

const pedido: Livro[] = [
  new Livro('Dom Casmurro'),
  new LivroRaro('Os Lusíadas (edição de 1572)'),
  new Livro('1984'),
];

try {
  emprestarTodos(pedido, 7);
} catch (erro) {
  if (erro instanceof Error) console.log('Falhou:', erro.message);
}
