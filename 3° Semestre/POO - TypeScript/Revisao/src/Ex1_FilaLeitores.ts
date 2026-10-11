class Leitor {
    constructor(private nome: string, private readonly matricula: string){}

    public descricao(): string {
        return `${this.nome} - ${this.matricula}`
    }

    public trocarNome(novo): void {
        
    }
}