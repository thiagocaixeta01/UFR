export class Prateleira<T> {
  private itens: T[];
  private capacidade: number;

  constructor(capacidade: number) {
    this.itens = [];
    this.capacidade = capacidade;
  }

  guardar(item: T): void {
    if (this.itens.length === this.capacidade) {
      throw new Error('Prateleira cheia');
    }
    this.itens.push(item);
  }

  listar(): T[] {
    return this.itens;
  }
}
