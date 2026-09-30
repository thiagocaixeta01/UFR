/* Código ajustado para as boas práticas do typescript, com o auxílio da IA, seguindo o mesmo intuíto 
do exercício anterior. */

class Pessoa {
    constructor(
        protected nome: string,
        protected cpf: string
    ){}
}

class Professor extends Pessoa {
    constructor(
        nome: string,
        cpf: string,
        private siape: number
    ){ super(nome, cpf) }

    public descricao(): string {
        return `Nome: ${this.nome} - SIAPE (${this.siape})`
    }
}

class Curso {
    constructor(
        public nome: string,
        public turno: string
    ){}
}

class Aluno extends Pessoa {
    constructor(
        nome: string,
        cpf:string,
        private matricula: number,
        private curso: Curso
    ){ super(nome, cpf) }

    public descricao(): string{
        return `${this.nome} - Matrícula: ${this.matricula} - Curso: ${this.curso.nome} (Turno: ${this.curso.turno})`
    }

    public estaNoCurso(curso: Curso): boolean {
        return this.curso === curso
    }
}

const cursoEngManha = new Curso("Engenharia de Software", "Manhã")
const cursoEngNoturno = new Curso("Engenharia de Software", "Noturno")

const professor = new Professor("Maikon", "123.456.789-00", 123)
console.log(professor.descricao())

const listaAlunos: Aluno[] = [
    new Aluno("Thiago", "321.654.987-01", 2026001, cursoEngNoturno),
    new Aluno("Ana", "321.654.987-02", 2026002, cursoEngNoturno),
    new Aluno("João", "321.654.987-03", 2026003, cursoEngNoturno),
    new Aluno("Maria", "321.654.987-03", 2026004, cursoEngManha),
    new Aluno("Pedro", "321.654.987-03", 2026005, cursoEngManha),
    new Aluno("José", "321.654.987-03", 2026006, cursoEngManha),
];

function contarExibirAlunosPorCurso(alunos: Aluno[], cursos: Curso[]){
    for(const curso of cursos){
        const total = alunos.filter(aluno => aluno.estaNoCurso(curso)).length
        console.log(`${curso.nome} (${curso.turno}): ${total} alunos`)
    }
}

console.log("\n\t------ Estado Inicial ------")
for(const aluno of listaAlunos){
    console.log(aluno.descricao())
}

console.log("")
contarExibirAlunosPorCurso(listaAlunos, [cursoEngManha, cursoEngNoturno])

console.log("\n\t------ Alterando o turno de manhã para 'tarde' ------")
cursoEngManha.turno = 'tarde'

for(const aluno of listaAlunos){
    console.log(aluno.descricao())
}

console.log("")
contarExibirAlunosPorCurso(listaAlunos, [cursoEngManha, cursoEngNoturno])


// ============================================================================

// ------ Código que desenvolvi ------
// class Pessoa {
//     constructor(
//         protected nome: string,
//         protected cpf: string
//     ){}
// }

// class Professor extends Pessoa {
//     constructor(
//         nome: string,
//         cpf: string,
//         private siape: number
//     ){ super(nome, cpf) }

//     public descricao(): string {
//         return `Nome: ${this.nome} - SIAPE (${this.siape})`
//     }
// }

// class Curso {
//     constructor(
//         public nome: string,
//         public turno: string
//     ){}
// }

// class Aluno extends Pessoa {
//     constructor(
//         nome: string,
//         cpf:string,
//         private matricula: number,
//         private curso: Curso
//     ){ super(nome, cpf) }

//     public descricao(): string{
//         return `${this.nome} - Matrícula: ${this.matricula} - Curso: ${this.curso.nome} (Turno: ${this.curso.turno})`
//     }

//     public estaNoCurso(curso: Curso): boolean {
//         return this.curso === curso
//     }
// }

// const cursoEngManha = new Curso("Engenharia de Software", "Manhã")
// const cursoEngNoturno = new Curso("Engenharia de Software", "Noturno")

// const professor = new Professor("Maikon", "123.456.789-00", 123)
// console.log(professor.descricao())
// console.log("")

// const listaAlunos: Aluno[] = [
//     new Aluno("Thiago", "321.654.987-01", 2026001, cursoEngNoturno),
//     new Aluno("Ana", "321.654.987-02", 2026002, cursoEngNoturno),
//     new Aluno("João", "321.654.987-03", 2026003, cursoEngNoturno),
//     new Aluno("Maria", "321.654.987-03", 2026004, cursoEngManha),
//     new Aluno("Pedro", "321.654.987-03", 2026005, cursoEngManha),
//     new Aluno("José", "321.654.987-03", 2026006, cursoEngManha),
// ];

// let qtdEngManha = 0
// let qtdEngNoturno = 0

// for (const aluno of listaAlunos) {
//     console.log(aluno.descricao())

//     if(aluno.estaNoCurso(cursoEngManha)){
//         qtdEngManha++
//     } else if(aluno.estaNoCurso(cursoEngNoturno)) {
//         qtdEngNoturno++
//     }
// }

// console.log(`\n${cursoEngManha.nome} (${cursoEngManha.turno}): ${qtdEngManha} pessoas`)
// console.log(`${cursoEngNoturno.nome} (${cursoEngNoturno.turno}): ${qtdEngNoturno} pessoas`)

// console.log("\n\t------ Após a mudança da atribuição do turno para tarde ------")
// cursoEngManha.turno = 'tarde'

// let qtdEngTarde = 0
// let qtdEngNoturno2 = 0

// for (const aluno of listaAlunos) {
//     console.log(aluno.descricao())

//     if(aluno.estaNoCurso(cursoEngManha)){
//         qtdEngTarde++
//     } else if(aluno.estaNoCurso(cursoEngNoturno)) {
//         qtdEngNoturno2++
//     }
// }

// console.log(`\n${cursoEngManha.nome} (${cursoEngManha.turno}): ${qtdEngTarde} pessoas`)
// console.log(`${cursoEngNoturno.nome} (${cursoEngNoturno.turno}): ${qtdEngNoturno2} pessoas`)