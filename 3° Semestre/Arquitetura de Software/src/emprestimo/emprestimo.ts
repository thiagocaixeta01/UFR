import { Acervo } from '../catalogo';
import { calcularMulta, PoliticaMulta } from '../multa';
import { enviarEmail } from '../notificacao';

const PRAZO_DIAS = 7;

interface Registro {
  codigo: string;
  email: string;
  politica: PoliticaMulta;
  diaPrevisto: number;
}

export class Emprestimo {
  private acervo: Acervo;
  private registros: Registro[];

  constructor(acervo: Acervo) {
    this.acervo = acervo;
    this.registros = [];
  }

  emprestar(codigo: string, email: string, politica: PoliticaMulta, diaAtual: number): void {
    if (this.acervo.buscarPorCodigo(codigo) === undefined) {
      throw new Error(`O livro ${codigo} não está no acervo`);
    }

    this.registros.push({ codigo, email, politica, diaPrevisto: diaAtual + PRAZO_DIAS });
  }

  devolver(codigo: string, diaAtual: number): number {
    let registro: Registro | undefined = undefined;
    for (const atual of this.registros) {
      if (atual.codigo === codigo) {
        registro = atual;
      }
    }
    
    if (registro === undefined) {
      throw new Error(`O livro ${codigo} não está emprestado`);
    }

    let multa = 0;
    const diasAtraso = diaAtual - registro.diaPrevisto;
    if (diasAtraso > 0) {
      multa = calcularMulta(diasAtraso, registro.politica);
      enviarEmail(
        registro.email,
        `${diasAtraso} dia(s) de atraso. Multa de R$ ${multa.toFixed(2)}.`
      );
    }

    const restantes: Registro[] = [];
    for (const atual of this.registros) {
      if (atual.codigo !== codigo) {
        restantes.push(atual);
      }
    }
    this.registros = restantes;

    return multa;
  }
}
