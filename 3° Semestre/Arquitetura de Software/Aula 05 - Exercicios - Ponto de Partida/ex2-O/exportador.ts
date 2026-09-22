import { Livro } from './acervo';

export interface Exportador {
    exportar(livros: Livro[]): string;
}