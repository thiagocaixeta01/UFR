import {Pessoa} from "./pessoa"

export class Professor extends Pessoa {
    private curso: string;
    private titulacao: string;

    constructor (cpf: string, idade: number, nome: string, telefone: string, curso: string, titulacao: string) {
        super(cpf, idade, nome, telefone);
        this.curso = curso;
        this.titulacao = titulacao;
    }
}