export class Pessoa {
    protected cpf:string;
    protected idade: number;
    protected _nome: string;
    protected telefone: string;

    constructor (cpf: string, idade: number, nome: string, telefone: string){
        this.cpf = cpf;
        this.idade = idade;
        this._nome = nome;
        this.telefone = telefone;
    }

    get nome(): string {
        return this._nome;
    }
}