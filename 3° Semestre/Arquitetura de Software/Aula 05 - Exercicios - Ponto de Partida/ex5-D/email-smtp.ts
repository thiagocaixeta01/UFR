export class EmailSmtp {
  enviar(destino: string, mensagem: string): void {
    console.log('[SMTP smtp.ufr.br] conectando...');
    console.log(`[SMTP smtp.ufr.br] para ${destino}: ${mensagem}`);
  }
}
