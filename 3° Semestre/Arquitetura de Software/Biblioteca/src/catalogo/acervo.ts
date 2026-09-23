import { Livro } from './livro';

export class Acervo {
  private livros: Livro[];

  constructor() {
    this.livros = [];
  }

  adicionar(livro: Livro): void {
    if (this.buscarPorCodigo(livro.codigo) !== undefined) {
      throw new Error(`Já existe um livro com o código ${livro.codigo}`);
    }
    this.livros.push(livro);
  }

  buscarPorCodigo(codigo: string): Livro | undefined {
    for (const livro of this.livros) {
      if (livro.codigo === codigo) {
        return livro;
      }
    }
    return undefined;
  }

  remover(codigo: string): void {
    const restantes: Livro[] = [];
    for (const livro of this.livros) {
      if (livro.codigo !== codigo) {
        restantes.push(livro);
      }
    }
    this.livros = restantes;
  }

  listar(): Livro[] {
    return [...this.livros];
  }

  total(): number {
    return this.livros.length;
  }
}
