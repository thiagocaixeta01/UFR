/* Código ajustado para as boas práticas do typescript, com o auxílio da IA, seguindo o mesmo intuíto 
dos exercícios anteriores. */

class Departamento {
    constructor(public nome: string, public sigla: string){}
}

class Contrato {
    constructor(public admitidoEm: string, public regime: string){}
}

abstract class Funcionario {
    protected contrato: Contrato

    constructor(
    admitidoEm: string, 
    regime: string,
    protected nome: string, 
    protected departamento: Departamento)
    {
        this.contrato = new Contrato(admitidoEm, regime)
    }

    abstract salario(): number

    public descricao(): string {
        return `${this.nome} - ${this.departamento.sigla} - desde ${this.contrato.admitidoEm} - ${this.salario().toFixed(2)}`
    }

    public pertenceAoDepartamento(dep: Departamento): boolean {
        return this.departamento === dep
    }
}

class Mensalista extends Funcionario {
    constructor(
        nome: string,
        departamento: Departamento,
        admitidoEm: string,
        regime: string,
        private salarioMensal: number
        ){super(admitidoEm, regime, nome, departamento)}

    public salario(): number {
        return this.salarioMensal 
    }
}

class Horista extends Funcionario{
    constructor(
        nome: string,
        departamento: Departamento,
        admitidoEm: string,
        regime: string,
        private horas: number, 
        private valorHora: number
        ){super(admitidoEm, regime, nome, departamento)}

    public salario(): number {
        return this.valorHora * this.horas
    }
}

const depTI: Departamento = new Departamento("Tecnoligia da Informação", "TI")
const depRH: Departamento = new Departamento("Recursos Humanos", "RH")
const listaDepartamento = [depRH, depTI]

const listaFuncionario: Funcionario[] = [
    new Mensalista("João", depRH, "2026-04-12", "CLT", 2500.00),
    new Horista("Carlos", depTI, "2024-05-10", "PJ", 160, 50),
    new Mensalista("Maria", depRH, "2025-06-05", "CLT", 3000.00),
    new Horista("Pedro", depTI, "2022-02-10", "PJ", 130, 40),
    new Mensalista("Ana", depRH, "2023-04-12", "CLT", 4000.00),
    new Horista("Mateus", depTI, "2024-02-01", "PJ", 200, 50)
]

for (const funcionario of listaFuncionario){
    console.log(funcionario.descricao())
}

const totalFolha = listaFuncionario.reduce((total, fun) => total + fun.salario(), 0)
console.log(`\n==> Total da folha: R$${totalFolha.toFixed(2)}`)

console.log(`\n------ Total de Cada Departamento ------`)
for (const dep of listaDepartamento){
    const totalDep = listaFuncionario.filter(fun => fun.pertenceAoDepartamento(dep))
    .reduce((totDep, fun) => totDep + fun.salario(), 0)

    console.log(`Departamento de ${dep.sigla}: R$${totalDep.toFixed(2)}`)
}

// =====================================================================================
// ------ Código que desenvolvi ------

// class Departamento {
//     constructor(public nome: string, public sigla: string){}
// }

// class Contrato {
//     constructor(public admitidoEm: string, public regime: string){}
// }

// abstract class Funcionario {
//     protected contrato: Contrato

//     constructor(
//     admitidoEm: string, 
//     regime: string,
//     protected nome: string, 
//     protected departamento: Departamento)
//     {
//         this.contrato = new Contrato(admitidoEm, regime)
//     }

//     abstract salario(): number

//     public descricao(): string {
//         return `${this.nome} - ${this.departamento.sigla} - desde ${this.contrato.admitidoEm} - ${this.salario().toFixed(2)}`
//     }

//     public pertenceAoDepartamento(dep: Departamento): boolean {
//         return this.departamento === dep
//     }
// }

// class Mensalista extends Funcionario {
//     constructor(
//         nome: string,
//         departamento: Departamento,
//         admitidoEm: string,
//         regime: string,
//         private salarioMensal: number
//         ){super(admitidoEm, regime, nome, departamento)}

//     public salario(): number {
//         return this.salarioMensal 
//     }
// }

// class Horista extends Funcionario{
//     constructor(
//         nome: string,
//         departamento: Departamento,
//         admitidoEm: string,
//         regime: string,
//         private horas: number, 
//         private valorHora: number
//         ){super(admitidoEm, regime, nome, departamento)}

//     public salario(): number {
//         return this.valorHora * this.horas
//     }
// }

// const depTI: Departamento = new Departamento("Tecnoligia da Informação", "TI")
// const depRH: Departamento = new Departamento("Recursos Humanos", "RH")

// const listaFuncionario: Funcionario[] = [
//     new Mensalista("João", depRH, "2026-04-12", "CLT", 2500.00),
//     new Horista("Carlos", depTI, "2024-05-10", "PJ", 160, 50),
//     new Mensalista("Maria", depRH, "2025-06-05", "CLT", 3000.00),
//     new Horista("Pedro", depTI, "2022-02-10", "PJ", 130, 40),
//     new Mensalista("Ana", depRH, "2023-04-12", "CLT", 4000.00),
//     new Horista("Mateus", depTI, "2024-02-01", "PJ", 200, 50)
// ]

// let totalFolha = 0
// let totalRH = 0
// let totalTI = 0
// for (const funcionario of listaFuncionario){
//     console.log(funcionario.descricao())
//     totalFolha += funcionario.salario()

//     if(funcionario.pertenceAoDepartamento(depRH)){
//         totalRH += funcionario.salario()
//     } else if (funcionario.pertenceAoDepartamento(depTI)){
//         totalTI += funcionario.salario()
//     }
// }
// console.log(`\n==> Total da Folha: R$${totalFolha.toFixed(2)}`)
// console.log("\n------ Total de cada departamento ------")
// console.log(`Departamento de TI: R$${totalTI.toFixed(2)}`)
// console.log(`Departamento de RH: R$${totalRH.toFixed(2)}`)