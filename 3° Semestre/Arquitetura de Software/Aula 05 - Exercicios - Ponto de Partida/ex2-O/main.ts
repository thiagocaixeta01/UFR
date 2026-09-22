import { livros } from './acervo';
import { exportarAcervo } from './exportar';
import { ExportadorCsv } from './exportador-csv';
import { ExportadorJson } from './exportador-json';

console.log('--- CSV ---');
console.log(exportarAcervo(livros, new ExportadorCsv()));

console.log('--- JSON ---');
console.log(exportarAcervo(livros, new ExportadorJson()));