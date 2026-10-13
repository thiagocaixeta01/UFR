class Leitor {
  private nome: string;                    // (1) quem pode ver?
  private readonly matricula: number;       // (2) nasce e não muda

  constructor(nome: string, matricula: number) {
    if (nome === "") {
      throw new Error('nome não pode ser vazio');   // (3)
    }
    this.nome = nome;                   // (4) o próprio objeto
    this.matricula = matricula;
  }

  descricao(): string {
    return `${this.nome} — matrícula ${this.matricula}`;
  }

  trocarNome(novo: string): void {
    if (novo === "") {
      throw new Error('nome não pode ser vazio');
    }
    this.nome = novo;                   // (5) o que entra aqui?
  }
}

const fila: Leitor[] = [];
fila.push(new Leitor('Ana', 2026001));   // (6) adicionar no fim
fila.push(new Leitor('Bruno', 2026002));
fila.push(new Leitor('Carla', 2026003));

for (const leitor of fila) {           // (7) of ou in?
  console.log(leitor.descricao());
}

const desistiu = fila.pop();               // (8) pense no tipo: Leitor ou Leitor | undefined?
if (desistiu !== undefined) {
  console.log(`desistiu: ${desistiu.descricao()}`);
}
console.log(`ainda na fila: ${fila.length}`);   // (9) propriedade, não método

const primeiro = fila[0];
if (primeiro !== undefined) {
  primeiro.trocarNome('Ana Paula');
  console.log(`cadastro corrigido: ${primeiro.descricao()}`);
}

try {
  new Leitor('', 2026009);
} catch (erro) {
  if (erro instanceof Error) {                 // (10) como checar o tipo no catch?
    console.log(`recusado: ${erro.message}`);
  }
}