// quem pede mudança aqui: a TI (como o relatório sai)

export class EnvioRelatorio {

enviar(destino: string, conteudo: string): void {
    console.log(`[e-mail para ${destino}]`);
    console.log(conteudo);
    }
}