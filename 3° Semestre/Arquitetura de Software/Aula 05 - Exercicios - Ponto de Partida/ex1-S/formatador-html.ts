import { Emprestimo } from './dados';
// quem pede mudança aqui: a secretaria (o formato)

export class FormatadorHtml {
    formatar(atrasados: Emprestimo[]): string {
    let html = '<ul>\n';
    for (const e of atrasados) {
        html += ` <li>${e.leitor}: ${e.titulo} (${e.diasAtraso} dias)</li>\n`;
    }
    html += '</ul>';
    return html;
    }
}