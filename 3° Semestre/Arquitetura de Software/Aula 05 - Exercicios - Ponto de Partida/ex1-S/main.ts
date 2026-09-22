import { emprestimos } from './dados';
import { CalculoAtrasos } from './calculo-atrasos';
import { FormatadorHtml } from './formatador-html';
import { EnvioRelatorio } from './envio-relatorio';

const atrasados = new CalculoAtrasos().atrasados(emprestimos);
const html = new FormatadorHtml().formatar(atrasados);

new EnvioRelatorio().enviar('secretaria@ufr.br', html);