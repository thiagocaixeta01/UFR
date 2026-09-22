export interface Emprestavel {
  emprestar(): string;
}

export interface Baixavel {
  baixar(): string;
}

export class LivroFisico implements Emprestavel {
  constructor(public titulo: string) { }
  emprestar(): string {
    return `${this.titulo}: retire no balcão`;
  }
}

export class Ebook implements Baixavel {
  constructor(public titulo: string) { }
  baixar(): string {
    return `${this.titulo}: download liberado`;
  }
}