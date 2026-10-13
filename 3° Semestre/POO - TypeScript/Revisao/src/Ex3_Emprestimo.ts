class Leitor {
  public nome: string;
  private emprestimos: number = 0;
  constructor(nome: string) { this.nome = nome; }
  registrarEmprestimo(): void { this.emprestimos = this.emprestimos + 1; }
  descricao(): string { return `${this.nome} (${this.emprestimos} empréstimos)`; }
}

class Recibo {
  public numero: string;
  public data: string;
  constructor(numero: string, data: string) {
    this.numero = numero;
    this.data = data;
  }
  descricao(): string { return `${this.numero} em ${this.data}`; }
}

class Emprestimo {
  public readonly leitor: Leitor;
  public readonly recibo: Recibo;

  constructor(leitor: Leitor, numero: string) {
    this.leitor = leitor;                              // agregação
    this.recibo = new Recibo(numero, '06/10/2026');    // composição
    this.leitor.registrarEmprestimo();                 // faz o contador andar
  }
}

const ana = new Leitor('Ana');
const bruno = new Leitor('Bruno');

const emprestimos: Emprestimo[] = [
  new Emprestimo(ana, 'EMP-1'),
  new Emprestimo(bruno, 'EMP-2'),
  new Emprestimo(ana, 'EMP-3'),
];

for (const e of emprestimos) {
  console.log(`${e.recibo.descricao()} — ${e.leitor.nome}`);
}
console.log(ana.descricao());
console.log(bruno.descricao());

const devolvido = emprestimos.pop();
if (devolvido !== undefined) {
  console.log(`devolvido: ${devolvido.recibo.descricao()}`);
}
console.log(`em aberto: ${emprestimos.length}`);