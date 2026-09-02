import { Livro } from './livro';

const PRAZO_DIAS = 7;
const MULTA_POR_DIA = 1.5;
interface RegistroEmprestimo {
  codigo: string;
  email: string;
  diaPrevisto: number;
}
export class Acervo {
  private livros: Livro[];

  constructor() {
    this.livros = [];
    this.emprestimos = [];
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

  private emprestimos: RegistroEmprestimo[]; // e `= []` no construtor,
  // junto com `this.livros`
  
  emprestar(codigo: string, email: string, diaAtual: number): void {
  
    if (this.buscarPorCodigo(codigo) === undefined) {
    throw new Error(`O livro ${codigo} não está no acervo`);
  }
    this.emprestimos.push({ codigo, email, diaPrevisto: diaAtual + PRAZO_DIAS });
  }

  devolver(codigo: string, diaAtual: number): number {
  
  let registro: RegistroEmprestimo | undefined = undefined;
  for (const atual of this.emprestimos) {
    if (atual.codigo === codigo) { registro = atual; }
  }
  
  if (registro === undefined) {
    throw new Error(`O livro ${codigo} não está emprestado`);
  }
  
  let multa = 0;
  const diasAtraso = diaAtual - registro.diaPrevisto;
  
  if (diasAtraso > 0) {
    multa = this.calcularMulta(diasAtraso);
    this.enviarEmail(registro.email, `${diasAtraso} dia(s) de atraso. Multa de R$ ${multa.toFixed(2)}.`);
  }
  
  // ... e tire o registro da lista de emprestimos
  
  return multa;
  }
  
  calcularMulta(diasAtraso: number): number {
    return diasAtraso * MULTA_POR_DIA;
  }
  
  enviarEmail(destino: string, mensagem: string): void {
    console.log(`[e-mail para ${destino}] ${mensagem}`);
  }
}