import { Emprestimo } from './dados';

// quem pede mudança aqui: a coordenação (a regra de atraso)
export class CalculoAtrasos { atrasados(emprestimos: Emprestimo[]): Emprestimo[] {
    const resultado: Emprestimo[] = [];
    
    for (const e of emprestimos) {
        if (e.diasAtraso > 0) {
            resultado.push(e);
        }
    }
    return resultado;
    }
}