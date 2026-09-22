import { Livro } from './acervo';
import { Exportador } from './exportador';

export class ExportadorCsv implements Exportador {
    exportar(livros: Livro[]): string {
    const linhas: string[] = ['codigo;titulo;ano'];
    for (const livro of livros) {
        linhas.push(`${livro.codigo};${livro.titulo};${livro.ano}`);
    }
    return linhas.join('\n');
    }
}