import { Emprestimo } from './emprestimo';

// queremos só conferir a mensagem, sem mandar e-mail nenhum
console.log('--- Teste ---');
new Emprestimo().registrar('Teste', 'teste@ufr.br', 'Livro de teste');
