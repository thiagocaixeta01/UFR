import {Pessoa} from "./pessoa"

export class Aluno extends Pessoa {
    private matricula: number;

    constructor (cpf: string, idade: number, nome: string, telefone: string, matricula: number) {
        super(cpf, idade, nome, telefone);
        this.matricula = matricula;
    }

    get matriculaAluno(): number{
        return this.matricula;
    }
}