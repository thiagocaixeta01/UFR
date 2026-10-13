class ItemNaoEncontradoError extends Error {}

class Livro {
  public readonly titulo: string;
  public readonly genero: string;
  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
  }
  descricao(): string { return `${this.titulo} [${this.genero}]`; }
}

class Catalogo<T> {
  private itens: Map<string, T> = new Map<string, T>();

  guardar(chave: string, item: T): void {
    this.itens.set(chave, item);
  }

  buscar(chave: string): T {
    const achado = this.itens.get(chave);
    if (achado === undefined) {
      throw new ItemNaoEncontradoError(`${chave} não está no catálogo`);
    }
    return achado;
  }

  quantos(): number {
    return this.itens.size;
  }

  todos(): T[] {
    const lista: T[] = [];
    for (const item of this.itens.values()) {
      lista.push(item);
    }
    return lista;
  }
}

function generosDiferentes(livros: Livro[]): number {
  const generos = new Set<string>();
  for (const livro of livros) {
    generos.add(livro.genero);   // repetido o Set ignora
  }
  return generos.size;
}

const catalogo = new Catalogo<Livro>();
catalogo.guardar('978-01', new Livro('Iracema', 'romance'));
catalogo.guardar('978-02', new Livro('Dom Casmurro', 'romance'));
catalogo.guardar('978-03', new Livro('O Alienista', 'conto'));

console.log(catalogo.buscar('978-01').descricao());
console.log(`itens: ${catalogo.quantos()}`);
console.log(`gêneros diferentes: ${generosDiferentes(catalogo.todos())}`);
console.log(catalogo.todos()[0]?.descricao());

let ultimaBusca = '';
try {
  ultimaBusca = '978-99';
  catalogo.buscar(ultimaBusca);
} catch (erro) {
  if (erro instanceof ItemNaoEncontradoError) {
    console.log(`erro: ${erro.message}`);
  }
}
console.log(`última busca: ${ultimaBusca}`);