import { Livro } from '../catalogo';

export function titulos(livros: Livro[]): string[] {
  const resultado: string[] = [];
  for (const livro of livros) {
    resultado.push(livro.titulo);
  }
  return resultado;
}

export function publicadosDepoisDe(livros: Livro[], ano: number): Livro[] {
  const resultado: Livro[] = [];
  for (const livro of livros) {
    if (livro.ano > ano) {
      resultado.push(livro);
    }
  }
  return resultado;
}

export function maisAntigo(livros: Livro[]): Livro {
  let escolhido = livros[0];
  for (const livro of livros) {
    if (livro.ano < escolhido.ano) {
      escolhido = livro;
    }
  }
  return escolhido;
}
