import { EmailSmtp } from './email-smtp';

export class Emprestimo {
  private email = new EmailSmtp();

  registrar(leitor: string, contato: string, titulo: string): void {
    // ... grava o empréstimo ...
    this.email.enviar(contato, `${leitor}, você pegou ${titulo}. Devolva em 7 dias.`);
  }
}
