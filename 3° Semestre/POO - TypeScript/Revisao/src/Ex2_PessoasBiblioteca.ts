class Pessoa {
    constructor(protected nome: string) {}

    descricao(): string {
        return this.nome
    }
}

class Leitor extends Pessoa {               // (1) palavra da herança
  constructor(nome: string, private matricula: number) {
    super(nome);                          // (2) monta a parte da mãe. Onde ela fica no construtor?
}

  descricao(): string {                    // (3) que nome isso tem? (mesmo nome da mãe)
    return `Leitor ${this.nome} — matrícula ${this.matricula}`;   // (4) por que dá pra usar nome aqui?
  }
}

class Bibliotecario extends Pessoa {
  // mesma ideia: setor privado, super(nome), descricao()
  // formato: "Bibliotecário Carlos — setor Periódicos"
  constructor(nome: string, private setor: string) { super(nome) }

  descricao(): string {
      return `Bibliotecário ${this.nome} — setor ${this.setor}`
  }
}

function imprimirTodos(pessoas: Pessoa[]): void {     // (5)
  for (const p of pessoas) {
    console.log(p.descricao());                          // (6) sem if de tipo!
  }
}

function descricaoMaisLonga(pessoas: Pessoa[]): string {
  let maior = "";
  for (const p of pessoas) {
    const d = p.descricao();
    if (d.length > maior.length) {                    // (7) como medir tamanho de string?
      maior = d;
    }
  }
  return maior;                                      // (8)
}

const pessoas: Pessoa[] = [
  new Leitor('Ana', 2026001),
  new Bibliotecario('Carlos', 'Periódicos'),
  new Leitor('Bruno', 2026002),
];

imprimirTodos(pessoas);
console.log(`mais longa: ${descricaoMaisLonga(pessoas)}`);

const saiu = pessoas.pop();
if (saiu !== undefined) {
  console.log(`saiu: ${saiu.descricao()}`);
}
imprimirTodos(pessoas);