import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";
import { Professor } from "./professor";
import { Turma } from "./turma";

let aluno1 = new Aluno ('123.456.789-00', 12, "Alvaro", "66 4002-8922", 1000);

let aluno2 = new Aluno ('213.456.789-00', 15, "João", "66 4002-8922", 1001);

let disciplina: Disciplina = new Disciplina("BD");

let professor: Professor = new Professor("123.456.789-12", 22, "Clovis", "66 1234-5678", "Computação", "Doutor");

let turma = new Turma(20262, professor, disciplina);

turma.matricular(aluno1);
turma.matricular(aluno2);

// console.log(turma);

turma.relatorio();