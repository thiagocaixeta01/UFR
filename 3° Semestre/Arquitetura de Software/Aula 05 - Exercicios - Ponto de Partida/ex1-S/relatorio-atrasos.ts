import { Emprestimo } from './dados';

export class RelatorioAtrasos {
  gerar(emprestimos: Emprestimo[]): void {
    // 1. separa os empréstimos atrasados
    const atrasados: Emprestimo[] = [];
    for (const e of emprestimos) {
      if (e.diasAtraso > 0) {
        atrasados.push(e);
      }
    }

    // 2. monta o relatório em HTML
    let html = '<ul>\n';
    for (const e of atrasados) {
      html += `  <li>${e.leitor}: ${e.titulo} (${e.diasAtraso} dias)</li>\n`;
    }
    html += '</ul>';

    // 3. envia
    console.log('[e-mail para secretaria@ufr.br]');
    console.log(html);
  }
}
