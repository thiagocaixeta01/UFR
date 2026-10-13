interface Emprestavel {
  emprestar(dias: number): string;
}

abstract class ItemAcervo {
  protected titulo: string;
  protected diaria: number;

  constructor(titulo: string, diaria: number) {
    this.titulo = titulo;
    this.diaria = diaria;
  }

  abstract descricao(): string;

  valorDiaria(): number {
    return this.diaria;
  }
}

class Livro extends ItemAcervo implements Emprestavel {
  private autor: string;
  constructor(titulo: string, autor: string, diaria: number) {
    super(titulo, diaria);
    this.autor = autor;
  }
  descricao(): string { return `Livro: ${this.titulo}, de ${this.autor}`; }
  emprestar(dias: number): string { return `${this.titulo} por ${dias} dias`; }
}

class Dvd extends ItemAcervo implements Emprestavel {
  private minutos: number;
  constructor(titulo: string, minutos: number, diaria: number) {
    super(titulo, diaria);
    this.minutos = minutos;
  }
  descricao(): string { return `DVD: ${this.titulo}, ${this.minutos} min`; }
  emprestar(dias: number): string { return `${this.titulo} por ${dias} dias`; }
}

class Referencia extends ItemAcervo {   // sem implements: não é emprestável
  private area: string;
  constructor(titulo: string, area: string, diaria: number) {
    super(titulo, diaria);
    this.area = area;
  }
  descricao(): string { return `Referência: ${this.titulo} (${this.area})`; }
}

function descreverTodos(itens: ItemAcervo[]): void {
  for (const item of itens) {
    console.log(item.descricao());
  }
}

function somarDiarias(itens: ItemAcervo[]): number {
  let total = 0;
  for (const item of itens) {
    total = total + item.valorDiaria();
  }
  return total;
}

function emprestarTodos(itens: Emprestavel[], dias: number): void {
  for (const item of itens) {
    console.log(item.emprestar(dias));
  }
}

const acervo: ItemAcervo[] = [
  new Livro('Iracema', 'José de Alencar', 2),
  new Dvd('Central do Brasil', 110, 4),
  new Referencia('Dicionário Houaiss', 'Linguística', 2),
];

descreverTodos(acervo);
console.log(`soma das diárias: R$ ${somarDiarias(acervo)}`);

const emprestaveis: Emprestavel[] = [
  new Livro('Dom Casmurro', 'Machado de Assis', 2),
  new Dvd('Cidade de Deus', 130, 4),
];
emprestarTodos(emprestaveis, 7);