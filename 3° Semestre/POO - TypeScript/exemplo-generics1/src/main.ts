import { Prateleira } from './prateleira';
import { Livro } from './livro';
import { Dvd } from './dvd';
import { Stack } from './stack';

function ultimo<T>(itens: T[]): T {
  return itens[itens.length - 1];
}

const livros = new Prateleira<Livro>(2);
livros.guardar(new Livro('Dom Casmurro', 'Machado de Assis'));
livros.guardar(new Livro('1984', 'George Orwell'));

const dvds = new Prateleira<Dvd>(5);
dvds.guardar(new Dvd('Cidade de Deus', 1.30));

for (const livro of livros.listar()) {
  console.log(`${livro.titulo}, de ${livro.autor}`);
}

for (const dvd of dvds.listar()) {
  console.log(`${dvd.titulo} (${dvd.duracaoMinutos} min)`);
}

console.log('Último livro guardado:', ultimo(livros.listar()).titulo);

try {
  livros.guardar(new Livro('O Cortiço', 'Aluísio Azevedo'));
} catch (erro) {
  if (erro instanceof Error) {
    console.log(erro.message);
  }
}

// livros.guardar(new Dvd('Central do Brasil', 110));   // não compila

let stackLivros: Stack<Livro> = new Stack<Livro>();
stackLivros.push(new Livro("Título1", "Autor1"));
stackLivros.push(new Livro("Título2", "Autor2"));
stackLivros.push(new Livro("Título3", "Autor3"));

while (stackLivros.isEmpty() == false){
  console.log(stackLivros.pop());
}