import { Livro } from './acervo';
import { Exportador } from './exportador';

export function exportarAcervo(livros: Livro[], exportador: Exportador): string {
  return exportador.exportar(livros);
}
