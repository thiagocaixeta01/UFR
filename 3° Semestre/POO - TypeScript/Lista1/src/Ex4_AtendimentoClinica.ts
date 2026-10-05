/* Código ajustado para as boas práticas do typescript, com o auxílio da IA, seguindo o mesmo intuíto 
dos exercícios anteriores. */

class Paciente {
    constructor(
        public nome: string,
        public convenio: string
    ){}
}

class Medico {
    constructor(
        public nome: string,
        public crm: string
    ){}
}

class Atendimento {
    constructor(
        protected data: string,
        protected valor: number,
        protected paciente: Paciente,
        protected medico: Medico
    ){}

    public registro(): string {
        return `${this.data}: atendimento de ${this.paciente.nome} por Dr(a). ${this.medico.nome}
            (${this.medico.crm})`
    }

    public dadosPaciente(): string {
        return `${this.paciente.nome} - ${this.paciente.convenio}`
    }

    public valorCobrado(): number {
        return this.valor
    }

    public pertenceAoMedico(medico: Medico): boolean {
        return this.medico === medico
    }
}

class Consulta extends Atendimento {
    constructor(
        private especialidade: string,
        data: string,
        valor: number,
        paciente: Paciente,
        medico: Medico
    ){super(data, valor, paciente, medico)}

    public override registro(): string {
        return `${super.registro()} - consulta de ${this.especialidade}`
    }
}

class Exame extends Atendimento {
    constructor(
        private tipo: string,
        data: string,
        valor: number,
        paciente: Paciente,
        medico: Medico
    ){super(data, valor, paciente, medico)}

    public override registro(): string {
        return `${super.registro()} - exame de ${this.tipo}`
    }
}

const paciente1 = new Paciente("Ana", "Unimed")
const paciente2 = new Paciente("Pedro", "SUS")
const paciente3 = new Paciente("João", "Unimed")

const medico1 = new Medico("Julia", "12345")
const medico2 = new Medico("Marcos", "56789")

const listaMedicos: Medico[] = [medico1, medico2]

const listaAtendimentos: Atendimento[] = [
    new Consulta("Cardiologia", "2026-10-01", 950.00, paciente1, medico1),
    new Exame("Ecocardiograma", "2026-09-31", 700.00, paciente1, medico1),
    new Consulta("Ortopedia", "2026-10-01", 700.00, paciente2, medico2),
    new Exame("Raio-X", "2026-09-31", 150.00, paciente2, medico2),
    new Consulta("Cardiologia", "2026-10-01", 800.00, paciente3, medico1),
    new Exame("Tomografia", "2026-09-31", 500.00, paciente3, medico1)
];

for (const atendimento of listaAtendimentos){
    console.log(atendimento.dadosPaciente())
    console.log(atendimento.registro())
    console.log("")
}

const faturamentoTotal = listaAtendimentos.reduce((acc, atendimento) => acc + atendimento.valorCobrado(), 0)
console.log(`Faturamento: R$${faturamentoTotal.toFixed(2)}`)

console.log("\n------ Quantidade de Atendimentos por Médico ------")
for (const medico of listaMedicos){
    const qtd = listaAtendimentos.filter(a => a.pertenceAoMedico(medico)).length
    console.log(`Dr(a). ${medico.nome}: ${qtd} atendimentos`)
}

// ===================================================================================================
// ------ Código que desenvolvi ------

// class Paciente {
//     constructor(
//         public nome: string,
//         public convenio: string
//     ){}
// }

// class Medico {
//     constructor(
//         public nome: string,
//         public crm: string
//     ){}
// }

// class Atendimento {
//     constructor(
//         protected data: string,
//         protected valor: number,
//         protected paciente: Paciente,
//         protected medico: Medico
//     ){}

//     public registro(): string {
//         return `${this.data}: atendimento de ${this.paciente.nome} por Dr(a). ${this.medico.nome}
//             (${this.medico.crm})`
//     }

//     public dadosPaciente(): string {
//         return `${this.paciente.nome} - ${this.paciente.convenio}`
//     }

//     public valorCobrado(): number {
//         return this.valor
//     }

//     public pertenceAoMedico(medico: Medico): boolean {
//         return this.medico === medico
//     }
// }

// class Consulta extends Atendimento {
//     constructor(
//         private especialidade: string,
//         data: string,
//         valor: number,
//         paciente: Paciente,
//         medico: Medico
//     ){super(data, valor, paciente, medico)}

//     public override registro(): string {
//         return `${super.registro()} - consulta de ${this.especialidade}`
//     }
// }

// class Exame extends Atendimento {
//     constructor(
//         private tipo: string,
//         data: string,
//         valor: number,
//         paciente: Paciente,
//         medico: Medico
//     ){super(data, valor, paciente, medico)}

//     public override registro(): string {
//         return `${super.registro()} - exame de ${this.tipo}`
//     }
// }

// const paciente1 = new Paciente("Ana", "Unimed")
// const paciente2 = new Paciente("Pedro", "SUS")
// const paciente3 = new Paciente("João", "Unimed")

// const medico1 = new Medico("Julia", "12345")
// const medico2 = new Medico("Marcos", "56789")

// const listaAtendimentos: Atendimento[] = [
//     new Consulta("Cardiologia", "2026-10-01", 950.00, paciente1, medico1),
//     new Exame("Ecocardiograma", "2026-09-31", 700.00, paciente1, medico1),
//     new Consulta("Ortopedia", "2026-10-01", 700.00, paciente2, medico2),
//     new Exame("Raio-X", "2026-09-31", 150.00, paciente2, medico2),
//     new Consulta("Cardiologia", "2026-10-01", 800.00, paciente3, medico1),
//     new Exame("Tomografia", "2026-09-31", 500.00, paciente3, medico1)
// ];

// let faturamentoTotal = 0
// let qtdAtendimentosMed1 = 0
// let qtdAtendimentosMed2 = 0
// for (const atendimento of listaAtendimentos){
//     console.log(atendimento.dadosPaciente())
//     console.log(atendimento.registro())
//     faturamentoTotal += atendimento.valorCobrado()

//     if (atendimento.pertenceAoMedico(medico1)){
//         qtdAtendimentosMed1++
//     } else if (atendimento.pertenceAoMedico(medico2)){
//         qtdAtendimentosMed2++
//     }
// }

// console.log("\n==> Faturamento total: R$", faturamentoTotal.toFixed(2))
// console.log("\n------ Quantidade de Atendimentos por Médico ------")
// console.log(`Júlia: ${qtdAtendimentosMed1} atendimentos`)
// console.log(`Marcos: ${qtdAtendimentosMed2} atendimentos`)