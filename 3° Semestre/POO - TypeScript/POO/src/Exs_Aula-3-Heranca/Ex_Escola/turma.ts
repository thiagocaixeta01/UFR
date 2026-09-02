import {Aluno} from "./aluno";
import {Professor} from "./professor";
import { Disciplina } from "./disciplina";  

export class Turma {
    private alunos: Aluno[];

    constructor (private semestre: number, private professor: Professor, private disciplina: Disciplina) {
        this.alunos = [];
    }

    matricular(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    relatorio(): void{
        console.log(`Disciplina: ${this.disciplina.nomeDisciplina}`);
        console.log(`Professor: ${this.professor.nome}`);
        console.log(`Semestre: ${this.semestre}`);
        console.log(`\n Alunos:`);
        
        for(let aluno of this.alunos){
            console.log(`-> ${aluno.matriculaAluno} - ${aluno.nome}`);
        }

    }
}