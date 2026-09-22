import { Livro } from './acervo';
import { Exportador } from './exportador';

export class ExportadorJson implements Exportador {
    exportar(livros: Livro[]): string {
        return JSON.stringify(livros);
    }
}