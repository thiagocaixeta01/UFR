import { Acervo } from './acervo';
import { Livro } from './livro';
import { calcularMulta } from './multa';
import { enviarEmail } from './notificacao';

const PRAZO_DIAS = 7;

interface RegistroEmprestimo { // <- sem export: detalhe interno
    codigo: string;
    email: string;
    diaPrevisto: number;
}

export class Emprestimo {
    private acervo: Acervo;
    private registros: RegistroEmprestimo[];
    
    constructor(acervo: Acervo) { this.acervo = acervo; this.registros = []; }

    emprestar(codigo: string, email: string, diaAtual: number): void {
    if (this.acervo.buscarPorCodigo(codigo) === undefined) {
        throw new Error(`O livro ${codigo} não está no acervo`);
    }
        this.registros.push({ codigo, email, diaPrevisto: diaAtual + PRAZO_DIAS });
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
        multa = calcularMulta(diasAtraso);
        enviarEmail(registro.email, `${diasAtraso} dia(s) de atraso. Multa de R$ ${multa.toFixed(2)}.`);
    }

    

    return multa;
    }
}