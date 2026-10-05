/* Código ajustado para as boas práticas do typescript, com o auxílio da IA, seguindo o mesmo intuíto 
dos exercícios anteriores. */

class Local {
    constructor(public readonly nome: string, public readonly capacidade: number){}
}

class Lote {
    constructor(public readonly setor: string, public readonly quantidade: number){}
}

class Produtora {
    constructor(public readonly nome: string, public readonly comissao: number){}
}

abstract class Evento {
    protected lotes: Lote[] = []

    constructor(protected readonly titulo: string, protected readonly local: Local){}

    public abstract precoBase(): number
    public abstract detalhe(): string

    public receita(): number {
        const totalIngressos = this.lotes.reduce((soma, lote) => soma + lote.quantidade, 0)
        return totalIngressos * this.precoBase()
    }

    public adicionarLote(setor: string, qtd: number): void {
        this.lotes.push(new Lote(setor, qtd))
    }

    public repassePara(produtora: Produtora): number {
        return this.receita() * (produtora.comissao/100)
    }

    public descricao(): string {
        return `${this.titulo} - ${this.local.nome} - ${this.detalhe()}`
    }
}

class Show extends Evento {
    constructor(titulo: string, local: Local, private readonly banda: string)
    {super(titulo, local)}

    public precoBase(): number {
        return 120
    }

    public detalhe(): string {
        return this.banda
    }
}

class Workshop extends Evento {
    constructor(titulo: string, local: Local, private readonly horas: number)
    {super(titulo, local)}

    public precoBase(): number {
        return 40 * this.horas
    }

    public detalhe(): string {
        return `Carga horária: ${this.horas} h`
    }
}

const local1 = new Local("Parque de Exposição", 60000)
const local2 = new Local("Auditório Central", 180)

const listaEventos: Evento[] = [
    new Show("Show Sertanejo", local1, "Milionário e José Rico"),
    new Workshop("Maneiras eficientes de tornar sua casa autossustentável", local2, 14),
    new Show("Show Sertanejo", local2, "Chico Rei e Paraná")
]

listaEventos[0].adicionarLote("Área VIP", 20000)
listaEventos[0].adicionarLote("Pista", 20000)
listaEventos[0].adicionarLote("Camarote", 20000)

listaEventos[1].adicionarLote("Setor Unico", 60)
listaEventos[1].adicionarLote("Online", 60)
listaEventos[1].adicionarLote("Presencial", 60)

listaEventos[2].adicionarLote("Plateia A", 60)
listaEventos[2].adicionarLote("Plateia B", 60)
listaEventos[2].adicionarLote("Plateia C", 60)

const produtora1 = new Produtora("Produtora 1", 10)
const produtora2 = new Produtora("Produtora 2", 15)

let receitaAcumulada = 0
for (const evento of listaEventos) {
    receitaAcumulada += evento.receita()

    console.log(evento.descricao())
    console.log("--> Receita: R$", evento.receita().toFixed(2))
    console.log(`Repasse para a produtora ${produtora1.nome}: R$${evento.repassePara(produtora1).toFixed(2)}`)
    console.log(`Repasse para a produtora ${produtora2.nome}: R$${evento.repassePara(produtora2).toFixed(2)}\n`)    
}
console.log(`Receita acumulada: R$${receitaAcumulada.toFixed(2)}`)

// ==============================================================================================
// ------ Código Desenvolvido ------

// class Local {
//     constructor(public nome: string, public capacidade: number){}
// }

// class Lote {
//     constructor(public setor: string, public quantidade: number){}
// }

// class Produtora {
//     constructor(public nome: string, public comissao: number){}
// }

// abstract class Evento {
//     protected lotes: Lote[] = []

//     constructor(protected titulo: string, protected local: Local){}

//     public abstract precoBase(): number

//     public receita(): number {
//         let somaIngressos = 0
//         for(const lote of this.lotes){
//             somaIngressos += lote.quantidade
//         }
        
//         return somaIngressos * this.precoBase()
//     }

//     public adicionarLote(setor: string, qtd: number): void {
//         const novoLote = new Lote(setor, qtd)
//         this.lotes.push(novoLote)
//     }

//     public repassePara(produtora: Produtora): number {
//         return this.receita() * (produtora.comissao/100)
//     }

//     public descricao(): string {
//         return `${this.titulo} - ${this.local.nome} - ${this.detalhe()}`
//     }

//     public abstract detalhe(): string
// }

// class Show extends Evento {
//     constructor(titulo: string, local: Local, private banda: string)
//     {super(titulo, local)}

//     public precoBase(): number {
//         return 120
//     }

//     public detalhe(): string {
//         return this.banda
//     }
// }

// class Workshop extends Evento {
//     constructor(titulo: string, local: Local, private horas: number)
//     {super(titulo, local)}

//     public precoBase(): number {
//         return 40 * this.horas
//     }

//     public detalhe(): string {
//         return `Carga horária: ${this.horas} horas`
//     }
// }

// const local1 = new Local("Parque de Exposição", 60000)
// const local2 = new Local("Auditório Central", 180)

// const listaEventos: Evento[] = [
//     new Show("Show Sertanejo", local1, "Milionário e José Rico"),
//     new Workshop("Maneiras eficientes de tornar sua casa autossustentável", local2, 14),
//     new Show("Show Sertanejo", local2, "Chico Rei e Paraná")
// ]

// listaEventos[0].adicionarLote("Área VIP", 20000)
// listaEventos[0].adicionarLote("Pista", 20000)
// listaEventos[0].adicionarLote("Camarote", 20000)

// listaEventos[1].adicionarLote("Plateia A", 60)
// listaEventos[1].adicionarLote("Plateia B", 60)
// listaEventos[1].adicionarLote("Plateia C", 60)

// listaEventos[2].adicionarLote("Plateia A", 60)
// listaEventos[2].adicionarLote("Plateia B", 60)
// listaEventos[2].adicionarLote("Plateia C", 60)

// const produtora1 = new Produtora("Produtora 1", 10)
// const produtora2 = new Produtora("Produtora 2", 15)

// let receitaAcumulada = 0
// for (const evento of listaEventos) {
//     console.log(evento.descricao())
//     console.log("--> Receita: R$", evento.receita().toFixed(2))
//     console.log(`Repasse para a produtora ${produtora1.nome}: R$`, evento.repassePara(produtora1).toFixed(2))
//     console.log(`Repasse para a produtora ${produtora2.nome}: R$`, evento.repassePara(produtora2).toFixed(2),"\n")

//     receitaAcumulada += evento.receita()    
// }
// console.log(`Receita acumulada: R$${receitaAcumulada.toFixed(2)}`)