export class Livro {
  constructor(public titulo: string) { }
  prazoMaximo(): number {
    return 14;
  }
  emprestar(dias: number): string {
    const prazo = Math.min(dias, this.prazoMaximo());
    return `${this.titulo}: emprestado por ${prazo} dia(s)`;
  }
}

export class LivroRaro extends Livro {
  prazoMaximo(): number {
    return 3;
  }
}
